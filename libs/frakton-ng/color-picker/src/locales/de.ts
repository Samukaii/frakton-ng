export default {
	controls: {
		ariaLegend: "Verwenden Sie die Pfeiltasten nach oben und unten, um den Wert zu ändern",
		formatType: "Farbformat",
		opacity: "Deckkraft",
		hsl: {
			hue: "Farbton",
			saturation: "Sättigung",
			lightness: "Helligkeit",
		},
		hsv: {
			hue: "Farbton",
			saturation: "Sättigung",
			brightness: "Helligkeit",
		},
		rgb: {
			red: "Rot",
			green: "Grün",
			blue: "Blau",
		},
		hex: {
			code: "Hexadezimalcode"
		}
	},
	actions: {
		copyColorCode: "Farbcode kopieren"
	},
	preview: {
		color: "Farbe:",
		textualDescription: "Textbeschreibung:",
		code: "Code:",
	},
	ariaColorDescriptions: {
		hue: {
			red: 'rot',
			redOrange: 'rot-orange',
			orange: 'orange',
			yellowOrange: 'gelb-orange',
			yellow: 'gelb',
			yellowLime: 'gelb-limette',
			limeGreen: 'limettengrün',
			green: 'grün',
			cyanGreen: 'cyan-grün',
			cyan: 'cyan',
			blueCyan: 'blau-cyan',
			blue: 'blau',
			bluePurple: 'blau-violett',
			purple: 'violett',
			magenta: 'magenta',
			redPink: 'rot-pink',
			pink: 'pink'
		},
		saturation: {
			gray: 'grau',
			veryGray: 'sehr grau',
			veryFaded: 'stark entsättigt',
			faded: 'entsättigt',
			slightlyFaded: 'leicht entsättigt',
			vibrant: 'kräftig',
			veryVibrant: 'sehr kräftig',
			extremelyVibrant: 'extrem kräftig'
		},
		lightness: {
			black: 'schwarz',
			veryDark: 'sehr dunkel',
			dark: 'dunkel',
			mediumDark: 'etwas dunkel',
			slightlyDark: 'leicht abgedunkelt',
			medium: '',
			slightlyPale: 'leicht blass',
			pale: 'blass',
			veryPale: 'sehr blass',
			extremelyPale: 'extrem blass',
			white: 'weiß'
		},
		alpha: {
			transparent: 'transparent',
			almostInvisible: 'fast unsichtbar',
			veryTransparent: 'sehr transparent',
			highTransparent: 'hohe Transparenz',
			mediumTransparent: 'mittlere Transparenz',
			slightlyTransparent: 'leicht transparent',
			almostOpaque: 'fast deckend',
			opaque: 'deckend'
		},
		phrases: {
			slightlyTintedWithHue: 'mit einem Hauch von {{hue}}',
		}
	}
};
