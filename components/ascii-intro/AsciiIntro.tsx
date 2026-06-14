import React, { useEffect, useRef } from 'react';
import { createEngine } from './engine/AsciiEngine';
import { clamp } from './engine/math';
import { ribbonFrame } from './scenes/ribbon';
import { rippleFrame } from './scenes/ripple';
import { cloudPoints } from './scenes/cloud';
import { loadImage, silhouettePoints, imagePoints } from './scenes/image';
import { namePoints } from './scenes/name';
import './ascii-intro.css';

interface AsciiIntroProps {
  /** Called once the intro sequence has finished and faded out. */
  onComplete: () => void;
}

const TARGET_FPS = 30;
const STARTUP_REVEAL = 2200;
const RIPPLE_DURATION = 1550;

const ART_URL = '/cat.jpg';
const ART_SAMPLE = {
  luma: 'max',
  bgThreshold: 0.22,
  fillFloor: 0.15,
  fillDensity: 0.38,
  trim: true,
  scale: 0.9,
};

const NAME_URL = '/shivam.png';
const NAME_SAMPLE = {
  context: 'name',
  luma: 'rec709',
  threshold: 0.15,
  gamma: 1,
  trim: true,
  trimThreshold: 0.35,
  fit: 'contain',
  scale: 0.94,
  solidGlyph: '>',
  solidAbove: 0.5,
};

const COMPACT_NAME_SAMPLE = {
  ...NAME_SAMPLE,
  threshold: 0.48,
  gamma: 1,
  trimThreshold: 0.48,
  scale: 0.74,
  solidAbove: 0.5,
};

const TIMELINE = {
  collapse: 480,
  expand: 920,
  name: 2700,
  exit: 6500,
  fall: 1100, // exit fall before the overlay fades
};
const FADE_MS = 900; // matches the .ai-intro opacity transition

