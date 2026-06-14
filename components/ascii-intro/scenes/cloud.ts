// CloudGenerator — a deterministic five-lobed ASCII cloud.
//
// Returns NORMALIZED points. Deterministic (stable grain) so the live morph
// target matches the frozen ?phase=cloud inspection state exactly.

import { hash2 } from "../engine/math";
import { charForLuminance } from "../engine/ramp";

const LOBES = [
  { x: 0.3, y: 0.32, rx: 0.28, ry: 0.2 },
  { x: 0.68, y: 0.3, rx: 0.25, ry: 0.18 },
  { x: 0.48, y: 0.58, rx: 0.36, ry: 0.23 },
  { x: 0.22, y: 0.72, rx: 0.19, ry: 0.15 },
  { x: 0.77, y: 0.7, rx: 0.2, ry: 0.17 },
];

export function cloudPoints(engine) {
  const { cols, rows } = engine;
  const points = [];
  for (let y = 1; y < rows - 1; y += 1) {
    for (let x = 1; x < cols - 1; x += 1) {
      const nx = x / cols;
      const ny = y / rows;
      let density = 0;
      for (const lobe of LOBES) {
        const dx = (nx - lobe.x) / lobe.rx;
        const dy = (ny - lobe.y) / lobe.ry;
        density = Math.max(density, Math.exp(-(dx * dx + dy * dy) * 2.2));
      }
      const grain = hash2(x, y);
      if (density > 0.15 && grain < density * 0.82) {
        points.push(
          engine.createPoint({
            x: nx,
            y: ny,
            value: charForLuminance(density * 0.8 - grain * 0.15),
            context: "cloud",
          }),
        );
      }
    }
  }
  return points;
}
