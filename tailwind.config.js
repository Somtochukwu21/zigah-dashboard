/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: { primary: "#F3F5FE" },
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
