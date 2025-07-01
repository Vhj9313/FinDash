import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
export default {
  base: './', // critical for correct asset loading
  plugins: [svelte()],
  build: {
    outDir: 'dist'
  }
};
