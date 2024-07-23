import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://quotesync.app',
  integrations: [
    sitemap({
      filter: page => page !== 'https://quotesync.app/terms-and-conditions/' && page !== 'https://quotesync.app/privacy-policy/'
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});
