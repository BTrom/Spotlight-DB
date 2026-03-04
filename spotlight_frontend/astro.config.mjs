// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
      allowedHosts: ['spotlight-db.com', 'www.spotlight-db.com']
  },

  integrations: [react(), sitemap()],

  adapter: node({
    mode: 'standalone'
  }),

  // Sitemap Config
  site: "https://spotlight-db.com"
});