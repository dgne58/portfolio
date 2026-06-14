# Portfolio — Terminal/Oldweb Redesign · Handoff

> Working doc to resume the redesign. Two parts: **Current Progress** (what's
> already done & shipped to the repo) and the **Redesign Plan** (next, not yet
> started). Last updated: 2026-06-14.

---

## PART 1 — Current Progress (done)

### ASCII intro — built, integrated, verified
A terminal-style ASCII startup intro now plays before the site and reveals it.

- Lives in **`components/ascii-intro/`** (framework-agnostic engine + React wrapper):
  - `AsciiIntro.tsx` — React component; takes `onComplete`, runs the whole
    sequence in one `useEffect`, fades out, then calls `onComplete`.
  - `engine/AsciiEngine.ts` — reusable ASCII particle engine (normalized 0–1
    coords, time-based `morph`, image/silhouette sampler, render-to-`textContent`).
  - `engine/ramp.ts`, `engine/math.ts` — char ramp + helpers.
  - `scenes/` — `ribbon` (idle), `ripple` (click), `cloud` (procedural fallback),
    `image` (`imagePoints` + `silhouettePoints` samplers), `name` (Arial fallback).
  - `ascii-intro.css` — scoped styles (`.ai-intro` / `.ai-grid`), mobile + reduced-motion.
- **Choreography:** idle ribbon → tap/click → ripple → implosion → ASCII cat
  (`/cat.jpg`, silhouette fill) → SHIVAM wordmark (`/shivam.png`, flame logo) →
  particles fall + overlay fades → `onComplete` reveals the site.
- **Wired in `App.tsx`:** replaced `IntroLoader` with
  `{loading && <AsciiIntro onComplete={() => setLoading(false)} />}`.
- **Assets** (in `public/`): `cat.jpg` (expand art), `shivam.png` (wordmark logo).
- **Mobile:** responsive — 7px grid font under `max-width:700px`, content
  auto-trim + contain-fit so wide art fits portrait, "TAP" label on touch,
  ~30 FPS at 4× CPU throttle. Verified desktop (1440×900) + mobile (390×844):
  full sequence → reveal works, console clean, build green.
- Tuning knobs if needed: `ART_SAMPLE` / `NAME_SAMPLE` in `AsciiIntro.tsx`.

### Cleanup
- Deleted the sandbox folders **`ascii-intro-demo/`** and **`.analysis/`**
  (were untracked testing grounds; nothing live depended on them; build still green).
- **`components/IntroLoader.tsx` is now dead code** (replaced by AsciiIntro) —
  safe to delete; planned for removal in the redesign pass.

---

## PART 2 — Redesign Plan (next — NOT started)

### Goal / brief
Make the whole site speak the intro's **oldweb / terminal** language, but feel
**modern AND oldweb at once, snappy/fast, intentional (not nostalgia-bait)**.
It's a **recruiter-facing showcase** — craft + readability over kitsch. The flashy
skill pieces (dither background, ASCII intro, pixelation hover) carry the "wow";
the redesign adds restrained terminal *texture* over the existing modern layout.

Already aligned: monochrome palette, dithered-pixelation background
(`CanvasBackground.tsx`), CRT grain (`NoiseOverlay.tsx`), mono labels + divider
borders, and the pixel-grid hover popout (`ProjectPreviewTooltip.tsx`).

### Retain exactly as-is (user-locked 2026-06-14 — do NOT touch)
These five carry the site's identity and are off-limits. Cosmetic square-corner
tweaks that were previously floated for #1 are **cancelled** — leave the code alone.
1. **Pixelation / fade-out popout** — the shader transition in
   `ProjectPreviewTooltip.tsx` (`startRes`→`endRes` pixel grid + noise growth mask,
   lines ~122–196). Keep as-is.
2. **Three.js parallax on the popout** — same file: sphere-rotation group +
   per-mesh inertia drift (lines ~343–403). Keep as-is.
3. **Data** — `data/content.ts` + `public/data/projects.json`. No content changes.
4. **Cursor** — `components/CustomCursor.tsx`: round white `mix-blend-difference`
   dot with lerp follow. **No** dot→square-block change (that idea is dropped).
5. **Background** — `components/CanvasBackground.tsx` (dither shader) +
   `components/NoiseOverlay.tsx` (grain). The current background look stays. The CRT
   layer (below) may render *over* it, but neither background file is edited.

### Decisions (locked)
- **Container:** keep full-bleed scrolling layout; add a restrained CRT texture
  layer only. No CRT-window cage (would break the scroll-driven marquee +
  tooltip `window.scrollY` follow, and reads as nostalgia-bait).
