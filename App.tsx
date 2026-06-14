import React, { useState } from 'react';
import CanvasBackground from './components/CanvasBackground';
import OverlayUI from './components/OverlayUI';
import AsciiIntro from './components/ascii-intro/AsciiIntro';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import CrtOverlay from './components/crt/CrtOverlay';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <CrtOverlay />

      {loading && <AsciiIntro onComplete={() => setLoading(false)} />}

      {/*
        The App is always rendered fully opaque in the background.
        The AsciiIntro sits on top (z-100) and handles the "reveal" animation.
      */}
      <div className="relative w-full min-h-screen">
        <CanvasBackground />
        <OverlayUI />
      </div>
    </>
  );
};

export default App;