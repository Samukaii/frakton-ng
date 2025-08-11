export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
	hex = hex.replace('#', '');

	if (hex.length === 3) {
		hex = hex.split('').map(c => c + c).join('');
	}

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	return { r, g, b };
};
