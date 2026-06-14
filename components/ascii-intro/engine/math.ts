// Small shared math helpers for scene generators.

export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const mix = (a, b, amount) => a + (b - a) * amount;
export const easeOutCubic = (value) => 1 - Math.pow(1 - clamp(value, 0, 1), 3);

/** Cheap deterministic 2D hash in 0..1, for stable grain. */
export function hash2(x, y) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
}
