/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#333333',
			currentColor: '#333333',
			'cinza': '#808080',
			'verde': '#65853a',
			'marrom': '#a56c55',
			'home': '#f7f6ed',
			'nude': '#efeedc',
			'tahiti': {
			  100: '#tahiti',
			  200: '#a5f3fc',
			  300: '#67e8f9',
			  400: '#22d3ee',
			  500: '#06b6d4',
			  600: '#0891b2',
			  700: '#0e7490',
			  800: '#155e75',
			  900: '#164e63',
			},
			// ...
		  },		
	},
	plugins: [],
}
