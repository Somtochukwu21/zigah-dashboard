/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: { primary: "#031C418F", secondary: "#031C41", light: "#fff" },
			backgroundColor: { primary: "#F3F5FE", secondary: "#031C41" },
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
