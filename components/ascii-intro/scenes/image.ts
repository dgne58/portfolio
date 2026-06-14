// ImageSampler — turn a bitmap into NORMALIZED ASCII points.
//
// This is aino's core technique (createFromCanvas + paintCanvas) applied to a
// still image: paint the source into the grid canvas at the correct on-screen
// aspect, then luminance-sample it into glyphs. Deterministic for a given grid
// size, so the live morph target matches the frozen inspection state exactly.
//
// Two modes:
//   imagePoints      - brightness sampling. Best for bright-on-dark subjects
//                      (e.g. white wings) where the form IS the bright pixels.
//   silhouettePoints - flood-fills the background from the edges, then FILLS
//                      everything inside. Best for dark-on-dark logos whose
//                      shape is defined by an enclosing outline rather than by
//                      brightness (e.g. a black cat on black).

import { charForLuminance } from "../engine/ramp";
import { hash2 } from "../engine/math";

const brightnessMetric = (luma) =>
  luma === "max"
    ? (r, g, b) => Math.max(r, g, b)
    : luma === "average"
      ? (r, g, b) => (r + g + b) / 3
      : (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

/**
 * Load an image. Resolves to the decoded HTMLImageElement, rejects on error.
 * @param {string} url
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(url) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    image.src = url;
  });
}

/**
 * Sample a loaded image into points.
 * @param {object} engine - AsciiEngine instance.
 * @param {HTMLImageElement} image
 * @param {object} [opts]
 * @param {string} [opts.context]
 * @param {number} [opts.threshold] - drop cells dimmer than this (0..1).
 * @param {number} [opts.gamma] - <1 brightens mids, >1 deepens shadows.
 * @param {"rec709"|"max"|"average"} [opts.luma] - brightness metric. Use "max"
 *   for saturated/colored art (e.g. a red-and-yellow logo on black).
 * @param {number} [opts.scale] - fit multiplier (e.g. 0.82 to inset).
 * @param {"contain"|"cover"} [opts.fit]
 * @returns {Array} normalized points.
 */
export function imagePoints(
  engine,
  image,
  {
    context = "art",
    threshold = 0.12,
    gamma = 0.85,
    luma = "rec709",
    scale = 0.92,
    fit = "contain",
    trim = false,
    trimThreshold = 0.12,
    solidGlyph = null,
    solidAbove = 0.62,
  } = {},
) {
  const canvas = engine.createCanvas();
  engine.paintCanvas(canvas, image, { fit, scale, trim, trimThreshold });
  return engine.createFromCanvas(canvas, {
    context,
    threshold,
    gamma,
    luma,
    solidGlyph,
    solidAbove,
  });
}

/**
 * Sample a logo as a FILLED silhouette. Flood-fills the dark background inward
 * from the canvas edges (stopping at the bright enclosing outline), then emits
 * points for the interior. Bright accents (outline, eyes, text) render dense
 * and solid; the dark body renders as a sparse, faint STIPPLE — glyphs scatter
 * with whitespace between them (stable hash dither), giving an airy silhouette
 * instead of a flat blob.
 * @param {object} engine
 * @param {HTMLImageElement} image
 * @param {object} [opts]
 * @param {number} [opts.bgThreshold] - pixels dimmer than this are background.
 * @param {number} [opts.fillFloor] - brightness used for faint body glyphs.
 * @param {number} [opts.fillDensity] - 0..1 fraction of body cells kept.
 * @param {number} [opts.fillJitter] - random ramp wobble for body texture.
 * @param {"rec709"|"max"|"average"} [opts.luma]
 */
export function silhouettePoints(
  engine,
  image,
  {
    context = "art",
    fit = "contain",
    scale = 0.9,
    trim = false,
    luma = "max",
    gamma = 1,
    bgThreshold = 0.22,
    fillFloor = 0.16,
    fillDensity = 0.4,
    fillJitter = 0.08,
  } = {},
) {
  const canvas = engine.createCanvas();
  engine.paintCanvas(canvas, image, { fit, scale, trim });
  const w = canvas.width;
  const h = canvas.height;
  const data = canvas.getContext("2d", { willReadFrequently: true })
    .getImageData(0, 0, w, h).data;

  const metric = brightnessMetric(luma);
  const bright = new Float32Array(w * h);
  for (let p = 0; p < w * h; p += 1) {
    const i = p * 4;
    let v = (metric(data[i], data[i + 1], data[i + 2]) / 255) * (data[i + 3] / 255);
    if (gamma !== 1) v = Math.pow(v, gamma);
    bright[p] = v;
  }

  // Flood-fill background (dark + connected to an edge).
  const bg = new Uint8Array(w * h);
  const stack = [];
  const visit = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (bg[p] || bright[p] >= bgThreshold) return;
    bg[p] = 1;
    stack.push(p);
  };
  for (let x = 0; x < w; x += 1) {
    visit(x, 0);
    visit(x, h - 1);
  }
  for (let y = 0; y < h; y += 1) {
    visit(0, y);
    visit(w - 1, y);
  }
  while (stack.length) {
    const p = stack.pop();
    const x = p % w;
    const y = (p / w) | 0;
    visit(x - 1, y);
    visit(x + 1, y);
    visit(x, y - 1);
    visit(x, y + 1);
  }

  const points = [];
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const p = y * w + x;
      if (bg[p]) continue;
      const b = bright[p];
      let value;
      if (b >= bgThreshold) {
        // Bright accent (outline, eyes, red text): solid, density by brightness.
        value = charForLuminance(b);
      } else {
        // Dark body: sparse stipple with whitespace between glyphs.
        if (hash2(x, y) > fillDensity) continue;
        const wobble = (hash2(x * 1.7, y * 2.3) - 0.5) * 2 * fillJitter;
        value = charForLuminance(fillFloor + wobble);
      }
      points.push(
        engine.createPoint({ x: x / engine.cols, y: y / engine.rows, value, context }),
      );
    }
  }
  return points;
}
