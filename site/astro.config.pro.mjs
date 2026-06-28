// @ts-check
import { defineConfig } from 'astro/config';

// The Pro build is identical to the base build except for output path; the
// build:pro script post-processes the HTML to link szs-pro.css.

// "Pro" enterprise variant: same source, different skin (szs-pro.css), built to
// ../stack-pro so the original /stack site is never touched.
// Selected via PUBLIC_VARIANT=pro (read in Base.astro).
export default defineConfig({
  site: 'https://subhanumer.github.io',
  base: '/subzerosec-mockups/stack-pro',
  outDir: '../stack-pro',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
    assets: '_astro',
  },
});
