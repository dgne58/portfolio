import React, { useState } from 'react';
import CanvasBackground from './components/CanvasBackground';
import OverlayUI from './components/OverlayUI';
import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      
      {/* 
        The App is always rendered fully opaque in the background.
        The IntroLoader sits on top (z-50) and handles the "reveal" animation.
      */}
      <div className="relative w-full min-h-screen">
        <CanvasBackground />
        <OverlayUI />
      </div>
    </>
  );
};

export default App;