# SubZeroSec

Marketing site for SubZeroSec, an offensive-security firm. "Before Zero. Beyond Breach."

Live:
- Original: https://subhanumer.github.io/subzerosec-mockups/stack/
- Pro (enterprise, quieter) variant: https://subhanumer.github.io/subzerosec-mockups/stack-pro/

Both build from the same Astro source in `site/`. The Pro variant is identical in
structure but links an override stylesheet (`szs-pro.css`) for a cooler steel palette,
flatter surfaces and less motion. `npm run build` builds the original, `npm run build:pro`
the Pro variant, `npm run build:all` both.

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
