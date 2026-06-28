# SubZeroSec

Marketing site for SubZeroSec, an offensive-security firm. "Before Zero. Beyond Breach."

Live: https://subhanumer.github.io/subzerosec-mockups/stack/

## Stack

Static site built with [Astro](https://astro.build). Source lives in `site/`,
the build outputs to `stack/`, and GitHub Actions deploys on every push to `main`.

```bash
cd site
npm install
npm run dev      # local preview
npm run build    # outputs to ../stack
```

- `site/src/components/Icon.astro` — single registry for the hand-drawn line icons
- `site/src/components/` — Header (mega-menu), Footer, MobileNav, Base layout
- `site/src/data/site.ts` — nav, services and footer content
- `site/src/pages/` — one file per page
- `site/public/assets/` — shared `szs.css`, `szs.js`, logos
