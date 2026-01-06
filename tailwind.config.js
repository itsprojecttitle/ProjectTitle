/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./index.html",
		"./index.js",
	],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: "#ffe353",
			}
		},
	},
	plugins: [],
}

