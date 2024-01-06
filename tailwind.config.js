/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				leftbottom: '-10px 10px #f9bc60'
			},
			fontFamily: {
				bakbak: ['Bakbak One']
			},
			colors: {
				neon: '#4DF100',
				neonHover: 'rgba(0, 180, 0)',
				navColor: '#303032',
				buttonColorAccent: '#91f263',
				buttonColor: '#4DF100',

				lightBG: '#fffffe',

				main: '#014447',
				mainHeadline: '#fffffe',
				mainParagraph: '#e8e4e6',
				dashboardBody: '#bbbbbd',

				secondary: '#abd1c6',
				secondaryHeadline: '#001e1d',
				secondaryParagraph: '#0f3433',

				accent: '#f9bc60',
				accentParagrah: '#0f3433'
			},
			letterSpacing: {
				tightest: '-.010em'
			}
		}
	},
	plugins: []
};

//https://www.happyhues.co/palettes/10