- **Accent:** **strictly monochrome.** Hover = brighten to `#fff` + white
  `text-shadow` glow. No green/amber.
- **Type:** **pixel font** (Departure Mono) for nav/labels/section headers;
  **JetBrains Mono** for body/code; **keep OffBit (Pilowlava)** for the giant name.
- **Extras:** boot line + blinking block cursor (+ optional small ASCII header
  logo); 88×31 button banner / webring. (No oneko, no settings panel.)

### Keep untouched (showcase pieces)
`CanvasBackground.tsx` (dither shader), `NoiseOverlay.tsx` (grain),
`ProjectPreviewTooltip.tsx` (pixelation + parallax popout), `CustomCursor.tsx`,
`data/content.ts`, `public/data/projects.json`, `components/ascii-intro/*`.
No cosmetic tweaks on these — see "Retain exactly as-is" above.

### Approach
1. **Type system (foundation).** Self-host `Departure Mono` + `JetBrains Mono`
   woff2 in `public/fonts/`; `@font-face` (+ `font-display: swap`) in
   `public/index.css` (next to existing OffBit face); add `.font-pixel` util.
   In `index.html`, change body font → JetBrains Mono + `<link rel="preload">`
   the two woff2s. In `OverlayUI.tsx`, add `font-pixel` to nav, `©2026`, section
   header labels, project micro-labels (year/type/LAUNCH), footer — leave bio/body
   + project name as-is for readability.
2. **CRT texture layer.** New `components/crt/CrtOverlay.tsx` + `crt.css` — four
   fixed `pointer-events:none` layers, low opacity, reduced-motion-gated:
   scanlines (slow drift), vignette (`mix-blend:multiply`), graph-paper grid
   (radial-mask fade), subtle diagonal glare. **Additive only — does NOT edit
   `CanvasBackground.tsx` or `NoiseOverlay.tsx`.** `NoiseOverlay` grain stays as-is.
   Mount in `App.tsx`. Z-order: bg `z-0` → grid `z-1` → content `z-10` → grain
   `z-90` → scanlines/vignette/glare `z-[95]`. Keep every opacity whisper-quiet so
   the existing background reads through essentially unchanged (user-locked look).
3. **Terminal styling pass — `OverlayUI.tsx`.** Square corners (drop `rounded*`;
   status dots → small squares); white-glow hover (`hover:[text-shadow:...]`) +
   existing gray→white shift; crisper TUI section headers (pixel label + 2px
   divider, optional `▸` tick); hero **boot line + blinking block cursor** `▮`
   (CSS `steps()`, reduced-motion = solid); optional tiny `<pre>` ASCII "SM" mark.
4. **Oldweb extras.** New `components/oldweb/Webring.tsx` — "cool sites + friends →"
   + row of 88×31 buttons (square, 1px border, mono caption; data-driven;
   placeholder assets in `public/images/buttons/`). (Cursor restyle **removed** —
   `CustomCursor.tsx` is user-locked.)
5. **Snappy / a11y.** Pure-CSS overlays (no new rAF loops); preload fonts; gate
   every animation behind `prefers-reduced-motion`; dither shader stays at DPR 1.
6. Delete dead `components/IntroLoader.tsx`.

### Critical files
- `public/index.css` — `@font-face` (Departure Mono, JetBrains Mono) + `.font-pixel`
- `index.html` — body font → JetBrains Mono; preload fonts
- `App.tsx` — mount `<CrtOverlay/>` (additive; existing components left in place)
- `components/OverlayUI.tsx` — bulk of the styling pass
- **New:** `components/crt/CrtOverlay.tsx` + `crt.css`; `components/oldweb/Webring.tsx`
- `public/fonts/` (+2 woff2), `public/images/buttons/` (placeholder 88×31s)
- delete `components/IntroLoader.tsx`
- **Untouched (user-locked):** `ProjectPreviewTooltip.tsx`, `CustomCursor.tsx`,
  `CanvasBackground.tsx`, `NoiseOverlay.tsx`, `data/content.ts`,
  `public/data/projects.json`

### Verification
1. `npm run build` stays green.
2. `npm run dev` (port 3000) + Chrome DevTools: desktop 1440×900 + mobile 390×844.
   Confirm pixel labels / mono body / OffBit name; scanlines+grain+vignette subtle
   but text readable; white glow on hover; square corners; boot line + block
   cursor; webring renders.
   **Regressions to re-check (all user-locked — must be visually identical):**
   pixelation hover popout + three.js parallax still work; cursor still the round
   white dot; dither bg + grain unchanged behind the whisper-quiet CRT layer; ASCII
   intro → site handoff still works; project data unchanged.
   Toggle `prefers-reduced-motion` → animations stop. Console clean.
