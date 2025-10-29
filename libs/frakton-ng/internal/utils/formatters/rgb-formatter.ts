import { FktColorPickerHSV, FktColorPickerRGB } from "frakton-ng/internal/types";

const fromHsv = (
	hsv: FktColorPickerHSV
): FktColorPickerRGB => {
	const hue = hsv.hue;
	const saturation = hsv.saturation / 100;
	const value = hsv.value / 100;
	const alpha = hsv.alpha;

	const chroma = value * saturation;
	const hueSection = (hue / 60) % 6;
	const intermediate = chroma * (1 - Math.abs((hueSection % 2) - 1));
	const match = value - chroma;

	let redComponent: number;
	let greenComponent: number;
	let blueComponent: number;

	if (hue >= 0 && hue < 60) {
		redComponent = chroma;
		greenComponent = intermediate;
		blueComponent = 0;
	} else if (hue >= 60 && hue < 120) {
		redComponent = intermediate;
		greenComponent = chroma;
		blueComponent = 0;
	} else if (hue >= 120 && hue < 180) {
		redComponent = 0;
		greenComponent = chroma;
		blueComponent = intermediate;
	} else if (hue >= 180 && hue < 240) {
		redComponent = 0;
		greenComponent = intermediate;
		blueComponent = chroma;
	} else if (hue >= 240 && hue < 300) {
		redComponent = intermediate;
		greenComponent = 0;
		blueComponent = chroma;
	} else {
		redComponent = chroma;
		greenComponent = 0;
		blueComponent = intermediate;
	}

	return {
		red: (redComponent + match) * 255,
		green: (greenComponent + match) * 255,
		blue: (blueComponent + match) * 255,
		alpha: alpha
	};
};

const toHsv = (rgb: FktColorPickerRGB): FktColorPickerHSV => {
	const red = rgb.red / 255;
	const green = rgb.green / 255;
	const blue = rgb.blue / 255;
	const alpha = rgb.alpha;

	const max = Math.max(red, green, blue);
	const min = Math.min(red, green, blue);
	const delta = max - min;

	let hue = 0;
	if (delta !== 0) {
		if (max === red) {
			hue = ((green - blue) / delta) % 6;
		} else if (max === green) {
			hue = (blue - red) / delta + 2;
		} else {
			hue = (red - green) / delta + 4;
		}
		hue *= 60;
		if (hue < 0) hue += 360;
	}

	let saturation = 0;
	if (max !== 0) {
		saturation = delta / max;
	}

	return {
		hue: hue,
		saturation: saturation * 100,
		value: max * 100,
		alpha: alpha
	};
};

const parse = (input: string): FktColorPickerRGB | null => {
	const cleaned = input.trim()
		.replace(/^rgba?\(/i, '')
		.replace(/\)$/i, '');
	const parts = cleaned.split(',').map(p => p.trim());
	if (parts.length !== 3 && parts.length !== 4) return null;
	const [red, green, blue, alpha] = parts.map(Number);
	if (
		Number.isNaN(red) || red < 0 || red > 255 ||
		Number.isNaN(green) || green < 0 || green > 255 ||
		Number.isNaN(blue) || blue < 0 || blue > 255
	) return null;
	let alphaValue = 100;
	if (parts.length === 4) {
		if (Number.isNaN(alpha) || alpha < 0 || alpha > 100) return null;
		alphaValue = alpha;
	}
	return {red, green, blue, alpha: alphaValue};
};

const format = (hsv: FktColorPickerHSV, disableAlphaChannel: boolean) => {
	let {red, green, blue, alpha} = fromHsv(hsv);

	red = Math.round(red);
	green = Math.round(green);
	blue = Math.round(blue);
	alpha = Math.round(alpha);

	let value = `rgba(${red}, ${green}, ${blue}, ${alpha}%)`;
	let ariaValue = `R G B A: ${red}, ${green}, ${blue}, ${alpha}%`;

	if (disableAlphaChannel || alpha === 100) {
		value = `rgb(${red}, ${green}, ${blue})`;
		ariaValue = `R G B: ${red}, ${green}, ${blue}`;
	}

	return {value, ariaValue};
};


export const rgbFormatter = {
	fromHsv,
	toHsv,
	parse,
	format,
}
