// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Production URL: used for the sitemap, canonical, and Open Graph URLs.
	// Keep in sync with the Sitemap line in public/robots.txt and the --cname
	// flag in the package.json deploy script.
	// Deployed to GitHub Pages on a custom domain, so the site is served from
	// the root and no `base` path is needed.
	site: 'https://sebastianwellschavez.com',
	integrations: [sitemap()],
});