const AsciiIntro: React.FC<AsciiIntroProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  // Keep onComplete current without re-running the effect.
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const gridElement = gridRef.current;
    const overlay = overlayRef.current;
    if (!gridElement || !overlay) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const beginLabel = isTouch ? 'TAP' : 'CLICK';

    // Reduced motion: skip the animation entirely and reveal the site.
    if (reducedMotion) {
      const id = window.setTimeout(() => onCompleteRef.current(), 200);
      return () => window.clearTimeout(id);
    }

    const engine = createEngine({ element: gridElement });

    let phase = 'idle';
    let phaseStarted = performance.now();
    let points: any[] = [];
    let artImage: HTMLImageElement | null = null;
    let nameImage: HTMLImageElement | null = null;
    let rippleSource: any[] = [];
    let clickPoint = { x: 0.5, y: 0.5 };
    let mouseX = 0.5;
    let mouseY = 0.5;
    let animationFrame = 0;
    let lastTime = performance.now();
    let lastRenderTime = 0;
    let timeouts: number[] = [];
    let disposed = false;

    const elapsedSince = (time: number) => time - phaseStarted;

    const setPhase = (next: string) => {
      phase = next;
      phaseStarted = performance.now();
      overlay.dataset.phase = next;
    };

    const queuePhase = (callback: () => void, delay: number) => {
      timeouts.push(window.setTimeout(callback, delay));
    };

    const clearTimeouts = () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      timeouts = [];
    };

    const centerOf = (list: any[]) => {
      if (!list.length) return { x: 0.5, y: 0.5 };
      let sx = 0;
      let sy = 0;
      for (const point of list) {
        sx += point.x;
        sy += point.y;
      }
      return { x: sx / list.length, y: sy / list.length };
    };

    const expandTarget = () =>
      artImage ? silhouettePoints(engine, artImage, ART_SAMPLE) : cloudPoints(engine);

    const nameTarget = () => {
      if (!nameImage) return namePoints(engine, 'SHIVAM');
      const compactScreen = window.innerWidth < 960 || window.innerHeight < 600;
      return imagePoints(engine, nameImage, compactScreen ? COMPACT_NAME_SAMPLE : NAME_SAMPLE);
    };

    const clickOverlay = () => {
      if (elapsedSince(performance.now()) < STARTUP_REVEAL * 0.75) return null;
      const col = clamp(Math.floor(mouseX * engine.cols) + 2, 0, engine.cols - beginLabel.length);
      const row = clamp(Math.floor(mouseY * engine.rows), 0, engine.rows - 1);
      return engine.createText({ text: beginLabel, col, row, context: 'ui' });
    };

    const begin = (event?: MouseEvent) => {
      if (phase !== 'idle') return;
      clickPoint = engine.pixelToNormalized(
        event?.clientX ?? window.innerWidth / 2,
        event?.clientY ?? window.innerHeight / 2,
      );
      rippleSource = points.map((point) =>
        engine.createPoint({ x: point.x, y: point.y, value: point.value }),
      );
      setPhase('ripple');

      queuePhase(() => {
        setPhase('collapse');
        const center = centerOf(points);
        for (const point of points) {
          point.homeX = center.x;
          point.homeY = center.y;
          point.vx += (center.x - point.x) * 0.12;
          point.vy += (center.y - point.y) * 0.12;
        }
      }, TIMELINE.collapse);

      queuePhase(() => {
        setPhase('wings');
        points = engine.morph(points, expandTarget(), { duration: 660, ease: 'out', match: 'radial' });
      }, TIMELINE.expand);

      queuePhase(() => {
        setPhase('name');
        points = engine.morph(points, nameTarget(), { duration: 900, match: 'scan' });
      }, TIMELINE.name);

      queuePhase(finish, TIMELINE.exit);
    };

    const finish = () => {
      if (phase === 'exit' || phase === 'done') return;
      clearTimeouts();
      setPhase('exit');
      for (const point of points) {
        point.morph = null;
        point.vx = (Math.random() - 0.5) * 0.4;
        point.vy = -0.12 - Math.random() * 0.3;
      }
      // Let particles fall, fade the overlay, then reveal the site.
      queuePhase(() => {
        phase = 'done';
        overlay.dataset.done = 'true';
        queuePhase(() => {
          if (!disposed) onCompleteRef.current();
        }, FADE_MS);
      }, TIMELINE.fall);
    };

    const step = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;
      const now = time;

      switch (phase) {
        case 'idle':
          points = ribbonFrame(engine, { elapsed: elapsedSince(now), mouseX, startupReveal: STARTUP_REVEAL });
          engine.render(points, clickOverlay());
          return;
        case 'ripple':
          points = rippleFrame(engine, { source: rippleSource, click: clickPoint, elapsed: elapsedSince(now), duration: RIPPLE_DURATION });
          engine.render(points);
          return;
        case 'collapse':
          engine.applyPhysics(points, delta, { spring: 0.55, friction: 0.5 });
          engine.render(points);
          return;
        case 'wings':
        case 'name': {
          const result = engine.applyMorph(points, now);
          points = result.points;
          engine.render(points);
          return;
        }
        case 'exit':
          engine.applyFall(points, delta, { gravity: 1.8 });
          engine.render(points);
          return;
        default:
          return; // "done"
      }
    };

    const animate = (time: number) => {
      animationFrame = requestAnimationFrame(animate);
      if (time - lastRenderTime < 1000 / TARGET_FPS) return;
      lastRenderTime = time;
      step(time);
    };

    const onResize = () => engine.measure();
    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX / window.innerWidth;
      mouseY = event.clientY / window.innerHeight;
    };
    const onClick = () => begin(undefined);

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove);
    overlay.addEventListener('click', onClick);

    // Boot: preload art + wordmark so morph targets are ready, then start.
    (async () => {
      engine.measure();
      const [art, name] = await Promise.all([
        loadImage(ART_URL).catch(() => null),
        loadImage(NAME_URL).catch(() => null),
      ]);
      if (disposed) return;
      artImage = art;
      nameImage = name;
      setPhase('idle');
      animationFrame = requestAnimationFrame(animate);
    })();

    return () => {
      disposed = true;
      clearTimeouts();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      overlay.removeEventListener('click', onClick);
    };
  }, []);

  const skip = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Fade straight to the site.
    if (overlayRef.current) overlayRef.current.dataset.done = 'true';
    window.setTimeout(() => onCompleteRef.current(), FADE_MS);
  };

  return (
    <div ref={overlayRef} className="ai-intro" data-phase="idle">
      <div ref={gridRef} className="ai-grid" aria-hidden="true" />
      <button className="ai-skip" type="button" onClick={skip}>
        Skip intro
      </button>
    </div>
  );
};

export default AsciiIntro;
