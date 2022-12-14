import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), astroImageTools, compress()]
});