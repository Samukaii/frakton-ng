import { hexFormatter } from './formatters/hex-formatter';
import { hslFormatter } from './formatters/hsl-formatter';
import { rgbFormatter } from './formatters/rgb-formatter';

export const fktColorFormatters = {
	hex: hexFormatter,
	hsl: hslFormatter,
	rgb: rgbFormatter,
}