3. `document.fonts.check(...)` — confirm fonts loaded (not silent fallback).

### Open follow-ups
- Real 88×31 buttons + friend links to be supplied (placeholders for now).
- Font files to fetch: Departure Mono (departuremono.com, OFL), JetBrains Mono (OFL).

---

## Resume checklist
- [x] Approve / tweak this plan. _(revised 2026-06-14 — 5 user-locked retentions)_
- [x] Fetch + self-host fonts → `public/fonts/` (DepartureMono-Regular, JetBrainsMono
      Regular+Bold; all OFL, verified `wOF2`). _(Departure Mono pulled from official
      repo `rektdeckard/departure-mono` via jsDelivr — not on Fontsource.)_
- [x] **Phase 1 (type) — DONE & verified.** `@font-face` + `.font-pixel` in
      `public/index.css`; body→JetBrains + preload 2 woff2 in `index.html`; Tailwind
      `font-mono`→JetBrains via CDN config; `font-pixel` on nav/©/section headers/
      project micro-labels/footer/status lines in `OverlayUI.tsx`; wrapper `font-sans`
      →`font-mono` so body actually renders JetBrains. Build green; DevTools confirmed
      Departure (chrome) / JetBrains (body) / OffBit (name) all resolve.
- [x] **Phase 2 (CRT layer) — DONE & verified.** New `components/crt/CrtOverlay.tsx`
      + `crt.css`: grid `z-1`, scanlines/vignette/glare `z-95`, all `pointer-events:none`,
      whisper-quiet opacities (tunables in `.crt-root`). Mounted in `App.tsx` after
      `NoiseOverlay`. Additive — `CanvasBackground`/`NoiseOverlay` untouched. Scanline
      drift gated by `prefers-reduced-motion` (verified in CSSOM). Build green, console
      clean, z-order confirmed, readability intact.
- [x] **Phase 3 (OverlayUI terminal styling) — DONE & verified.** Square corners
      (status dots → `■` blocks ×4; Launch badge `rounded`→`border`); white-glow hover
      (`hover:[text-shadow:…]`) on nav / project names / contact labels; TUI section
      headers via new `SectionHeading` component (pixel label + `▸` tick + 2px divider;
      replaced 5 repeated h3s + inline "Selected Projects"); hero boot line
      `visitor@shivam-maji:~$ whoami ▮` with blinking block cursor (`.blink-cursor`
      keyframes in `index.css`, `steps(1)`, reduced-motion = solid). Build green,
      console clean, popout/parallax/cursor untouched.
- [~] **Phase 4 (oldweb webring) — BUILT, then REMOVED per user (2026-06-14).** Was
      implemented (`components/oldweb/Webring.tsx` + six 88×31 SVGs) but the user didn't
      like it, so it was fully deleted: component, `components/oldweb/`, and
      `public/images/buttons/` all removed; mount + import stripped from `OverlayUI.tsx`.
      No trace remains. (Skip the webring if revisiting this plan.)
- [x] **Phase 5 (a11y/perf) — DONE & verified.** Reduced-motion gating: `index.css`
      `@media (prefers-reduced-motion)` disables all `[class*="animate-"]` loops
      (pulse/spin) + forces `scroll-behavior:auto`; marquee scroll-parallax early-returns
      its rAF loop under reduced motion (`OverlayUI.tsx`). Scoped to `animate-*` so the
      user-locked tooltip's CSS transitions stay intact. CRT overlays are pure-CSS (no new
      rAF). Fonts preloaded (Phase 1). Both gates confirmed in live CSSOM.
- [x] **Delete `components/IntroLoader.tsx` — DONE.** (No live imports; was replaced by
      AsciiIntro in Phase 0.)
- [x] **Verify — DONE.** Build green; console clean (only the pre-existing
      cdn.tailwindcss.com prod warning); DevTools confirmed fonts/CRT/boot-cursor/intro
      intact, webring gone, page reflows cleanly into footer. Five user-locked pieces
      (popout, parallax, data, cursor, background) untouched throughout.

> **Redesign complete.** All phases done (Phase 4 webring intentionally dropped).
> Remaining housekeeping: `TERMINAL-REDESIGN.md` is still untracked; nothing committed.
