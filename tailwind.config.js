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
				navColor: '#303032',
				buttonColorAccent: '#91f263'
			}
		}
	},
	plugins: []
};
