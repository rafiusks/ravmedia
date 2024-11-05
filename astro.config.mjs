import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), prefetch()],
	prefetch: {
		prefetchAll: false,
		defaultStrategy: "tap",
		throttle: 3,
	},
});
