import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // PERFORMANCE: alpha: false creates an opaque canvas, faster for browser compositor
    const renderer = new THREE.WebGLRenderer({ 
      alpha: false, 
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false
    });
    
    // PERFORMANCE: Force DPR to 1. 
    // The dither effect looks better pixelated and this saves massive GPU power.
    renderer.setPixelRatio(1);
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Shader Definition ---
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // --- Noise Functions ---
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // --- Dither Matrix (Bayer 4x4) ---
      // Optimized branching for GPU performance
      float dither4x4(vec2 position, float brightness) {
        int x = int(mod(position.x, 4.0));
        int y = int(mod(position.y, 4.0));
        int index = x + y * 4;
        float limit = 0.0;

        if (index < 8) {
          if (index < 4) {
            if (index == 0) limit = 0.0625;
            else if (index == 1) limit = 0.5625;
            else if (index == 2) limit = 0.1875;
            else limit = 0.6875;
          } else {
            if (index == 4) limit = 0.8125;
            else if (index == 5) limit = 0.3125;
            else if (index == 6) limit = 0.9375;
            else limit = 0.4375;
          }
        } else {
          if (index < 12) {
            if (index == 8) limit = 0.25;
            else if (index == 9) limit = 0.75;
            else if (index == 10) limit = 0.125;
            else limit = 0.625;
          } else {
            if (index == 12) limit = 1.0;
            else if (index == 13) limit = 0.5;
            else if (index == 14) limit = 0.875;
            else limit = 0.375;
          }
        }
        
        return brightness < limit ? 0.0 : 1.0;
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.15;
        
        // Use two layers of noise for smoky effect
        float n1 = snoise(p * 1.5 + vec2(time * 0.5, time * 0.2));
        float n2 = snoise(p * 3.0 - vec2(time * 0.2, time * 0.4) + n1);
        
        float mouseDist = length(p - uMouse);
        float mouseInteraction = smoothstep(0.8, 0.0, mouseDist) * 0.4;
        
        float finalNoise = (n1 + n2 * 0.5) + mouseInteraction;
        
        // Mapped to avoid hitting 1.0 or 0.0 too hard
        // This keeps the dither pattern active instead of creating solid blobs
        float brightness = finalNoise * 0.35 + 0.3; 
        
        // Clamp upper bound to 0.9 to ensure the highest dither threshold (1.0) is never met.
        // This guarantees that at least 1/16 pixels are black in the brightest areas.
        brightness = min(brightness, 0.9);
        brightness = max(brightness, 0.0);
        
        // Gamma correction for smoother gradients
        brightness = pow(brightness, 1.1);

        vec2 screenPos = gl_FragCoord.xy;
        float dither = dither4x4(screenPos, brightness);
        
        // Dark theme colors
        vec3 colorBg = vec3(0.01, 0.01, 0.01); 
        vec3 colorFg = vec3(0.14, 0.14, 0.15); 
        
        vec3 finalColor = mix(colorBg, colorFg, dither);
        
        // Vignette
        float vign = 1.0 - length(uv - 0.5) * 1.2;
        vign = smoothstep(0.0, 1.0, vign);
        finalColor *= vign;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      depthWrite: false,
      depthTest: false
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = time;
        materialRef.current.uniforms.uMouse.value.lerp(mouseRef.current, 0.05);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (rendererRef.current && materialRef.current) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        rendererRef.current.setSize(w, h);
        materialRef.current.uniforms.uResolution.value.set(w, h);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      const aspect = window.innerWidth / window.innerHeight;
      mouseRef.current.set(x * aspect, y);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current) {
            containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 bg-[#030303]"
    />
  );
};

export default CanvasBackground;