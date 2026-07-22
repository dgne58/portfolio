# Design System — Terminal / Oldweb Aesthetic

> A field guide to *how* this site gets its look — the ASCII intro, the dithered
> shader background, the CRT texture, the monochrome terminal chrome — and how to
> port any of it onto a new site. Written so you can lift one piece at a time.
> This is the single source of truth: the *recipe* (how it works, how to reuse it).

---

## 0. The one-paragraph philosophy

The aesthetic is **"modern AND oldweb at once."** It is *not* nostalgia cosplay.
The trick is **restraint with one or two loud moments**: a single flashy hero
(the ASCII intro), a textured-but-quiet canvas (dither + CRT + grain, all at
whisper-low opacity), and disciplined **monochrome** chrome (no green/amber
terminal cliché — hover just brightens to pure white with a soft glow). Every
decorative layer is `pointer-events: none`, GPU-cheap, and gated behind
`prefers-reduced-motion`. The loud thing earns the "wow"; everything else is
texture you feel but don't consciously notice.

**The five rules that make it cohere**
1. **Monochrome only.** Backgrounds are near-black (`#030303`), text near-white
   (`#f0f0f0`). The only "color" event is hover → `#fff` + white `text-shadow`.
2. **Everything mono-spaced.** Three typefaces, all monospace: a pixel display
   face, a code/body face, and one expressive display face for the giant name.
3. **Square corners, hairline borders.** No `border-radius`. Dividers are 1–2px
   lines at low-opacity white. Status indicators are `■` blocks, not round dots.
4. **Texture is layered and quiet.** Multiple full-screen overlays, each at
   2–10% opacity, stacked by z-index. No single layer is loud.
5. **Motion is cheap and optional.** Prefer CSS keyframes and compositor-only
   properties (`transform`, `opacity`). One `requestAnimationFrame` loop per
   effect, max. Kill all of it under reduced-motion.

---

## 1. The layer stack (the mental model)

The whole page is a **stack of fixed full-screen layers** behind/over a normal
scrolling content column. Get the z-order right and everything else is detail:

```
z-9999  Custom cursor (white block, mix-blend-difference)
z-[95]  CRT scanlines + vignette + glare   (crt.css)
z-90    Film grain (SVG turbulence)          (NoiseOverlay.tsx)
z-10    Content column (OverlayUI)           ← the only thing that scrolls
z-1     CRT graph-paper grid                 (crt.css)
z-0     Dithered shader background           (CanvasBackground.tsx)
        body background: #030303
```

Plus a **transient** layer that lives above everything during load only:

```
z-100   ASCII intro overlay (AsciiIntro) — unmounts when done
```

Key idea: the content sits *in the middle of the texture sandwich*. Grain and
scanlines render **over** the text (so the text feels like it's on the screen
hardware), while the grid and dither render **under** it (so it feels like a
backdrop). That over/under split is what sells "it's on a CRT" vs. "it has a
background image."

---

## 2. Effect catalog

Each effect below is self-contained. Pick what you want; they don't depend on
each other. For each: **what it is**, **how it works**, **the file**, and **how
to lift it**.

### 2.1 Dithered shader background — `components/CanvasBackground.tsx`

**What:** A slow-drifting smoky field rendered as a **Bayer 4×4 ordered-dither**
of two layers of simplex noise — i.e. it looks like a 1-bit/halftone gradient
that's always subtly moving, with a soft mouse "glow" that follows the cursor.

**How it works:**
- A single full-screen Three.js `OrthographicCamera` + `PlaneGeometry(2,2)` with
  a fragment shader. No 3D scene — it's just a shader canvas.
- `snoise` (2D simplex) is sampled twice at different scales/speeds and summed →
  a smoky brightness field. Mouse proximity adds a `smoothstep` brightness bump.
- That continuous brightness is **quantized** through `dither4x4()`: each pixel
  is either bg color or fg color depending on whether its brightness beats the
  Bayer-matrix threshold for its screen position. This is what gives the crunchy
  retro halftone instead of a smooth gradient.
- Two-color palette only: `colorBg = #030303`-ish, `colorFg ≈ #232325`. A radial
  vignette multiplies the edges down.

**The performance tricks (copy these verbatim):**
- `renderer.setPixelRatio(1)` — force DPR 1. The dither *looks better* chunky and
  this is a massive GPU saving on retina/4K.
- `WebGLRenderer({ alpha:false, antialias:false, depth:false, stencil:false,
  powerPreference:'high-performance' })` — opaque canvas, no buffers it doesn't
  need.
- Brightness is clamped to `[0, 0.9]` so the brightest dither threshold (1.0) is
  never met → at least 1/16 pixels stay black even in bright zones, keeping the
  pattern alive instead of forming solid blobs.
