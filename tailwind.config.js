/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			glitter: "hsl(299 56% 65%)",
			starlight: "hsl(183 70% 65%)",
			malachite: "hsl(150 64% 51%)",
			black: {
				0: "hsl(210 10% 14%)",
				1: "hsl(210 9% 18%)",
				2: "hsl(210 8% 22%)",
				3: "hsl(210 8% 26%)",
				4: "hsl(210 7% 30%)",
				5: "hsl(210 7% 34%)",
				6: "hsl(210 6% 39%)",
				7: "hsl(210 6% 45%)"
			},
			white: {
				0: "hsl(210 2% 100%)",
				1: "hsl(210 4% 98%)",
				2: "hsl(210 6% 95%)",
				3: "hsl(210 8% 92%)",
				4: "hsl(210 10% 88%)",
				5: "hsl(210 12% 82%)"
			}
		}
	},
	plugins: [],
}
