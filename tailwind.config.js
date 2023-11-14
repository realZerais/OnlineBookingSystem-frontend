/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				babak: ['Babak One', 'sans']
			},
			colors: {
				neon: '#4DF100',
				neonHover: 'rgba(0, 180, 0)',
				navColor: '#303032',
				buttonColorAccent: '#91f263',
				buttonColor: "#4DF100",

				lightBG: "#fffffe",

				main: "#004643",
				mainHeadline: "#fffffe",
				mainParagraph: "#e8e4e6",

				secondary: "#abd1c6",
				secondaryHeadline: "#001e1d",
				secondaryParagraph: "#0f3433",
				
				accent: "#f9bc60",
				accentParagrah: "#0f3433",
				
				


			}
		}
	},
	plugins: []
};

//https://www.happyhues.co/palettes/10