/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#bae6fd",
					300: "#7dd3fc",
					400: "#38bdf8",
					500: "#0ea5e9",
					600: "#0284c7",
					700: "#0369a1",
					800: "#075985",
					900: "#0c4a6e",
				},
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
				display: ["Manrope", "system-ui", "-apple-system", "sans-serif"],
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
