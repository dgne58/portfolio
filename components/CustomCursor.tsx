import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Use refs for values to avoid re-renders
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const reqRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      // Linear Interpolation (Lerp) for smoothness (0.15 = 15% catch up per frame)
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      pos.current.x += dx * 0.15;
      pos.current.y += dy * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      reqRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
      style={{ 
        boxShadow: '0 0 10px rgba(255,255,255,0.5)'
      }}
    />
  );
};

export default CustomCursor;