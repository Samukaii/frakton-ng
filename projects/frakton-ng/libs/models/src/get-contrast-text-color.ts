import { hexToRgb } from './hex-to-rgb';

export const getContrastTextColor = (hex: string): 'black' | 'white' => {
	const { r, g, b } = hexToRgb(hex);

	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	return brightness > 128 ? 'black' : 'white';
}
