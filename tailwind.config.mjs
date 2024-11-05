/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html}"],
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
				600: "#0284c7",
				700: "#0369a1",
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
};
