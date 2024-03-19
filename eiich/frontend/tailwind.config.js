/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				magentaPink: "#f92bb1",
				"electric-violet": {
					50: "#faf4ff",
					100: "#f3e5ff",
					200: "#e9d0ff",
					300: "#d8abff",
					400: "#c075ff",
					500: "#a841ff",
					600: "#941cff",
					700: "#820de7",
					800: "#6d10b9",
					900: "#5a0f94",
					950: "#3c006f",
				},
				zumthor: {
					50: "#eff4fe",
					100: "#e8f0fe",
					200: "#c9dafc",
					300: "#a9c1f8",
					400: "#869ff3",
					500: "#697eeb",
					600: "#4d59de",
					700: "#3e46c4",
					800: "#353d9e",
					900: "#31397e",
					950: "#1d2049",
				},
				vividIndigo: "#460def",
				skyBlue: "#00bdff",
				babyBlue: "#f3f3ff",
			},
		},
	},
	plugins: [],
}

