// RippleTransition — the click impact.
//
// Distorts a captured snapshot of the live ribbon with an expanding radial
// wave centered exactly on the click, and emits concentric glyph rings. All
// coordinates are NORMALIZED; the y axis is scaled by aspect so rings read as
// circles on screen rather than tall ellipses.

import { clamp, mix, easeOutCubic } from "../engine/math";
import { charScramble } from "../engine/ramp";

/**
 * @param {object} engine
 * @param {object} params
 * @param {Array} params.source - snapshot of ribbon points (normalized).
 * @param {{x:number, y:number}} params.click - normalized click point.
 * @param {number} params.elapsed - ms since ripple started.
 * @param {number} [params.duration] - full ripple duration ms.
 * @returns {Array} normalized points.
 */
export function rippleFrame(engine, { source, click, elapsed, duration = 1550 }) {
  const { cols, rows } = engine;
  const aspect = (rows * engine.dimensions().lineHeight) /
    (cols * engine.dimensions().charWidth || 1);
  const progress = clamp(elapsed / duration, 0, 1);
  const radius = mix(0, 0.85, easeOutCubic(progress));
  const ringWidth = mix(0.01, 0.05, progress);
  const amplitude = Math.sin(progress * Math.PI) * 0.12;

  const result = source.map((point) => {
    const dx = point.homeX - click.x;
    const dy = (point.homeY - click.y) * aspect;
    const distance = Math.hypot(dx, dy) || 1e-4;
    const ring = Math.exp(-Math.pow((distance - radius) / ringWidth, 2));
    const wake = Math.sin(distance * 28 - progress * 18) * (1 - progress) * 0.006;
    const displacement = ring * amplitude + wake;
    return engine.createPoint({
      x: point.homeX + (dx / distance) * displacement,
      y: point.homeY + (dy / distance) * displacement * 0.55,
      value: charScramble(point.value, Math.round(ring * 8)),
      context: "ripple",
    });
  });

  const ringCount = Math.max(24, Math.floor(radius * cols));
  for (let r = 0; r < 3; r += 1) {
    const trailing = radius - r * ringWidth * 1.8;
    if (trailing <= 0.01) continue;
    for (let i = 0; i < ringCount; i += 1) {
      const angle = (i / ringCount) * Math.PI * 2;
      const jitter = Math.sin(i * 4.17 + r) * 0.004;
      result.push(
        engine.createPoint({
          x: click.x + Math.cos(angle) * (trailing + jitter),
          y: click.y + (Math.sin(angle) * (trailing + jitter)) / aspect,
          value: engine.ramp[12 + ((i + r * 3) % 8)],
          context: "ripple-ring",
        }),
      );
    }
  }
  return result;
}
