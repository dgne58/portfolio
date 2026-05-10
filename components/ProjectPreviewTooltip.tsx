
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { parseGIF, decompressFrames } from 'gifuct-js';
import { Project } from '../types';

interface GifData {
  frames: ImageData[];
  delays: number[];
  currentFrame: number;
  lastFrameTime: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

interface ProjectPreviewTooltipProps {
  previewState: { project: Project; top: number; height: number } | null;
}

const ProjectPreviewTooltip: React.FC<ProjectPreviewTooltipProps> = ({ previewState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  const groupRef = useRef<THREE.Group | null>(null);
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const tlMeshRef = useRef<THREE.Mesh | null>(null);
  const brMeshRef = useRef<THREE.Mesh | null>(null);

  // Store initial "rest" positions for parallax calculations
  // tl/br y-positions shifted ±15 to compensate for 15% larger meshes closing the gap
  const restPosRef = useRef({
    main: new THREE.Vector3(0, 0, 0),
    tl: new THREE.Vector3(-370, 115, 10),
    br: new THREE.Vector3(-410, -125, 12)
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
  const mouseSmoothRef   = useRef({ x: 0, y: 0 }); // group rotation
  const mouseSmoothMain  = useRef({ x: 0, y: 0 }); // most inertia — slowest
  const mouseSmoothTl    = useRef({ x: 0, y: 0 }); // least inertia — snappiest
  const mouseSmoothBr    = useRef({ x: 0, y: 0 }); // middle

  // Float animation — per-mesh phase offsets so each layer drifts independently
  const floatPhasesRef = useRef({
    main: { px: Math.random() * Math.PI * 2, py: Math.random() * Math.PI * 2, pr: Math.random() * Math.PI * 2 },
    tl:   { px: Math.random() * Math.PI * 2, py: Math.random() * Math.PI * 2, pr: Math.random() * Math.PI * 2 },
    br:   { px: Math.random() * Math.PI * 2, py: Math.random() * Math.PI * 2, pr: Math.random() * Math.PI * 2 },
  });

  const textureLoader = useRef(new THREE.TextureLoader());
  const textureCache = useRef<Map<string, THREE.Texture>>(new Map());
  const transparentTex = useRef<THREE.Texture | null>(null);
  const globalSeed = useRef(Math.random() * 100.0);

  // GIF support: track which textures are animated GIFs that need updating
  const gifTexturesRef = useRef<Map<THREE.Texture, GifData>>(new Map());
  const gifIntervalRef = useRef<number | null>(null);

  // Track active load request to prevent race conditions
  const currentRequestIdRef = useRef(0);

  // Base dimensions (reference size at which everything is authored)
  const BASE_WIDTH = 1200;
  const BASE_HEIGHT = 700;

  // Calculate responsive dimensions based on viewport
  const getResponsiveDimensions = useCallback(() => {
    if (typeof window === 'undefined') {
      return { width: BASE_WIDTH, height: BASE_HEIGHT, scale: 1 };
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Constrain by both width and height so the overlay never overflows.
    // Larger screens get proportionally larger previews (up to 1.4×).
    const scaleByWidth = (vw * 0.80) / BASE_WIDTH;
    const scaleByHeight = (vh * 0.75) / BASE_HEIGHT;
    const scale = Math.max(0.4, Math.min(1.4, Math.min(scaleByWidth, scaleByHeight)));

    return {
      width: BASE_WIDTH * scale,
      height: BASE_HEIGHT * scale,
      scale
    };
  }, []);

  // Current dimensions state (triggers re-render on resize)
  const [dimensions, setDimensions] = useState(getResponsiveDimensions);
  // Also keep a ref for non-reactive access in animation loop
  const dimensionsRef = useRef(dimensions);
  dimensionsRef.current = dimensions; 

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

      // Soft edge feather — 4px fade at every edge to eliminate hard geometry aliasing
      vec2 edgeSoft = vec2(4.0) / uResolution;
      float mx = smoothstep(0.0, edgeSoft.x, uv.x) * smoothstep(1.0, 1.0 - edgeSoft.x, uv.x);
      float my = smoothstep(0.0, edgeSoft.y, uv.y) * smoothstep(1.0, 1.0 - edgeSoft.y, uv.y);
      float edgeMask = mx * my;

      vec4 finalColor;
      if (uHasOld > 0.5) {
        finalColor = mix(oldColor, newColor, visible);
      } else {
        finalColor = newColor;
        finalColor.a *= visible;
      }
      finalColor.a *= edgeMask;
      if (finalColor.a < 0.001) discard;
      gl_FragColor = finalColor;
    }
  `;

  // Init transparent texture and GIF animation loop
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

    // Animation loop for GIF frame updates
    gifIntervalRef.current = window.setInterval(() => {
      const now = performance.now();
      gifTexturesRef.current.forEach((gifData, texture) => {
        const elapsed = now - gifData.lastFrameTime;
        const delay = gifData.delays[gifData.currentFrame] || 100;

        if (elapsed >= delay) {
          // Advance to next frame
          gifData.currentFrame = (gifData.currentFrame + 1) % gifData.frames.length;
          gifData.lastFrameTime = now;

          // Draw the new frame
          gifData.ctx.putImageData(gifData.frames[gifData.currentFrame], 0, 0);
          texture.needsUpdate = true;
        }
      });
    }, 16); // ~60fps check rate

    return () => {
      if (gifIntervalRef.current) {
        clearInterval(gifIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!canvasWrapperRef.current) return;

    const dims = dimensionsRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      BASE_WIDTH / -2, BASE_WIDTH / 2, BASE_HEIGHT / 2, BASE_HEIGHT / -2, 1, 1000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(dims.width, dims.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.sortObjects = true;

    // Ensure canvas is positioned at top-left of wrapper
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    canvasWrapperRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Update container size
    if (containerRef.current) {
      containerRef.current.style.width = `${dims.width}px`;
      containerRef.current.style.height = `${dims.height}px`;
    }

    // All three image planes live inside a single group so they rotate in tandem
    // on the sphere surface — the group is what tilts, not the individual meshes.
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

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
      group.add(mesh);
      materialsRef.current.push(mat);
      return mesh;
    };

    // --- Layout Strategy (using base dimensions - camera handles scaling) ---
    const mainMesh = createLayer(483, 322, restPosRef.current.main.x, restPosRef.current.main.y, restPosRef.current.main.z);
    mainMeshRef.current = mainMesh;

    const tlMesh = createLayer(253, 172, restPosRef.current.tl.x, restPosRef.current.tl.y, restPosRef.current.tl.z);
    tlMeshRef.current = tlMesh;

    const brMesh = createLayer(207, 276, restPosRef.current.br.x, restPosRef.current.br.y, restPosRef.current.br.z);
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

      // Animate Progress — exit runs faster than enter (exit-faster-than-enter)
      const isExiting = targetProgressRef.current < progressRef.current;
      const diff = targetProgressRef.current - progressRef.current;
      progressRef.current += diff * (isExiting ? 0.045 : 0.015);
      
      // Snap if close
      if (Math.abs(targetProgressRef.current - progressRef.current) < 0.001) {
           progressRef.current = targetProgressRef.current;
      }

      materialsRef.current.forEach(mat => {
        if (mat) {
          mat.uniforms.uProgress.value = progressRef.current;
        }
      });

      // --- Mouse smoothing — shared (for group rotation) + per-mesh (for translation) ---
      const raw = mouseRef.current;
      mouseSmoothRef.current.x  += (raw.x - mouseSmoothRef.current.x)  * 0.05;
      mouseSmoothRef.current.y  += (raw.y - mouseSmoothRef.current.y)  * 0.05;
      mouseSmoothMain.current.x += (raw.x - mouseSmoothMain.current.x) * 0.03; // most inertia
      mouseSmoothMain.current.y += (raw.y - mouseSmoothMain.current.y) * 0.03;
      mouseSmoothTl.current.x   += (raw.x - mouseSmoothTl.current.x)   * 0.09; // least inertia
      mouseSmoothTl.current.y   += (raw.y - mouseSmoothTl.current.y)   * 0.09;
      mouseSmoothBr.current.x   += (raw.x - mouseSmoothBr.current.x)   * 0.07;
      mouseSmoothBr.current.y   += (raw.y - mouseSmoothBr.current.y)   * 0.07;

      const px = mouseSmoothRef.current.x;
      const py = mouseSmoothRef.current.y;

      // --- Float Logic ---
      // Each mesh drifts on its own slow sinusoidal path; amplitude fades with progress
      const t = performance.now() / 1000;
      const floatScale = progressRef.current; // fades in/out with the tooltip
      const phases = floatPhasesRef.current;

      const mainFx = Math.sin(t * 0.45 + phases.main.px) * 6 * floatScale;
      const mainFy = Math.sin(t * 0.37 + phases.main.py) * 5 * floatScale;
      const mainFr = Math.sin(t * 0.28 + phases.main.pr) * 0.008 * floatScale;

      const tlFx = Math.sin(t * 0.52 + phases.tl.px) * 9 * floatScale;
      const tlFy = Math.sin(t * 0.41 + phases.tl.py) * 7 * floatScale;
      const tlFr = Math.sin(t * 0.33 + phases.tl.pr) * 0.012 * floatScale;

      const brFx = Math.sin(t * 0.48 + phases.br.px) * 8 * floatScale;
      const brFy = Math.sin(t * 0.35 + phases.br.py) * 6 * floatScale;
      const brFr = Math.sin(t * 0.25 + phases.br.pr) * 0.010 * floatScale;

      // --- Sphere Rotation (group) ---
      // The whole composition sits on a giant sphere far behind the screen.
      // Moving the mouse slides the frame along the sphere surface — all three
      // images rotate in perfect tandem as one rigid panel.
      const MOUSE_TILT = 0.19;
      if (groupRef.current) {
        groupRef.current.rotation.y = px * MOUSE_TILT;
        groupRef.current.rotation.x = -py * MOUSE_TILT;
      }

      // --- Per-mesh translation (each image drifts at its own inertia rate) ---
      if (mainMeshRef.current) {
         const rest = restPosRef.current.main;
         mainMeshRef.current.position.x = rest.x + mouseSmoothMain.current.x * 22 + mainFx;
         mainMeshRef.current.position.y = rest.y + mouseSmoothMain.current.y * 22 + mainFy;
         mainMeshRef.current.rotation.z = mainFr;
      }
      if (tlMeshRef.current) {
         const rest = restPosRef.current.tl;
         tlMeshRef.current.position.x = rest.x + mouseSmoothTl.current.x * 48 + tlFx;
         tlMeshRef.current.position.y = rest.y + mouseSmoothTl.current.y * 48 + tlFy;
         tlMeshRef.current.rotation.z = tlFr;
      }
      if (brMeshRef.current) {
         const rest = restPosRef.current.br;
         brMeshRef.current.position.x = rest.x + mouseSmoothBr.current.x * 36 + brFx;
         brMeshRef.current.position.y = rest.y + mouseSmoothBr.current.y * 36 + brFy;
         brMeshRef.current.rotation.z = brFr;
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

    // Handle window resize
    const handleResize = () => {
      const newDims = getResponsiveDimensions();
      setDimensions(newDims);

      // Update renderer size
      renderer.setSize(newDims.width, newDims.height);

      // Update container size
      if (containerRef.current) {
        containerRef.current.style.width = `${newDims.width}px`;
        containerRef.current.style.height = `${newDims.height}px`;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (canvasWrapperRef.current && renderer.domElement) {
        canvasWrapperRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      materialsRef.current.forEach(m => m.dispose());
      materialsRef.current = [];
      animateRef.current = null;
      groupRef.current = null;
    };
  }, [getResponsiveDimensions, setDimensions]); 

  // Handle Prop Changes (Hover Update) with Double Buffering Logic
  useEffect(() => {
    // Generate ID for this specific hover session
    const requestId = Math.random();
    currentRequestIdRef.current = requestId;

    if (previewState && previewState.project.img) {
      const { project, top, height: itemHeight } = previewState;

      const itemCenterY = top + (itemHeight / 2);

      // Position container so its center (Y=0 in Three.js) aligns with cursor
      const tY = itemCenterY - (dimensionsRef.current.height / 2);
      targetYRef.current = tY;

      // Reset main mesh to center (Y=0) - the container positioning handles alignment
      restPosRef.current.main.y = 0;

      // First Load - Instant Setup
      if (progressRef.current < 0.05 && materialsRef.current.length > 0 && materialsRef.current[0].uniforms.uHasOld.value < 0.5) {
        currentYRef.current = tY;
      }

      const isGif = (url: string) => url.toLowerCase().endsWith('.gif');

      const loadTex = (url: string | undefined) => {
        if (!url) return Promise.resolve(transparentTex.current!);
        if (textureCache.current.has(url)) return Promise.resolve(textureCache.current.get(url)!);

        // Handle animated GIFs by parsing frames with gifuct-js
        if (isGif(url)) {
          return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buffer => {
              const gif = parseGIF(buffer);
              const frames = decompressFrames(gif, true);

              if (frames.length === 0) {
                return transparentTex.current!;
              }

              // Get full GIF dimensions from logical screen descriptor
              const gifWidth = gif.lsd.width;
              const gifHeight = gif.lsd.height;

              // Create canvas with GIF dimensions
              const canvas = document.createElement('canvas');
              canvas.width = gifWidth;
              canvas.height = gifHeight;
              const ctx = canvas.getContext('2d');

              if (!ctx) {
                return transparentTex.current!;
              }

              // Pre-render all frames with proper compositing
              const compositeCanvas = document.createElement('canvas');
              compositeCanvas.width = gifWidth;
              compositeCanvas.height = gifHeight;
              const compositeCtx = compositeCanvas.getContext('2d')!;

              // Temp canvas for drawing each frame patch with alpha
              const patchCanvas = document.createElement('canvas');
              const patchCtx = patchCanvas.getContext('2d')!;

              const imageDataFrames: ImageData[] = [];

              frames.forEach((frame, i) => {
                // Handle disposal from previous frame
                if (i > 0) {
                  const prevFrame = frames[i - 1];
                  if (prevFrame.disposalType === 2) {
                    // Restore to background (clear the previous frame area)
                    compositeCtx.clearRect(
                      prevFrame.dims.left,
                      prevFrame.dims.top,
                      prevFrame.dims.width,
                      prevFrame.dims.height
                    );
                  }
                }

                // Set up patch canvas for this frame
                patchCanvas.width = frame.dims.width;
                patchCanvas.height = frame.dims.height;

                // Create ImageData from frame patch
                const frameImageData = new ImageData(
                  new Uint8ClampedArray(frame.patch),
                  frame.dims.width,
                  frame.dims.height
                );

                // Put the patch on the patch canvas
                patchCtx.putImageData(frameImageData, 0, 0);

                // Draw patch onto composite canvas with proper alpha compositing
                compositeCtx.drawImage(
                  patchCanvas,
                  frame.dims.left,
                  frame.dims.top
                );

                // Store composite frame
                imageDataFrames.push(compositeCtx.getImageData(0, 0, gifWidth, gifHeight));
              });

              const delays = frames.map(f => f.delay || 100);

              // Draw first frame
              ctx.putImageData(imageDataFrames[0], 0, 0);

              const texture = new THREE.CanvasTexture(canvas);
              texture.wrapS = THREE.ClampToEdgeWrapping;
              texture.wrapT = THREE.ClampToEdgeWrapping;
              texture.minFilter = THREE.LinearFilter;
              texture.magFilter = THREE.LinearFilter;
              texture.generateMipmaps = false;

              // Store GIF data for animation
              gifTexturesRef.current.set(texture, {
                frames: imageDataFrames,
                delays,
                currentFrame: 0,
                lastFrameTime: performance.now(),
                canvas,
                ctx
              });

              textureCache.current.set(url, texture);
              return texture;
            })
            .catch(() => transparentTex.current!);
        }

        // Regular image loading
        return new Promise<THREE.Texture>((resolve) => {
            textureLoader.current.load(
                url,
                (t) => {
                    // Configure texture to stretch/fill the container regardless of aspect ratio
                    // This ensures any image size will fill the box completely:
                    // - Image is scaled so at least one dimension fits
                    // - The other dimension is stretched/compressed to fill
                    t.wrapS = THREE.ClampToEdgeWrapping;
                    t.wrapT = THREE.ClampToEdgeWrapping;
                    t.minFilter = THREE.LinearFilter;
                    t.magFilter = THREE.LinearFilter;
                    // Ensure texture fills the entire UV space (stretch to fit)
                    t.center.set(0.5, 0.5);
                    t.repeat.set(1, 1);
                    t.needsUpdate = true;

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
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        opacity: 0,
        transform: 'translate3d(-50%, -2000px, 0)'
      }}
    >
      <div ref={canvasWrapperRef} className="absolute inset-0 z-0" />

      {previewState && previewState.project.description && (
        <div
            className="absolute top-1/2 bg-black/80 backdrop-blur-md p-6 border border-white/10 text-white text-xs font-mono uppercase leading-relaxed tracking-wider z-[60] shadow-2xl rounded-sm transition-opacity duration-300"
            style={{
                left: '72%',
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
