import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <div 
        className="fixed inset-0 z-[90] pointer-events-none opacity-[0.035] mix-blend-overlay will-change-transform"
        style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
    >
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.80" 
            numOctaves="3" 
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;