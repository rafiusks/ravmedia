import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
	integrations: [tailwind(), react(), prefetch()],
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
	site: "https://ravmedia.dev", // Update with actual domain when ready
});
