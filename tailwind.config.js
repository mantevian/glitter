/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
		colors: {
			glitter: "hsl(299 56% 65%)",
			starlight: "hsl(183 70% 65%)",
			malachite: "hsl(150 64% 51%)",
			black: {
				0: "hsl(210 10% 14%)",
				1: "hsl(210 9% 16%)",
				2: "hsl(210 8% 19%)",
				3: "hsl(210 8% 23%)",
				4: "hsl(210 7% 27%)",
				5: "hsl(210 7% 31%)",
				6: "hsl(210 6% 35%)",
				7: "hsl(210 6% 40%)"
			},
			white: {
				0: "hsl(210 2% 100%)",
				1: "hsl(210 4% 97%)",
				2: "hsl(210 6% 94%)",
				3: "hsl(210 8% 91%)",
				4: "hsl(210 10% 87%)",
				5: "hsl(210 12% 78%)",
				6: "hsl(210 14% 71%)",
				7: "hsl(210 16% 60%)"
			}
		}
	},
	plugins: [],
}
