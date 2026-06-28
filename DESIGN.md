# DESIGN.md — SubZeroSec

## Visual theme
Dark, technical "sliding shaped sheets" system: dark navy backdrops with white "paper"
sheets that slide over them on scroll, with geometric clip-path leading edges. Locked dark
theme throughout (no section inverts). Subtle fixed grain overlay breaks the flat fields.

## Color palette
One blue accent family on tinted-navy neutrals. Defined as CSS custom properties (`--p-*`).

| Token | Value | Use |
|---|---|---|
| Background | `#0A1326` | Page / dark scenes (off-black navy, never pure black) |
| Paper | `#FFFFFF` | White sliding sheets / light sections |
| Accent | `#5A8CD8` (dark) / `#2759A5` (light) | Links, eyebrows, highlights |
| Fill | `#2759A5` | Primary buttons, icon tiles |
| Fill deep | `#132D53` | Button hover, gradients |
| Dark text | `#EAF1FF` / muted `#A9B7CE` / faint `#73839B` | On dark |
| Light text | `#102B4F` / muted `#4C5C73` | On paper |

Shadows are navy-tinted (`rgba(6,11,24,…)` / `rgba(19,45,83,…)`), never pure black.

## Typography
- **Display (h1–h4):** Sora (700/800), tight tracking `-.022em`.
- **Body:** Inter (400–700). Deliberate — Sora + JetBrains Mono carry the personality.
- **Numerics & labels:** JetBrains Mono — stat figures, metrics, breadcrumbs, eyebrows (uppercase, wide tracking).

## Iconography
Single hand-drawn line-icon registry (`site/src/components/Icon.astro`), 24×24, `currentColor`,
round caps. Service metaphors: VAPT = targeting reticle, Red Team = capture-the-flag, Threat
Hunting = radar, OSINT = eye, Attack Surface = viewfinder + asset nodes.

## Components
- **Resizable nav island** (`.navshell`) that contracts to a pill on scroll, with a Services mega-menu and a sliding highlight pill.
- **Scroll-driven services showcase** (`.hsv`) — white sheets slide left while a pinned panel cross-fades; progress dots show position.
- **Process constellation** (`.punv`) — star-map of ordered steps that expand on hover.
- Cards: case studies, insights, frameworks, team, jobs, certifications — borders + navy-tinted shadow, never AI-gradient.
- Logo wall: disclosed-research credits, logos only.

## Layout & motion
- Container max-width 1200px; `100dvh` full-screen sections (no iOS jump).
- CSS Grid over flex-math; asymmetric hero (copy + form/asset split).
- Motion: restrained, `transform`/`opacity`, honors `prefers-reduced-motion`. Scroll-driven scenes and one-shot transitions; spring-ish easing `cubic-bezier(.22,1,.36,1)`.

## Accepted deviations (impeccable ignores, with reasons)
- `numbered-section-markers` — the 01–05 showcase numerals and process-step numbers are **functional ordering**, not decorative scaffold.
- `overused-font=Inter` — body text only; display/numerics use Sora / JetBrains Mono.
- `layout-transition` — the navbar island morph (max-width/padding) is an intentional one-shot transition that performs fine.
- `side-tab` — the `.prose blockquote` left rule is a typographic convention, not a card tell.
