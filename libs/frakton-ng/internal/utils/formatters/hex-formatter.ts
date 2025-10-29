import { FktColorPickerHSV, FktColorPickerHEX } from "frakton-ng/internal/types";
import { rgbFormatter } from './rgb-formatter';

const fromHsv = (hsv: FktColorPickerHSV): FktColorPickerHEX => {
	const {red, green, blue, alpha} = rgbFormatter.fromHsv(hsv);

	return {
		red: Math.round(red).toString(16).padStart(2, '0').toUpperCase(),
		green: Math.round(green).toString(16).padStart(2, '0').toUpperCase(),
		blue: Math.round(blue).toString(16).padStart(2, '0').toUpperCase(),
		alpha: Math.round((alpha / 100) * 255).toString(16).padStart(2, '0').toUpperCase()
	};
};

const toHsv = (hex: FktColorPickerHEX): FktColorPickerHSV => {
	const red = parseInt(hex.red, 16);
	const green = parseInt(hex.green, 16);
	const blue = parseInt(hex.blue, 16);
	const alpha = hex.alpha ? parseInt(hex.alpha, 16) / 255 * 100 : 100;

	const maxChannel = Math.max(red, green, blue);
	const minChannel = Math.min(red, green, blue);
	const delta = maxChannel - minChannel;

	let hue = 0;
	if (delta !== 0) {
		if (maxChannel === red) {
			hue = 60 * (((green - blue) / delta) % 6);
		} else if (maxChannel === green) {
			hue = 60 * (((blue - red) / delta) + 2);
		} else {
			hue = 60 * (((red - green) / delta) + 4);
		}
	}
	if (hue < 0) hue += 360;

	const value = maxChannel / 255 * 100;
	const saturation = maxChannel === 0 ? 0 : (delta / maxChannel) * 100;

	return {
		hue,
		saturation,
		value,
		alpha
	};
};

const parse = (input: string): FktColorPickerHEX | null => {
	let hex = input.trim().replace(/^#/, '');
	if (![3, 4, 6, 8].includes(hex.length)) return null;

	if (hex.length === 3 || hex.length === 4) hex = hex.split('').map(c => c + c).join('');
	if (hex.length === 6) hex += 'ff';
	if (hex.length === 8) {
		const red = hex.slice(0, 2).toUpperCase();
		const green = hex.slice(2, 4).toUpperCase();
		const blue = hex.slice(4, 6).toUpperCase();
		const alpha = hex.slice(6, 8).toUpperCase();
		const isValid = /^[0-9A-F]{8}$/i.test(hex);
		return isValid ? {red, green, blue, alpha} : null;
	}
	return null;
};

const format = (hsv: FktColorPickerHSV, disableAlphaChannel: boolean) => {
	let {red, green, blue, alpha} = fromHsv(hsv);

	let value = `#${red}${green}${blue}${alpha}`;

	if (disableAlphaChannel || alpha === 'FF')
		value = value.slice(0, 7);

	return {value, ariaValue: value};
}

const expand = (hex: string) => {
	hex = hex.replace(/^#/, '').toLowerCase();

	if (hex.length === 3) hex = hex.split('').map(c => c + c).join('') + 'FF';
	if (hex.length === 4) hex = hex.split('').map(c => c + c).join('');

	if (hex.length === 6) hex += 'FF';

	if (hex.length !== 8) return null;

	return '#' + hex;
};

const extract = (hex: string): FktColorPickerHEX | null => {
	const expanded = expand(hex);

	if(!expanded) return null;

	const withoutHexCode = expanded.replace('#', '');

	const red = withoutHexCode.slice(0, 2).toUpperCase();
	const green = withoutHexCode.slice(2, 4).toUpperCase();
	const blue = withoutHexCode.slice(4, 6).toUpperCase();
	const alpha = withoutHexCode.slice(6, 8).toUpperCase();

	return {red, green, blue, alpha};
}

export const hexFormatter = {
	fromHsv,
	toHsv,
	parse,
	format,
	expand,
	extract
}
