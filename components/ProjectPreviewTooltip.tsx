
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Project } from '../types';

interface ProjectPreviewTooltipProps {
  previewState: { project: Project; top: number; height: number } | null;
}

const ProjectPreviewTooltip: React.FC<ProjectPreviewTooltipProps> = ({ previewState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const tlMeshRef = useRef<THREE.Mesh | null>(null);
  const brMeshRef = useRef<THREE.Mesh | null>(null);

  // Store initial "rest" positions for parallax calculations
  const restPosRef = useRef({
    main: new THREE.Vector3(0, 0, 0),
    tl: new THREE.Vector3(-300, 100, 10),
    br: new THREE.Vector3(-340, -110, 12)
  });

  const materialsRef = useRef<THREE.ShaderMaterial[]>([]);
  
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  
  // Track if loop is currently running
  const isLoopRunningRef = useRef(false);
  const frameIdRef = useRef(0);

  // Expose animate to outer scope via ref
  const animateRef = useRef<(() => void) | null>(null);

  // Container vertical position state
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);

  // Mouse Parallax State (Normalized -1 to 1)
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseSmoothRef = useRef({ x: 0, y: 0 });

  const textureLoader = useRef(new THREE.TextureLoader());
  const textureCache = useRef<Map<string, THREE.Texture>>(new Map());
  const transparentTex = useRef<THREE.Texture | null>(null);
  const globalSeed = useRef(Math.random() * 100.0);
  
  // Track active load request to prevent race conditions
  const currentRequestIdRef = useRef(0);

  // Canvas Dimensions
  const width = 1200; 
  const height = 700; 

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture;
    uniform sampler2D uTextureOld;
    uniform float uHasOld;
    uniform float uProgress;
    uniform float uSeed;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p) {
      vec3 p3  = fract(vec3(p.xyx) * .1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), 
        u.y
      );
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      float p = uProgress;
      
      // If no old texture and progress is very low, discard to keep transparent
      if (uHasOld < 0.5 && p < 0.01) discard;

      // Pixelation Transition for NEW image
      // As p goes 0->1, res goes low->high
      float startRes = 60.0; 
      float endRes = 800.0; 
      float res = mix(startRes, endRes, pow(p, 3.0)); 
      
      vec2 gridSize = vec2(res, res / aspect);
      vec2 gridUv = floor(uv * gridSize) / gridSize;
      gridUv += (1.0 / gridSize) * 0.5;

      // Noise Mask for growth
      float maskRes = 40.0;
      vec2 maskGridSize = vec2(maskRes, maskRes / aspect);
      vec2 maskCell = floor(uv * maskGridSize);
      
      float noiseVal = noise((maskCell * 0.15) + uSeed);
      
      // visible: 1.0 = Show New, 0.0 = Show Old (or Transparent)
      float visible = step(noiseVal, p * 1.15);

      vec4 newColor = texture2D(uTexture, gridUv);
      vec4 oldColor = texture2D(uTextureOld, uv); 

      if (uHasOld > 0.5) {
        // Overlap Mode:
        // When p=0, visible=0 -> Show Old.
        // When p=1, visible=1 -> Show New.
        gl_FragColor = mix(oldColor, newColor, visible);
      } else {
        // Standard Reveal Mode (No Old Image):
        // When p=0, visible=0 -> Discard.
        // When p=1, visible=1 -> Show New.
        if (visible < 0.5) discard;
        gl_FragColor = newColor;
      }
    }
  `;

  // Init transparent texture
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1; canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if(ctx) { 
        ctx.fillStyle = 'rgba(0,0,0,0)'; 
        ctx.fillRect(0,0,1,1); 
    }
    const tex = new THREE.CanvasTexture(canvas);
    transparentTex.current = tex;
  }, []);

  useEffect(() => {
    if (!canvasWrapperRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      width / -2, width / 2, height / 2, height / -2, 1, 1000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.sortObjects = true;
    
    // Ensure canvas is positioned at top-left of wrapper
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    canvasWrapperRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const createLayer = (w: number, h: number, x: number, y: number, z: number) => {
      const geo = new THREE.PlaneGeometry(w, h);
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: null },
          uTextureOld: { value: null },
          uHasOld: { value: 0.0 },
          uProgress: { value: 0 },
          uSeed: { value: globalSeed.current },
          uResolution: { value: new THREE.Vector2(w, h) }
        },
        transparent: true,
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.visible = false;
      scene.add(mesh);
      materialsRef.current.push(mat);
      return mesh;
    };

    // --- Layout Strategy ---
    const mainMesh = createLayer(420, 280, restPosRef.current.main.x, restPosRef.current.main.y, restPosRef.current.main.z);
    mainMeshRef.current = mainMesh;

    const tlMesh = createLayer(220, 150, restPosRef.current.tl.x, restPosRef.current.tl.y, restPosRef.current.tl.z);
    tlMeshRef.current = tlMesh;
    
    const brMesh = createLayer(180, 240, restPosRef.current.br.x, restPosRef.current.br.y, restPosRef.current.br.z);
    brMeshRef.current = brMesh;

    // --- Animation Logic ---
    const animate = () => {
      // Logic check: If nothing is visible and we aren't targeting visibility, STOP.
      const isVisible = progressRef.current > 0.001 || targetProgressRef.current > 0.001;
      
      if (!isVisible) {
          isLoopRunningRef.current = false;
          // Ensure hidden state
          if (containerRef.current) containerRef.current.style.opacity = '0';
          return;
      }

      frameIdRef.current = requestAnimationFrame(animate);
      
      // Animate Progress (Slower: 0.04)
      const diff = targetProgressRef.current - progressRef.current;
      progressRef.current += diff * 0.04;
      
      // Snap if close
      if (Math.abs(targetProgressRef.current - progressRef.current) < 0.001) {
           progressRef.current = targetProgressRef.current;
      }

      materialsRef.current.forEach(mat => {
        if (mat) {
          mat.uniforms.uProgress.value = progressRef.current;
        }
      });

      // --- Parallax Logic ---
      const mEase = 0.05;
      mouseSmoothRef.current.x += (mouseRef.current.x - mouseSmoothRef.current.x) * mEase;
      mouseSmoothRef.current.y += (mouseRef.current.y - mouseSmoothRef.current.y) * mEase;

      const px = mouseSmoothRef.current.x; 
      const py = mouseSmoothRef.current.y; 

      if (mainMeshRef.current) {
         mainMeshRef.current.position.x = restPosRef.current.main.x + px * 20;
         mainMeshRef.current.position.y = restPosRef.current.main.y + py * 20;
         mainMeshRef.current.rotation.y = px * 0.05;
         mainMeshRef.current.rotation.x = -py * 0.05;
      }
      if (tlMeshRef.current) {
         tlMeshRef.current.position.x = restPosRef.current.tl.x + px * 40;
         tlMeshRef.current.position.y = restPosRef.current.tl.y + py * 40;
         tlMeshRef.current.rotation.z = -px * 0.05;
      }
      if (brMeshRef.current) {
         brMeshRef.current.position.x = restPosRef.current.br.x + px * 30;
         brMeshRef.current.position.y = restPosRef.current.br.y + py * 30;
         brMeshRef.current.rotation.z = px * 0.03;
      }

      // --- Container Vertical Follow ---
      const dy = targetYRef.current - currentYRef.current;
      currentYRef.current += dy * 0.12; 

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(-50%, ${currentYRef.current}px, 0)`;

        if (materialsRef.current.length > 0) {
             // Control opacity based on animation progress.
             if (progressRef.current > 0.01) {
                 containerRef.current.style.opacity = '1';
                 renderer.render(scene, camera);
             } else {
                 containerRef.current.style.opacity = '0';
             }
        }
      }
    };

    // Helper to start loop safely
    const startLoop = () => {
        if (!isLoopRunningRef.current) {
            isLoopRunningRef.current = true;
            animate();
        }
    };
    
    // Assign to a ref accessible by other hooks
    animateRef.current = startLoop;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1); 
      mouseRef.current = { x: nx, y: ny };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvasWrapperRef.current && renderer.domElement) {
        canvasWrapperRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      materialsRef.current.forEach(m => m.dispose());
      materialsRef.current = [];
      animateRef.current = null;
    };
  }, []); 

  // Handle Prop Changes (Hover Update) with Double Buffering Logic
  useEffect(() => {
    // Generate ID for this specific hover session
    const requestId = Math.random();
    currentRequestIdRef.current = requestId;

    if (previewState && previewState.project.img) {
      const { project, top, height: itemHeight } = previewState;

      const itemCenterY = top + (itemHeight / 2);

      // Position container so its center (Y=0 in Three.js) aligns with cursor
      const tY = itemCenterY - (height / 2);
      targetYRef.current = tY;

      // Reset main mesh to center (Y=0) - the container positioning handles alignment
      restPosRef.current.main.y = 0;

      // First Load - Instant Setup
      if (progressRef.current < 0.05 && materialsRef.current.length > 0 && materialsRef.current[0].uniforms.uHasOld.value < 0.5) {
        currentYRef.current = tY;
      }

      const loadTex = (url: string | undefined) => {
        if (!url) return Promise.resolve(transparentTex.current!);
        if (textureCache.current.has(url)) return Promise.resolve(textureCache.current.get(url)!);
        return new Promise<THREE.Texture>((resolve) => {
            textureLoader.current.load(
                url, 
                (t) => {
                    textureCache.current.set(url, t);
                    resolve(t);
                },
                undefined,
                () => {
                    // Handle load error gracefully (404 etc)
                    resolve(transparentTex.current!);
                }
            );
        });
      };

      const urls = [
        project.img,
        project.subImages?.[0],
        project.subImages?.[1]
      ];

      Promise.all(urls.map(loadTex)).then((textures) => {
          // Prevent race conditions: if request ID changed, we are outdated
          if (currentRequestIdRef.current !== requestId) return;

          const mats = materialsRef.current;
          const meshes = [mainMeshRef.current, tlMeshRef.current, brMeshRef.current];

          // Determine if we are in a state where transitioning from the previous image makes sense visually.
          // If progress is very low (tooltip was effectively hidden), we should start fresh (uHasOld = 0).
          // This prevents the "pop" where the old image abruptly appears before transitioning.
          const isVisuallyActive = progressRef.current > 0.15;

          textures.forEach((newTex, i) => {
            if (mats[i] && meshes[i]) {
                const currentTex = mats[i].uniforms.uTexture.value;
                const wasVisible = meshes[i]!.visible;
                const isCurrentReal = currentTex && currentTex !== transparentTex.current;

                if (wasVisible && isCurrentReal && isVisuallyActive) {
                    mats[i].uniforms.uTextureOld.value = currentTex;
                    mats[i].uniforms.uHasOld.value = 1.0;
                } else {
                    mats[i].uniforms.uHasOld.value = 0.0;
                }

                // Set New Texture
                mats[i].uniforms.uTexture.value = newTex;

                // Determine Visibility
                const isNewReal = newTex !== transparentTex.current;
                const isOldReal = mats[i].uniforms.uHasOld.value > 0.5;

                if (isNewReal || isOldReal) {
                    meshes[i]!.visible = true;
                } else {
                    meshes[i]!.visible = false;
                }
            }
          });

          // Start "Growth" Animation
          progressRef.current = 0;
          targetProgressRef.current = 1;
          
          if (animateRef.current) {
             animateRef.current();
          }
      });
      
      // Ensure loop starts immediately for parallax/position updates even if textures are loading
      if (animateRef.current) {
          animateRef.current();
      }

    } else {
      // Mouse Leave: Fade out
      targetProgressRef.current = 0;
      
      materialsRef.current.forEach(mat => {
          mat.uniforms.uHasOld.value = 0.0;
      });
      // Ensure loop runs to animate out
      if (animateRef.current) {
          animateRef.current();
      }
    }
  }, [previewState]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-1/2 z-50 pointer-events-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: 0,
        transform: 'translate3d(-50%, -2000px, 0)'
      }}
    >
      <div ref={canvasWrapperRef} className="absolute inset-0 z-0" />

      {previewState && previewState.project.description && (
        <div
            className="absolute top-1/2 bg-black/80 backdrop-blur-md p-6 border border-white/10 text-white text-xs font-mono uppercase leading-relaxed tracking-wider z-[60] shadow-2xl rounded-sm transition-opacity duration-300"
            style={{
                left: '68%',
                width: '280px',
                transform: 'translateY(-50%) translateZ(20px)',
                opacity: previewState ? 1 : 0
            }}
        >
           <span className="block mb-3 text-white font-bold text-sm border-b border-white/20 pb-2">{previewState.project.name}</span>
           <p className="text-gray-300 normal-case">{previewState.project.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectPreviewTooltip;