- Mouse is `lerp`ed toward target at `0.05`/frame so the glow trails smoothly.

**Lift it:** Copy the file. It's a self-contained component with its own rAF
loop and cleanup. To re-theme: change `colorBg`/`colorFg` in the fragment shader
and the `bg-[#...]` on the container. To change the "weather": tune `uTime * 0.15`
(speed) and the `p * 1.5` / `p * 3.0` noise scales. The Bayer matrix + dither
function are the reusable core — they'll dither *any* brightness source.

### 2.2 ASCII particle intro — `components/ascii-intro/`

**What:** The startup sequence. An idle ASCII "ribbon" reacts to the mouse →
click/tap fires a ripple → particles implode → reform into an ASCII rendering of
a photo → morph into the ASCII wordmark → fall away → reveal the site.

**Architecture (this is the reusable part):** A **framework-agnostic engine** in
`engine/AsciiEngine.ts` wrapped by a thin React component. The engine knows
nothing about React — you could drop it into any page.

The engine's whole model:
- **Points live in normalized 0–1 coordinates**, not pixels. This makes it
  resolution-independent and sidesteps glyph-width measurement bugs. A `measure()`
  step probes the real monospace glyph box once to derive `cols`/`rows`.
- **An offscreen `<canvas>` is the bridge from images to glyphs.** You draw any
  image/video/canvas into a `cols × rows` canvas, then `createFromCanvas()` reads
  per-pixel luminance and maps each pixel to a glyph via the **brightness ramp**
  (`engine/ramp.ts`: the classic Paul Bourke 70-char dense→light ramp). Bright
  pixel → dense glyph (`$@B`), dark → space.
- **Transitions are time-based morphs, not springs.** `morph(from, to)` pairs up
  source and target points (sorted by the same key so nearby maps to nearby — no
  crossing-path spaghetti), then `applyMorph()` lerps position *and* glyph (via
  `charLerp` walking the ramp) over a duration. Surplus targets spawn from random
  existing points; surplus sources fly in then vanish. Because it's time-based, a
  morph **always lands exactly on target** — no jitter, no overlap pile-ups.
- **`render()`** flattens all point layers into one `\n`-joined string written to
  a single element's `textContent`. One DOM write per frame.
- Extra force helpers: `applyPhysics` (spring-to-home), `applyFall` (gravity exit).

**Choreography** lives in `AsciiIntro.tsx` as a phase state machine (`idle →
ripple → collapse → wings → name → exit → done`) driven by a `TIMELINE` object of
millisecond offsets and `queuePhase()` timeouts. Scenes (`scenes/*.ts`) are pure
functions that return point arrays for each phase.

**Lift it:** Copy `engine/` + `scenes/` + the CSS. The engine is the asset — it
ASCII-ifies *anything* with a luminance value and morphs between states. For a
new site, keep `AsciiEngine.ts`/`ramp.ts` untouched and rewrite the `TIMELINE`
and image URLs in `AsciiIntro.tsx`, or write new scene functions. Replace
`/cat.jpg` and `/shivam.png` with your own art/wordmark PNG.

**Tuning knobs:** `TARGET_FPS` (30 is plenty for ASCII), `ART_SAMPLE` /
`NAME_SAMPLE` objects (luminance metric, threshold, gamma, trim, scale). The
`luma` option matters: use `'max'` for saturated/colored art (Rec.709 under-
weights red/blue and samples logos poorly), `'rec709'` for grayscale subjects.

### 2.3 CRT texture overlay — `components/crt/`

**What:** Four stacked, pure-CSS, `pointer-events:none` layers that add faint CRT
character: a graph-paper grid, drifting scanlines, a corner vignette, and a
diagonal "glass" glare.

**How it works (all in `crt.css`, all opacity-tunable via CSS vars on `.crt-root`):**
- **Grid** (`z-1`, *under* content): two 1px `linear-gradient` line sets at
  ~2.8% white on a 34px cell, with a **radial mask** fading it out toward the
  edges so it never frames the viewport like a cage.
- **Scanlines** (`z-95`, *over* content): a `repeating-linear-gradient` of
  transparent/black stripes, drifting via `translateY` keyframes. The layer is
  `inset: -10px` (overhangs the viewport) and one animation period == one
  scanline period, so the loop is **seamless** with no edge gap.
- **Vignette** (`z-95`): radial gradient, `mix-blend-mode: multiply` so it darkens
  whatever's beneath.
- **Glare** (`z-95`): a single soft diagonal sheen, `mix-blend-mode: screen`.

