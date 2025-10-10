import { FktColorPickerHSL } from "../../../color-picker/src/models/fkt-color-picker-hsl";
import { FktColorPickerHSV } from "../../../color-picker/src/models/fkt-color-picker-hsv";
import { partiallyRoundDecimal } from '../../../forms/src/formatters/number-formatter';

const fromHsv = (hsv: FktColorPickerHSV): FktColorPickerHSL => {
	const hue = hsv.hue;
	const saturationHSV = hsv.saturation / 100;
	const value = hsv.value / 100;
	const alpha = hsv.alpha;

	const lightness = value * (1 - saturationHSV / 2);
	let saturationHSL = 0;

	if (lightness !== 0 && lightness !== 1) {
		saturationHSL = (value - lightness) / Math.min(lightness, 1 - lightness);
	}

	const result = {
		hue: hue,
		saturation: saturationHSL * 100,
		lightness: lightness * 100,
		alpha: alpha
	};

	result.hue = partiallyRoundDecimal(result.hue, 3);
	result.saturation = partiallyRoundDecimal(result.saturation, 3);
	result.lightness = partiallyRoundDecimal(result.lightness, 3);
	result.alpha = partiallyRoundDecimal(result.alpha, 3);

	return result;
};

const toHsv = (hsl: FktColorPickerHSL): FktColorPickerHSV => {
	const hue = hsl.hue;
	const saturationHSL = hsl.saturation / 100;
	const lightness = hsl.lightness / 100;
	const alpha = hsl.alpha;

	const value = lightness + saturationHSL * Math.min(lightness, 1 - lightness);
	let saturationHSV = 0;
	if (value !== 0) {
		saturationHSV = 2 * (1 - lightness / value);
	}

	const result = {
		hue: hue,
		saturation: saturationHSV * 100,
		value: value * 100,
		alpha: alpha
	}

	result.hue = partiallyRoundDecimal(result.hue, 3);
	result.saturation = partiallyRoundDecimal(result.saturation, 3);
	result.value = partiallyRoundDecimal(result.value, 3);
	result.alpha = partiallyRoundDecimal(result.alpha, 3);

	return result;
};

const parse = (input: string): FktColorPickerHSL | null => {
	let cleaned = input.trim()
		.replace(/^hsla?\(/i, '')
		.replace(/\)$/i, '')
		.replace(/%/g, '');
	const parts = cleaned.split(',').map(p => p.trim());
	if (parts.length !== 3 && parts.length !== 4) return null;
	const [hue, saturation, lightness, alpha] = parts.map(Number);
	if (
		Number.isNaN(hue) || hue < 0 || hue > 360 ||
		Number.isNaN(saturation) || saturation < 0 || saturation > 100 ||
		Number.isNaN(lightness) || lightness < 0 || lightness > 100
	) return null;
	let alphaValue = 100;
	if (parts.length === 4) {
		if (Number.isNaN(alpha) || alpha < 0 || alpha > 100) return null;
		alphaValue = alpha;
	}


	const result = {
		hue,
		saturation,
		lightness,
		alpha: alphaValue
	}


	result.hue = partiallyRoundDecimal(result.hue, 3);
	result.saturation = partiallyRoundDecimal(result.saturation, 3);
	result.lightness = partiallyRoundDecimal(result.lightness, 3);
	result.alpha = partiallyRoundDecimal(result.alpha, 3);

	return result;
};

const format = (
	hsv: FktColorPickerHSV,
	disableAlphaChannel: boolean
): { value: string; ariaValue: string } => {

	let {hue, saturation, lightness, alpha} = fromHsv(hsv);

	hue = Math.round(hue);
	saturation = Math.round(saturation);
	lightness = Math.round(lightness);
	alpha = Math.round(alpha);

	let value: string;
	let ariaValue: string;

	if (disableAlphaChannel || alpha === 100) {
		value = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		ariaValue = `H S L: ${hue}º, ${saturation}%, ${lightness}%`;
	} else {
		value = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`;
		ariaValue = `H S L A: ${hue}º, ${saturation}%, ${lightness}%, ${alpha}%`;
	}

	return {value, ariaValue};
};


export const hslFormatter = {
	fromHsv,
	toHsv,
	parse,
	format,
}
