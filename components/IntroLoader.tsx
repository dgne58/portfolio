import React, { useEffect, useRef, useState } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reqRef = useRef<number>(0);
  
  // Animation Refs
  const seedRef = useRef(Math.random() * 100);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const noiseGridRef = useRef<number[]>([]);
  const visualProgressRef = useRef(0);

  // --- Noise Functions ---
  const fract = (x: number) => x - Math.floor(x);
  
  const hash = (x: number, y: number) => {
    return fract(Math.sin(x * 12.9898 + y * 78.233 + seedRef.current) * 43758.5453);
  };

  const noise = (x: number, y: number) => {
    const i_x = Math.floor(x);
    const i_y = Math.floor(y);
    const f_x = fract(x);
    const f_y = fract(y);
    
    // Smoothstep interpolation
    const u_x = f_x * f_x * (3.0 - 2.0 * f_x);
    const u_y = f_y * f_y * (3.0 - 2.0 * f_y);
    
    const a = hash(i_x, i_y);
    const b = hash(i_x + 1.0, i_y);
    const c = hash(i_x, i_y + 1.0);
    const d = hash(i_x + 1.0, i_y + 1.0);
    
    return a + (b - a) * u_x + (c - a) * u_y + (a - b - c + d) * u_x * u_y;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // --- 1. Resize & Grid Setup ---
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Keep canvas visual size 100%
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      
      ctx.scale(dpr, dpr);
      
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Block Size: 32px creates a nice distinct grid without being too retro
      const blockSize = 32; 
      const cols = Math.ceil(width / blockSize) + 1;
      const rows = Math.ceil(height / blockSize) + 1;
      
      colsRef.current = cols;
      rowsRef.current = rows;
      
      // Precompute Noise Grid
      const grid: number[] = new Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // 0.06 Frequency = Large, smooth organic shapes
          const n = noise(x * 0.06, y * 0.06);
          grid[y * cols + x] = n;
        }
      }
      noiseGridRef.current = grid;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // --- 2. Render Loop (Geometric Decay) ---
    const render = () => {
      if (!ctx || !canvas) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      const blockSize = 32;
      const cols = colsRef.current;
      const rows = rowsRef.current;
      
      // Progress moves 0 -> 1. 
      // Multiplier ensures we cover the full noise range (0..1) plus buffer
      const p = visualProgressRef.current;
      
      // Threshold T: The value below which pixels are removed.
      // Adjusted range: -0.4 to 1.2
      // At p=0, T=-0.4. Min diff = 0.4. All pixels >= 0.25 (Alive/Black).
      // At p=1, T=1.2. Max diff = -0.2. All pixels < 0 (Transparent).
      const T = p * 1.6 - 0.4; 

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const n = noiseGridRef.current[y * cols + x];
          
          // Difference between noise value and current threshold
          const diff = n - T;
          
          // --- Logic for Geometric Decay ---
          // 1. If diff < 0: The pixel is "dead" (Transparent). Skip.
          // 2. If diff is small: The pixel is "dying". Draw it smaller/different color.
          // 3. If diff is large: The pixel is "alive". Draw solid black.

          if (diff < 0) continue; // Transparent

          const cx = x * blockSize + blockSize / 2;
          const cy = y * blockSize + blockSize / 2;

          if (diff < 0.05) {
            // THE SPARK: Just before vanishing, flash WHITE.
            // This creates the "electric edge" effect.
            // Draw a small distinct square.
            ctx.fillStyle = '#ffffff';
            const size = blockSize * 0.25;
            ctx.fillRect(cx - size/2, cy - size/2, size, size);
          } 
          else if (diff < 0.15) {
            // DECAY STAGE 2: Small Grey Block (Shrinking)
            ctx.fillStyle = '#333333';
            const size = blockSize * 0.5;
            ctx.fillRect(cx - size/2, cy - size/2, size, size);
          } 
          else if (diff < 0.25) {
             // DECAY STAGE 1: Medium Dark Block (Shrinking)
             ctx.fillStyle = '#111111'; // Match body bg slightly
             const size = blockSize * 0.75;
             ctx.fillRect(cx - size/2, cy - size/2, size, size);
          } 
          else {
            // ALIVE: Full Black Block
            // We use a slight overlap (+1) to prevent subpixel gaps
            ctx.fillStyle = '#000000';
            ctx.fillRect(x * blockSize, y * blockSize, blockSize + 0.5, blockSize + 0.5);
          }
        }
      }

      reqRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqRef.current);
    };
  }, []); // Run once on mount

  // --- 3. Animation Logic ---
  useEffect(() => {
    if (isTransitioning) {
        let start: number | null = null;
        const duration = 1800; // 1.8 seconds for a snappy but smooth reveal
        
        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            
            // Linear progress is often best for noise thresholds to keep speed consistent
            const t = Math.min(elapsed / duration, 1);
            visualProgressRef.current = t;
            
            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                onComplete();
            }
        };
        requestAnimationFrame(animate);
    }
  }, [isTransitioning, onComplete]);

  // --- 4. Fake Loading Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Consistent increments
        return Math.min(prev + Math.floor(Math.random() * 5) + 2, 100);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (!isReady || isTransitioning) return;
    setIsTransitioning(true);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] cursor-pointer transition-colors duration-300 ${isTransitioning ? 'bg-transparent' : 'bg-[#030303]'}`} 
      onClick={handleEnter}
    >
      {/* Canvas Layer */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Text UI Layer */}
      <div 
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-white font-mono transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="text-center mix-blend-difference">
          {/* Main Percentage - Minimal and Bold */}
          <div className="text-9xl font-bold tracking-tighter mb-8 tabular-nums">
            {progress}%
          </div>
          
          {/* Status Text - Fixed Height container to prevent layout shift */}
          <div className="h-12 flex items-center justify-center">
            {isReady ? (
              <div className="animate-pulse text-xs tracking-[0.4em] uppercase border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition-colors">
                Click to Initialize
              </div>
            ) : (
              <div className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-3 justify-center">
                 <span className="block w-1 h-1 bg-white animate-ping"/>
                 Loading Assets
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;