**The discipline that makes it work:** every opacity is *whisper-quiet* (lines at
2–3% white). The blend modes (`multiply`/`screen`) mean the layers react to the
content beneath instead of painting flat over it. Reduced-motion kills only the
scanline drift — the static texture stays.

**Lift it:** Copy `crt/` and mount `<CrtOverlay/>` near the root. Dial intensity
with the four CSS vars in `.crt-root` without touching markup. It's purely
additive — it composites over *any* background.

### 2.4 Film grain — `components/NoiseOverlay.tsx`

**What:** Animated-looking static/grain over the whole page. Sells the "this is a
screen" feeling and hides banding in the dark gradients.

**How:** One `<svg>` with an `feTurbulence` fractal-noise filter on a full-screen
rect. The component is ~15 lines. `z-90`, `pointer-events:none`,
`opacity ~3.5%`, `mix-blend-mode: overlay`. `translate3d(0,0,0)` +
`backface-visibility:hidden` promote it to its own GPU layer so it's free.

**Lift it:** Copy the file as-is. Tune `baseFrequency` (grain size — higher =
finer) and the `opacity-[0.035]`. This is the single cheapest "expensive-looking"
effect here — high ROI on any dark site.

### 2.5 Custom block cursor — `components/CustomCursor.tsx` + `index.css`

**What:** The OS cursor is hidden (`cursor: none` globally); replaced by a white
**block** (`9×16px`, terminal-caret shaped) that **blinks** like a text cursor
and trails the mouse with smooth lerp, using `mix-blend-difference` so it inverts
whatever it's over (always visible on any background).

**How:**
- A `position:fixed` div, moved each frame by lerping `pos` toward `mouse` at
  `0.15`/frame (the trailing feel). Uses `transform: translate3d(...)` only —
  never `top`/`left` — so it's compositor-cheap.
- `mix-blend-difference` is the magic: the cursor is pure white, so it XORs
  against the page → black-on-white, white-on-black, automatically.
- Blink is a CSS `steps(1)` keyframe (`blink-block`) → hard on/off, no fade.
- Hidden on touch / coarse-pointer devices (`@media (pointer: coarse)`).
- Reduced-motion → solid (non-blinking).

**Lift it:** Copy the component + the cursor CSS block from `index.css`. Works on
any site. Don't forget the global `* { cursor: none !important }` and the
touch-device hide, or mobile users get *no* cursor affordance.

### 2.6 Pixelation hover popout — `components/ProjectPreviewTooltip.tsx`

**What:** Hovering a project resolves a preview image in from a low-res pixelated
state, revealed through a growing noise mask, with subtle Three.js parallax. The
"resolve from pixels" transition is the signature interaction.

**How (the shader core, ~lines 122–196):**
- A fragment shader pixelates the texture by snapping UVs to a grid:
  `gridUv = floor(uv * gridSize) / gridSize`. The grid resolution is animated
  `mix(startRes=60, endRes=800, pow(progress,3))` so it goes chunky→sharp on a
  cubic curve as `progress` 0→1.
- A second, coarser **noise mask** (`step(noiseVal, p*1.15)`) makes the new image
  "grow in" organically rather than cross-fade flatly — different cells appear at
  different progress values.
- A 4px `smoothstep` edge feather kills hard-geometry aliasing at the quad edges.

**Lift it:** This one is more entangled (GIF decode loop, parallax group, scroll
follow) — lift the *shader* (the `gridUv` pixelation + noise-mask reveal) rather
than the whole component. That pattern re-skins any image-reveal transition.

---

## 3. The type system

Three monospace faces, self-hosted as `woff2` in `public/fonts/`, declared with
`@font-face` + `font-display: swap` in `public/index.css`, and **preloaded** in
`index.html` (`<link rel="preload" as="font" ... crossorigin>`):

