// AsciiEngine — a reusable ASCII particle-grid engine.
//
// Ported from the technique observed in aino.agency's production bundle:
//   - points live in NORMALIZED coordinates (x, y in 0..1), so the engine is
//     resolution-independent and free of glyph-width measurement bugs;
//   - a single offscreen <canvas> is luminance-sampled into glyphs;
//   - transitions are TIME-BASED morphs (lerp position + glyph) rather than
//     spring convergence, so a morph always settles exactly on its target
//     with no overlapping particles — removing the old "deterministic settle"
//     workaround entirely;
//   - render() writes one big `\n`-joined string to a single element's
//     textContent.

import { CHAR_RAMP, charForLuminance, charLerp } from "./ramp";

const NBSP = " ";
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (a, b, amount) => a + (b - a) * amount;
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeInQuad = (t) => t * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

let uidCounter = 0;

/**
 * @param {object} options
 * @param {HTMLElement} options.element - the .ascii-grid element to render into.
 */
export function createEngine({ element }) {
  let cols = 0;
  let rows = 0;
  let charWidth = 8;
  let lineHeight = 15;

  /** Measure real glyph geometry and derive grid dimensions. */
  function measure() {
    const styles = getComputedStyle(element);
    const probe = document.createElement("span");
    probe.textContent = "0".repeat(20);
    Object.assign(probe.style, {
      position: "absolute",
      visibility: "hidden",
      whiteSpace: "pre",
      font: styles.font,
      fontFamily: styles.fontFamily,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      letterSpacing: styles.letterSpacing,
    });
    document.body.append(probe);
    charWidth = probe.getBoundingClientRect().width / probe.textContent.length;
    probe.remove();
    lineHeight = Number.parseFloat(styles.lineHeight) || 12;
    cols = Math.max(1, Math.floor(window.innerWidth / charWidth));
    rows = Math.max(1, Math.ceil(window.innerHeight / lineHeight));
  }

  const dimensions = () => ({ cols, rows, charWidth, lineHeight });

  /** Convert a pixel position (clientX/Y) to normalized grid coordinates. */
  function pixelToNormalized(px, py) {
    return {
      x: clamp(px / (cols * charWidth), 0, 1),
      y: clamp(py / (rows * lineHeight), 0, 1),
    };
  }

  function createPoint({ x, y, value, context = "" }) {
    return {
      uid: uidCounter++,
      x,
      y,
      homeX: x,
      homeY: y,
      vx: 0,
      vy: 0,
      value,
      context,
      morph: null,
    };
  }

  /** Place a string of glyphs at a normalized cell origin. */
  function createText({ text, col = 0, row = 0, align = "left", context = "" }) {
    const upper = text.toUpperCase();
    const startCol =
      align === "center" ? Math.floor((cols - upper.length) / 2) : col;
    const points = [];
    for (let i = 0; i < upper.length; i += 1) {
      const glyph = upper[i];
      if (!glyph.trim()) continue;
      points.push(
        createPoint({
          x: (startCol + i) / cols,
          y: row / rows,
          value: glyph,
          context,
        }),
      );
    }
    return points;
  }

  /** A cols x rows offscreen canvas (1px per grid cell). */
  function createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    return canvas;
  }

  /**
   * Sample a cols x rows canvas into points by per-pixel luminance.
   * @param {HTMLCanvasElement} canvas
   * @param {object} [opts]
   * @param {string} [opts.context]
   * @param {number} [opts.threshold] - skip cells dimmer than this (0..1).
   * @param {string} [opts.solidGlyph] - force this glyph above solidAbove.
   * @param {number} [opts.solidAbove]
   */
  function createFromCanvas(
    canvas,
    {
      context = "canvas",
      threshold = 0.08,
      gamma = 1,
      luma = "rec709",
      solidGlyph = null,
      solidAbove = 0.62,
    } = {},
  ) {
    const data = canvas.getContext("2d", { willReadFrequently: true })
      .getImageData(0, 0, canvas.width, canvas.height).data;
    // Pick a brightness metric. Rec.709 is right for grayscale subjects, but
    // it heavily under-weights red/blue, so a saturated logo (red text, etc.)
    // samples poorly. "max" captures any vivid color; "average" is in between.
    const brightnessOf =
      luma === "max"
        ? (r, g, b) => Math.max(r, g, b)
        : luma === "average"
          ? (r, g, b) => (r + g + b) / 3
          : (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const points = [];
    for (let row = 0; row < canvas.height; row += 1) {
      for (let col = 0; col < canvas.width; col += 1) {
        const i = (row * canvas.width + col) * 4;
        const alpha = data[i + 3] / 255;
        let lum =
          (brightnessOf(data[i], data[i + 1], data[i + 2]) / 255) * alpha;
        if (gamma !== 1) lum = Math.pow(lum, gamma);
        if (lum < threshold) continue;
        const value =
          solidGlyph && lum > solidAbove ? solidGlyph : charForLuminance(lum);
        points.push(
          createPoint({ x: col / cols, y: row / rows, value, context }),
        );
      }
    }
    return points;
  }

  /** Find the bounding box of non-black content in a source, in source px. */
  function contentBounds(source, sw, sh, threshold) {
    const maxDim = 320;
    const s = Math.min(1, maxDim / Math.max(sw, sh));
    const tw = Math.max(1, Math.round(sw * s));
    const th = Math.max(1, Math.round(sh * s));
    const tmp = document.createElement("canvas");
    tmp.width = tw;
    tmp.height = th;
    const tctx = tmp.getContext("2d", { willReadFrequently: true });
    tctx.drawImage(source, 0, 0, tw, th);
    const d = tctx.getImageData(0, 0, tw, th).data;
    let minX = tw;
    let minY = th;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < th; y += 1) {
      for (let x = 0; x < tw; x += 1) {
        const i = (y * tw + x) * 4;
        const b = (Math.max(d[i], d[i + 1], d[i + 2]) / 255) * (d[i + 3] / 255);
        if (b > threshold) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < 0) return null;
    const pad = 2;
    minX = Math.max(0, minX - pad);
    minY = Math.max(0, minY - pad);
    maxX = Math.min(tw - 1, maxX + pad);
    maxY = Math.min(th - 1, maxY + pad);
    return {
      sx: minX / s,
      sy: minY / s,
      sw: (maxX - minX + 1) / s,
      sh: (maxY - minY + 1) / s,
    };
  }

  /**
   * Draw an image/video/canvas source into the grid canvas. Because grid cells
   * are not square (charWidth x lineHeight px on screen), the fit is computed
   * in screen space and mapped back to canvas cells so the result keeps its
   * real aspect ratio when rendered as text.
   * @param {object} [opts]
   * @param {"contain"|"cover"} [opts.fit]
   * @param {number} [opts.scale] - extra multiplier applied after fit.
   * @param {boolean} [opts.trim] - crop to the content bounding box first, so
   *   black margins don't shrink the subject (key for portrait/mobile).
   * @param {number} [opts.trimThreshold]
   * @param {boolean} [opts.invert]
   */
  function paintCanvas(
    canvas,
    source,
    { fit = "contain", scale = 1, trim = false, trimThreshold = 0.12, invert = false } = {},
  ) {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const sw0 = source.videoWidth || source.naturalWidth || source.width;
    const sh0 = source.videoHeight || source.naturalHeight || source.height;
    if (!sw0 || !sh0) return;

    let sx = 0;
    let sy = 0;
    let sw = sw0;
    let sh = sh0;
    if (trim) {
      const box = contentBounds(source, sw0, sh0, trimThreshold);
      if (box) ({ sx, sy, sw, sh } = box);
    }

    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const screenW = canvas.width * charWidth;
    const screenH = canvas.height * lineHeight;
    const ratios = [screenW / sw, screenH / sh];
    const s = (fit === "cover" ? Math.max(...ratios) : Math.min(...ratios)) * scale;
    const dw = (sw * s) / charWidth;
    const dh = (sh * s) / lineHeight;
    ctx.drawImage(
      source,
      sx, sy, sw, sh,
      (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh,
    );
    if (invert) {
      ctx.globalCompositeOperation = "difference";
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
    }
  }

  /**
   * Begin a time-based morph from `from` to `to`. Returns the new working set
   * (existing points + any spawned for surplus targets). Mutates `from` items
   * by attaching a `.morph` descriptor consumed by applyMorph().
   *
   * Count handling (mirrors aino):
   *   - surplus targets  -> spawn new points from a random existing point so
   *     they emerge out of the current mass;
   *   - surplus sources  -> fly into a target then disappear (removeAfter).
   */
  function morph(from, to, { duration = 1700, ease = "inOut", match = "scan" } = {}) {
    const now = performance.now();
    const easeFn =
      ease === "in" ? easeInQuad : ease === "out" ? easeOutCubic : easeInOutCubic;
    if (!to.length) return [];
    if (!from.length) from = [createPoint({ x: 0.5, y: 0.5, value: " " })];

    const sources = from.slice();
    const targets = to.slice();

    // Pad sources up to target count by cloning random existing points.
    while (sources.length < targets.length) {
      const seed = from[Math.floor(Math.random() * from.length)];
      sources.push(
        createPoint({ x: seed.x, y: seed.y, value: seed.value, context: seed.context }),
      );
    }

    // Order both sets the same way so nearby sources map to nearby targets,
    // which avoids long crossing paths and overlap pile-ups.
    const key =
      match === "radial"
        ? (p) => Math.atan2(p.y - 0.5, p.x - 0.5)
        : (p) => p.y * 1000 + p.x;
    sources.sort((a, b) => key(a) - key(b));
    targets.sort((a, b) => key(a) - key(b));

    for (let i = 0; i < sources.length; i += 1) {
      const source = sources[i];
      const target = targets[i % targets.length];
      const removeAfter = i >= targets.length;
      source.morph = {
        sx: source.x,
        sy: source.y,
        sval: source.value,
        tx: target.x,
        ty: target.y,
        tval: target.value,
        context: target.context,
        start: now,
        duration,
        easeFn,
        removeAfter,
      };
    }
    return sources;
  }

  /**
   * Advance all active morphs. Returns { points, active }. Points whose morph
   * has completed are finalized exactly on target (or dropped if removeAfter).
   */
  function applyMorph(points, now = performance.now()) {
    const survivors = [];
    let active = 0;
    for (const point of points) {
      const m = point.morph;
      if (!m) {
        survivors.push(point);
        continue;
      }
      const t = clamp((now - m.start) / m.duration, 0, 1);
      const e = m.easeFn(t);
      point.x = lerp(m.sx, m.tx, e);
      point.y = lerp(m.sy, m.ty, e);
      if (t >= 1) {
        if (m.removeAfter) continue; // drop surplus
        point.x = m.tx;
        point.y = m.ty;
        point.homeX = m.tx;
        point.homeY = m.ty;
        point.value = m.tval;
        point.context = m.context;
        point.morph = null;
      } else {
        point.value = charLerp(m.sval, m.tval, e);
        active += 1;
      }
      survivors.push(point);
    }
    return { points: survivors, active };
  }

  /** Spring all points toward their home, with friction. */
  function applyPhysics(points, delta, { spring = 0.4, friction = 0.7 } = {}) {
    const step = clamp(delta * 60, 0, 2);
    for (const point of points) {
      point.vx += (point.homeX - point.x) * spring;
      point.vy += (point.homeY - point.y) * spring;
      point.vx *= friction;
      point.vy *= friction;
      point.x += point.vx * step;
      point.y += point.vy * step;
    }
  }

  /** Apply downward gravity + horizontal drift, for the exit. */
  function applyFall(points, delta, { gravity = 1.6, drift = 0.0 } = {}) {
    const step = clamp(delta * 60, 0, 2);
    for (const point of points) {
      point.vy += gravity * delta;
      point.vx += drift * delta;
      point.x += point.vx * step;
      point.y += point.vy * step;
    }
  }

  /** Render one or more point layers into the grid element. */
  function render(...layers) {
    const buffer = new Array(cols * rows).fill(NBSP);
    for (const layer of layers) {
      if (!layer) continue;
      for (const point of layer) {
        const col = Math.round(point.x * cols);
        const row = Math.round(point.y * rows);
        if (col >= 0 && col < cols && row >= 0 && row < rows) {
          buffer[row * cols + col] = point.value;
        }
      }
    }
    let output = "";
    for (let row = 0; row < rows; row += 1) {
      output += buffer.slice(row * cols, (row + 1) * cols).join("") + "\n";
    }
    element.textContent = output;
  }

  return {
    measure,
    dimensions,
    pixelToNormalized,
    createPoint,
    createText,
    createCanvas,
    createFromCanvas,
    paintCanvas,
    morph,
    applyMorph,
    applyPhysics,
    applyFall,
    render,
    get cols() {
      return cols;
    },
    get rows() {
      return rows;
    },
    ramp: CHAR_RAMP,
  };
}
