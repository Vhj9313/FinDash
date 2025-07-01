import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: [vitePreprocess(), sveltePreprocess()],

  kit: {
    adapter: adapter(),

    paths: {
      base: '', // adjust if deployed in subfolder
    },

    prerender: {
      default: true,
    },
  },
};
