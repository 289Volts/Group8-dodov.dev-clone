/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,css,js}"],
	theme: {
		screens: {
			normal: "375px",
			tab: "768px",
		},
		extend: {
			colors: {
				body: "#1e1f1c",
				editor: "#272822",
				navtext: "#ccccc7",
				inactivenav: "#34352f",
				bodytext: "#f8f8f2",
				othertext: "#cfcfc2",
				number: "#90908a",
				numberhover: "#c2c2bf",
				highlight: "#c2c2bf",
				accent: "#a6e22e",
				accenthover: "#4e94ce",
				code1: "#3E3D32",
				code2: "#22231e",
				code3: "#75725f",
				dashed: "#757260",
			},
			fontFamily: {
				mono: ["Fira Code", "monospace"],
			},
		},
		plugins: [],
	},
};
