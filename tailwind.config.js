/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"c-34": "#34C759",
				"c-1A": "#1A1A1A",
				"c-25": "#252525",
				"c-73": "#737373",
				"c-D9": "#D9D9D9",
				"c-30": "#303030",
				"c-A6": "#A6A6A6",
				"c-05": "rgba(255, 255, 255, 0.5);",
			},
		},
		screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "768px" },
			// => @media (max-width: 768px) { ... }

			sm: { max: "640px" },
			// => @media (max-width: 640px) { ... }

			mos: { max: "425px" },
			// => @media (max-width: 425px) { ... }

			mo: { max: "375px" },
			// => @media (max-width: 375px) { ... }
		},
		container: {
			padding: "10px",
			overflow: "hidden",
			center: true,
		},
	},
	plugins: [],
};
