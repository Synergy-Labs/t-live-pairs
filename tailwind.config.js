/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				10: "10px",
				12: "12px",
				14: "14px",
				25: "25px",
				28: "28px",
			},
			fontFamily: {
				// inter is the default font, used for most text
				sans: ["var(--font-inter)", "sans-serif"],
				inter: ["var(--font-inter)", "sans-serif"],
				// lexend is used for all numbers
				number: ["var(--font-ibm-plex-mono)", "monospace"],
				lexend: ["var(--font-lexend)", "sans-serif"],
			},
			screens: {
				"3xl": "1800px",
			},

			borderRadius: {
				box: "8px",
			},
			colors: {
				neutral: "#06080B",
				gray: "#696F8C",
				blue: "#0BE0FD",
				red: "#D60F57",
				secondary: "#474D66",
				black: "#000000",
				green: "#01C38E",
				purple: "#7E0FD6",
				// NEW
				// ---------
				// Color used for the background of UI elements
				foreground: "#080B0F",
				// Background of the entire app, darker than foreground
				background: "#05070A",
				// Used for border colors
				outline: "#202937",
				// Used for hover border colors
				highlight: "#445876",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
