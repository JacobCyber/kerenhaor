// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	site: "https://kerenhaohr.org/",
	base: "/",
	output: "static",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "he"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: "astro",
			}),
		],
	},
	adapter: netlify(),
});
