// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Production URL: used for the sitemap, canonical, and Open Graph URLs.
	// Keep in sync with the Sitemap line in public/robots.txt.
	site: 'https://sebastianwellschavez.com',
	integrations: [sitemap()],
});
