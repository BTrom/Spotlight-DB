// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

<<<<<<< HEAD
import sitemap from '@astrojs/sitemap';

=======
>>>>>>> origin/main
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
      allowedHosts: ['spotlight-db.com', 'www.spotlight-db.com']
  },

<<<<<<< HEAD
  integrations: [react(), sitemap()],

  adapter: node({
    mode: 'standalone'
  }),

  // Sitemap Config
  site: "https://spotlight-db.com"
=======
  integrations: [react()],

  adapter: node({
    mode: 'standalone'
  })
>>>>>>> origin/main
});