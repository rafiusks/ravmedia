import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [tailwind()],
	output: "static",
	build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	vite: {
		build: {
			cssMinify: "lightningcss",
			cssCodeSplit: false,
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: true,
				},
			},
		},
	},
	site: "http://localhost:4321", // Add your site URL here
});
