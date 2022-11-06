/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			glitter: "hsl(299 56% 68%)",
			starlight: "hsl(183 66% 70%)",
			black: "hsl(210 12% 12%)"
		}
	},
	plugins: [],
}
