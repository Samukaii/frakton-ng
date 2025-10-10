export default {
	controls: {
		ariaLegend: "Use the up and down arrows to change the value",
		formatType: "Color format",
		opacity: "Opacity",
		hsl: {
			hue: "Hue",
			saturation: "Saturation",
			lightness: "Lightness",
		},
		hsv: {
			hue: "Hue",
			saturation: "Saturation",
			brightness: "Brightness",
		},
		rgb: {
			red: "Red",
			green: "Green",
			blue: "Blue",
		},
		hex: {
			code: "Hexadecimal code"
		}
	},
	actions: {
		copyColorCode: "Copy color code"
	},
	preview: {
		color: "Color:",
		textualDescription: "Textual description:",
		code: "Code:",
	},
	ariaColorDescriptions: {
		hue: {
			red: 'red',
			redOrange: 'red-orange',
			orange: 'orange',
			yellowOrange: 'yellow-orange',
			yellow: 'yellow',
			yellowLime: 'yellow-lime',
			limeGreen: 'lime-green',
			green: 'green',
			cyanGreen: 'cyan-green',
			cyan: 'cyan',
			blueCyan: 'blue-cyan',
			blue: 'blue',
			bluePurple: 'blue-purple',
			purple: 'purple',
			magenta: 'magenta',
			redPink: 'red-pink',
			pink: 'pink'
		},
		saturation: {
			gray: 'gray',
			veryGray: 'very grayish',
			veryFaded: 'very faded',
			faded: 'faded',
			slightlyFaded: 'slightly faded',
			vibrant: 'vibrant',
			veryVibrant: 'very vibrant',
			extremelyVibrant: 'extremely vibrant'
		},
		lightness: {
			black: 'black',
			veryDark: 'very dark',
			dark: 'dark',
			mediumDark: 'medium dark',
			slightlyDark: 'slightly darkened',
			medium: '',
			slightlyPale: 'slightly pale',
			pale: 'pale',
			veryPale: 'very pale',
			extremelyPale: 'extremely pale',
			white: 'white'
		},
		alpha: {
			transparent: 'transparent',
			almostInvisible: 'almost invisible',
			veryTransparent: 'very high transparency',
			highTransparent: 'high transparency',
			mediumTransparent: 'medium transparency',
			slightlyTransparent: 'slightly transparent',
			almostOpaque: 'almost opaque',
			opaque: 'opaque'
		},
		phrases: {
			slightlyTintedWithHue: 'with slight traces of {{hue}}',
		}
	}
};
