/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			md: "768px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			gray: {
				50: "#f9fafb",
				100: "#f3f4f6",
				600: "#4b5563",
				900: "#111827",
			},
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
				950: "#082f49",
			},
			accent: {
				50: "#f5f3ff",
				100: "#ede9fe",
				200: "#ddd6fe",
				300: "#c4b5fd",
				400: "#a78bfa",
				500: "#8b5cf6",
				600: "#7c3aed",
				700: "#6d28d9",
				800: "#5b21b6",
				900: "#4c1d95",
				950: "#2e1065",
			},
		},
		fontFamily: {
			display: ["var(--font-display)", "system-ui", "sans-serif"],
		},
		fontSize: {
			xs: ["0.75rem", "1rem"],
			sm: ["0.875rem", "1.25rem"],
			lg: ["1.125rem", "1.75rem"],
		},
	},
	corePlugins: {
		container: true,
		animation: false,
		keyframes: false,
		float: false,
		clear: false,
		skew: false,
		scale: false,
		rotate: false,
	},
	plugins: [],
	// Enable additional optimizations
	future: {
		hoverOnlyWhenSupported: true,
	},
};
