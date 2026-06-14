// RibbonGenerator — the idle looping ribbon.
//
// Procedural per-frame scene: a horizontal monospace ribbon that reveals from
// the top, then breathes (expands/contracts) on a loop. Returns NORMALIZED
// points; intensity drives the glyph via the shared ramp.

import { clamp, mix, easeOutCubic } from "../engine/math";
import { charForLuminance } from "../engine/ramp";

/**
 * @param {object} engine - AsciiEngine instance.
 * @param {object} params
 * @param {number} params.elapsed - ms since the ribbon started.
 * @param {number} params.mouseX - 0..1 pointer x (parallax).
 * @param {number} [params.startupReveal] - reveal duration ms.
 * @param {number} [params.loopDuration] - breathe loop duration ms.
 * @returns {Array} normalized points.
 */
export function ribbonFrame(
  engine,
  { elapsed, mouseX = 0.5, startupReveal = 2200, loopDuration = 9000 },
) {
  const { cols, rows } = engine;
  const points = [];
  if (elapsed < 120) return points;

  const loopTime = Math.max(0, elapsed - startupReveal) % loopDuration;
  const loopProgress = loopTime / loopDuration;
  const revealProgress = easeOutCubic(elapsed / startupReveal);
  const isReveal = elapsed < startupReveal;

  const loopEnvelope = isReveal
    ? revealProgress
    : Math.pow(Math.sin(loopProgress * Math.PI), 0.42);
  if (loopEnvelope < 0.035) return points;

  const revealHead = mix(-0.08, 1.08, revealProgress);
  const center = 0.5 + (mouseX - 0.5) * 0.08; // normalized
  const widthPulse = (Math.sin(loopProgress * Math.PI * 2 - Math.PI / 2) + 1) * 0.5;

  for (let y = 2; y < rows - 2; y += 1) {
    const ny = y / rows;
    if (isReveal && ny > revealHead) continue;
    const revealDistance = Math.abs(ny - revealHead);

    const wave =
      Math.sin(ny * 13 + loopProgress * Math.PI * 4) * 0.025 +
      Math.sin(ny * 31 - loopProgress * Math.PI * 3) * 0.012;
    const breathing = mix(0.018, 0.2, widthPulse) * loopEnvelope;
    const pinch = Math.pow(Math.abs(ny - 0.5) * 2, 1.7);
    const revealTaper = isReveal ? clamp(revealDistance / 0.15, 0.08, 1) : 1;
    const halfWidth = mix(breathing * 0.08, breathing, pinch) * revealTaper;

    const centerX = center + wave;
    const startCol = Math.floor((centerX - halfWidth) * cols);
    const endCol = Math.ceil((centerX + halfWidth) * cols);
    for (let col = startCol; col <= endCol; col += 1) {
      if (col < 0 || col >= cols) continue;
      const distance = Math.abs(col / cols - centerX) / Math.max(0.0001, halfWidth);
      const interference =
        (Math.cos(distance * 9 + loopProgress * Math.PI * 12 + y * 0.22) + 1) * 0.5;
      if (interference > 0.3) {
        const brightness = 1 - (distance * 0.65 + interference * 0.2);
        points.push(
          engine.createPoint({
            x: col / cols,
            y: ny,
            value: charForLuminance(brightness),
            context: "ribbon",
          }),
        );
      }
    }
  }
  return points;
}
