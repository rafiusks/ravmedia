/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				display: ["Manrope", "system-ui", "sans-serif"],
			},
			fontSize: {
				"display-xl": [
					"clamp(3.5rem, 5vw, 4.5rem)",
					{ lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
				],
				"display-lg": [
					"clamp(2.5rem, 4vw, 3.75rem)",
					{ lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
				],
				display: [
					"clamp(2rem, 3vw, 2.5rem)",
					{ lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
				],
				heading: [
					"clamp(1.5rem, 2vw, 1.875rem)",
					{ lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" },
				],
				subheading: [
					"clamp(1.25rem, 1.5vw, 1.5rem)",
					{ lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" },
				],
				"body-lg": ["1.125rem", { lineHeight: "1.75", fontWeight: "400" }],
				body: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
				small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
				tiny: ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
			},
		},
	},
	plugins: [],
};
