// Brightness ramp + glyph helpers.
//
// Aino uses a dense->light ramp and maps pixel luminance to a glyph index
// (`ramp[ceil((len-1) * lum / 255)]`). We use the battle-tested Paul Bourke
// 70-level ramp ordered dense -> light, which gives smooth luminance mapping
// on a black background (bright pixel -> dense glyph, dark pixel -> space).

export const CHAR_RAMP =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/**
 * Map a 0..1 brightness to a glyph. 1 = brightest = densest glyph, 0 = space.
 * @param {number} brightness
 * @returns {string}
 */
export function charForLuminance(brightness) {
  const b = clamp(brightness, 0, 1);
  const index = Math.round((1 - b) * (CHAR_RAMP.length - 1));
  return CHAR_RAMP[index];
}

/**
 * Interpolate between two glyphs along the ramp by their index distance.
 * Used while morphing so a character visibly slides through the ramp instead
 * of hard-cutting to its target.
 */
export function charLerp(from, to, amount) {
  const fromIndex = CHAR_RAMP.indexOf(from);
  const toIndex = CHAR_RAMP.indexOf(to);
  if (fromIndex === -1 || toIndex === -1) return amount < 0.5 ? from : to;
  const index = Math.round(fromIndex + (toIndex - fromIndex) * clamp(amount, 0, 1));
  return CHAR_RAMP[index];
}

/**
 * Random-walk a glyph along the ramp. `amount` is the maximum index jump.
 * Drives the shimmering texture in the idle ribbon and ripple rings.
 */
export function charScramble(value, amount) {
  const index = CHAR_RAMP.indexOf(value);
  if (index === -1) return value;
  const jump = Math.round((Math.random() - 0.5) * 2 * amount);
  return CHAR_RAMP[clamp(index + jump, 0, CHAR_RAMP.length - 1)];
}