| Face | Role | Where |
|------|------|-------|
| **Departure Mono** (`.font-pixel`) | Pixel display: nav, labels, section headers, micro-labels (year/type/LAUNCH), footer | terminal *chrome* |
| **JetBrains Mono** | Body + code (the default `body` font, also Tailwind's `font-mono`) | readable *content* |
| **OffBit / Pilowlava** | The one giant expressive wordmark | the *loud* moment |

**The principle:** chrome gets the pixel face (character), content gets the clean
code face (readability), and exactly **one** element gets the expressive display
face. Don't let the expressive face leak into body text — that's how it stays
intentional instead of kitsch.

**Lift it:** all three are OFL-licensed and free. Self-host woff2, preload the
critical weight only, and route Tailwind's `font-mono` token to JetBrains so
utility classes Just Work.

---

## 4. Replication checklist — building a new site in this language

A pragmatic order, lightest-lift first. You don't need all of it; even items 1–4
alone read as "this aesthetic."

1. **Palette + type foundation.** Body `#030303` bg / `#f0f0f0` text. Self-host +
   preload the two/three monospace faces. Add `.font-pixel`. Route Tailwind
   `font-mono`. *(Lift: `index.html` head + `index.css` `@font-face` block.)*
2. **Square everything.** Strip `border-radius`. Borders = 1–2px low-opacity
   white lines. Status dots → `■`. Hover = brighten to `#fff` + white
   `text-shadow` glow. (No new files — just style discipline.)
3. **Grain.** Drop in `NoiseOverlay.tsx`. Instant texture. *(~15 lines.)*
4. **Block cursor.** Drop in `CustomCursor.tsx` + the cursor CSS. *(Remember the
   global `cursor:none` and touch hide.)*
5. **CRT overlay.** Drop in `crt/`. Tune the four `.crt-root` vars quiet. Mount
   near root.
6. **Dither background.** Drop in `CanvasBackground.tsx` (pulls in Three.js).
   Re-theme the two shader colors. Keep `setPixelRatio(1)`.
7. **ASCII intro.** Copy `ascii-intro/engine` + `scenes`. Swap art/wordmark PNGs,
   rewrite the `TIMELINE`. The heaviest lift — save for when you want the hero.
8. **Pixelation hover** (optional, advanced). Port the reveal shader, not the
   whole tooltip.

**The z-order contract (don't break it):** bg `z-0` → grid `z-1` → content `z-10`
→ grain `z-90` → scanlines/vignette/glare `z-95` → cursor `z-9999` → intro `z-100`
while loading. Texture *over* content sells "screen"; texture *under* content
sells "backdrop."

---

## 5. Performance & accessibility (non-negotiable)

These are what keep the look from being a janky gimmick. The whole texture stack
must stay essentially free.

- **One rAF loop per effect, max.** Dither, cursor, intro, tooltip each own
  exactly one loop and cancel it on cleanup. Pure-CSS effects (CRT, grain) add
  *zero* JS loops.
- **Compositor-only motion.** Animate `transform` / `opacity` only. Never
  `top`/`left`/`width`/`height`. Promote moving layers with `translate3d(0,0,0)`
  + `will-change: transform`.
- **Force DPR 1 on the shader.** The dither *looks better* chunky and it's the
  single biggest GPU win.
- **`pointer-events: none` on every decorative layer** so nothing steals clicks.
- **Gate all motion behind `prefers-reduced-motion`.** `index.css` disables every
  `[class*="animate-"]` loop + `scroll-behavior`; CRT drift stops; cursor goes
  solid; the ASCII intro **skips entirely** and reveals the site immediately;
  marquee/scroll-parallax rAF loops early-return. Reduced-motion users get the
  *static* aesthetic, fully readable, with none of the movement.
- **Mobile:** hide the custom cursor (coarse pointer); the intro drops to a 7px
  grid and content auto-trims to fit portrait; targets ~30 FPS even under CPU
  throttle.
- **Readability is the boss.** Every texture opacity is tuned *down* until text
  is comfortable. If you can consciously notice a single overlay, it's too loud.

---

## 6. File map (where each thing lives)

```
index.html                          body font + font preloads + Tailwind font config
public/index.css                    @font-face, .font-pixel, scrollbar, block-cursor
                                      keyframes, reduced-motion gating
public/fonts/                       self-hosted woff2 (Departure, JetBrains, Pilowlava)
App.tsx                             mounts the layer stack + intro gate

components/
  CanvasBackground.tsx              §2.1 dither shader bg          (z-0)
  ascii-intro/
    AsciiIntro.tsx                  §2.2 React wrapper + TIMELINE choreography
    engine/AsciiEngine.ts           §2.2 the reusable ASCII engine ← the asset
    engine/ramp.ts                  §2.2 brightness→glyph ramp + charLerp/scramble
    engine/math.ts                  helpers (clamp, etc.)
    scenes/                         ribbon / ripple / cloud / image / name phases
    ascii-intro.css                 scoped intro styles + mobile + reduced-motion
  crt/
    CrtOverlay.tsx + crt.css        §2.3 grid(z-1) + scanlines/vignette/glare(z-95)
  NoiseOverlay.tsx                  §2.4 SVG grain                 (z-90)
  CustomCursor.tsx                  §2.5 white block cursor        (z-9999)
  ProjectPreviewTooltip.tsx         §2.6 pixelation hover popout (user-locked)
  OverlayUI.tsx                     the content column            (z-10)

data/ascii.ts                       raw ASCII banner string (box-drawing wordmark)
```

---

*Last updated 2026-06-21.*
