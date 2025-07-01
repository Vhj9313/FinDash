import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
export default {
  base: './', // <-- IMPORTANT for Vercel deployments
  plugins: [svelte()],
  server: {
    // hmr: true,  // not needed unless customizing HMR
  },
  build: {
    outDir: 'dist'
  }
};
