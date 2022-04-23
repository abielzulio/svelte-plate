import adapter from '@sveltejs/adapter-vercel';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({
			configPath: "windi.config.js"
		})
	],
	kit: {
		adapter: adapter({ edge: true }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	prerender: {
		crawl: true,
		enabled: true,
		onError: 'fail'
	}
};

export default config;
