// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pipxlabs.github.io',
  build: {
    // @ts-ignore
    outDir: './docs',
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },
});