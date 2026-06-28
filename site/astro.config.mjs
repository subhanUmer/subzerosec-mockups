// @ts-check
import { defineConfig } from 'astro/config';

// The final site is served from https://subhanumer.github.io/subzerosec-mockups/stack/
// Build output lands in ../stack so the legacy Pages deploy keeps serving it at that
// path, and the ~25 sibling mockups at the repo root stay untouched.
// build.format 'file' preserves the existing flat ".html" URLs (service-vapt.html, etc.).
export default defineConfig({
  site: 'https://subhanumer.github.io',
  base: '/subzerosec-mockups/stack',
  outDir: '../stack',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
    assets: '_astro',
  },
});
