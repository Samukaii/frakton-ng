import { FktColorPickerHSL } from '../models/fkt-color-picker-hsl';
import { FktColorPickerLocale } from '../models/fkt-color-picker-locale';

type ColorDescription = FktColorPickerLocale['ariaColorDescriptions'];
type ColorDescriptionKey = keyof FktColorPickerLocale['ariaColorDescriptions'];

type Threshold<T extends ColorDescriptionKey> = {
	max: number;
	label: keyof ColorDescription[T]
}

const hueThresholds: Threshold<'hue'>[] = [
	{max: 15, label: 'red'},
	{max: 30, label: 'redOrange'},
	{max: 45, label: 'orange'},
	{max: 60, label: 'yellowOrange'},
	{max: 72, label: 'yellow'},
	{max: 80, label: 'yellowLime'},
	{max: 100, label: 'limeGreen'},
	{max: 150, label: 'green'},
	{max: 180, label: 'cyanGreen'},
	{max: 195, label: 'cyan'},
	{max: 212, label: 'blueCyan'},
	{max: 235, label: 'blue'},
	{max: 260, label: 'bluePurple'},
	{max: 285, label: 'purple'},
	{max: 315, label: 'magenta'},
	{max: 326, label: 'pink'},
	{max: 345, label: 'redPink'},
	{max: 360, label: 'red'},
];

const saturationThresholds: Threshold<'saturation'>[] = [
	{max: 3, label: 'gray'},
	{max: 8, label: 'veryGray'},
	{max: 18, label: 'veryFaded'},
	{max: 35, label: 'faded'},
	{max: 60, label: 'slightlyFaded'},
	{max: 80, label: 'vibrant'},
	{max: 95, label: 'veryVibrant'},
	{max: 100, label: 'extremelyVibrant'}
];

const lightnessThresholds: Threshold<'lightness'>[] = [
	{max: 2, label: 'black'},
	{max: 6, label: 'veryDark'},
	{max: 15, label: 'dark'},
	{max: 35, label: 'mediumDark'},
	{max: 45, label: 'slightlyDark'},
	{max: 65, label: 'medium'},
	{max: 75, label: 'slightlyPale'},
	{max: 80, label: 'pale'},
	{max: 95, label: 'veryPale'},
	{max: 98, label: 'extremelyPale'},
	{max: 100, label: 'white'}
];

const alphaThresholds: Threshold<'alpha'>[] = [
	{max: 1, label: 'transparent'},
	{max: 15, label: 'almostInvisible'},
	{max: 35, label: 'veryTransparent'},
	{max: 45, label: 'highTransparent'},
	{max: 55, label: 'mediumTransparent'},
	{max: 75, label: 'slightlyTransparent'},
	{max: 100, label: 'almostOpaque'},
	{max: 101, label: 'opaque'}
];

const getThresholdLabel = <Key extends ColorDescriptionKey>(value: number, thresholds: Threshold<Key>[]) => {
	for (const t of thresholds) {
		if (value <= t.max) return t.label;
	}
	return thresholds[thresholds.length - 1].label;
}

const perceivedSaturation = (saturation: number, luminosity: number) => {
	const x = luminosity / 100;
	return saturation * (1 - 0.6 * ((x - 0.5) ** 2) * 5);
}

export const getColorDescription = (
	color: FktColorPickerHSL,
	locale: FktColorPickerLocale
) => {
	const hueLabel = getThresholdLabel(color.hue, hueThresholds);
	const satLabel = getThresholdLabel(perceivedSaturation(color.saturation, color.lightness), saturationThresholds);
	const lightLabel = getThresholdLabel(color.lightness, lightnessThresholds);
	const alphaLabel = getThresholdLabel(color.alpha ?? 100, alphaThresholds);

	const {hue, lightness, saturation, alpha} = locale.ariaColorDescriptions;

	const desc: { hue?: string; saturation?: string; lightness?: string; alpha?: string } = {
		hue: hue[hueLabel],
		saturation: saturation[satLabel],
		lightness: lightness[lightLabel],
		alpha: alpha[alphaLabel],
	};

	if(satLabel === 'faded' && lightLabel !== "medium") {
		desc.hue = hue[hueLabel];
		desc.lightness = saturation[satLabel];
		desc.saturation = lightness[lightLabel];
	}


	if(lightLabel === 'extremelyPale') {
		desc.hue = lightness['white'];
		desc.saturation = locale.ariaColorDescriptions.phrases.slightlyTintedWithHue.replace('{{hue}}', hue[hueLabel]);
		delete desc.lightness;
	}

	if(satLabel === 'gray') {
		delete desc.saturation;
		desc.hue = saturation[satLabel]
		desc.lightness = lightness[lightLabel]
	}

	if (lightLabel === 'black' || lightLabel === 'white') {
		desc.hue = lightness[lightLabel]
		delete desc.lightness;
		delete desc.saturation;
	}

	if((lightLabel === 'dark' || lightLabel === 'veryDark') && satLabel !== "gray")
		delete desc.saturation;

	if(lightLabel === "medium")
		delete desc.lightness;

	if (color.alpha === 100)
		delete desc.alpha;

	if(alphaLabel === 'transparent') {
		delete desc.lightness;
		delete desc.hue;
		delete desc.saturation;
	}

	return [
		desc.hue,
		desc.lightness,
		desc.saturation,
		desc.alpha,
	].filter(Boolean).join(' ');
};
