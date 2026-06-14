import React from 'react';
import './crt.css';

/**
 * CRT texture layer — four fixed, non-interactive layers rendered at whisper-quiet
 * opacity to give the site a subtle terminal/oldweb feel:
 *   - graph-paper grid  (z-1,  behind the content)
 *   - scanlines         (z-95, slow seamless vertical drift; gated by reduced-motion)
 *   - vignette          (z-95, multiply — darkens the corners)
 *   - diagonal glare    (z-95, screen — soft "glass" sheen)
 *
 * Purely additive: it never edits CanvasBackground (dither) or NoiseOverlay (grain).
 * Tuning knobs (opacities, scanline period) live in crt.css under `.crt-root`.
 */
const CrtOverlay: React.FC = () => {
  return (
    <div className="crt-root" aria-hidden="true">
      <div className="crt-layer crt-grid" />
      <div className="crt-layer crt-scanlines" />
      <div className="crt-layer crt-vignette" />
      <div className="crt-layer crt-glare" />
    </div>
  );
};

export default CrtOverlay;
