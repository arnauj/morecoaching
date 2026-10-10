// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH permiten publicar en un subdirectorio (GitHub Pages: /morecoaching).
// Por defecto: dominio propio en la raíz.
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://morecoaching.net',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
