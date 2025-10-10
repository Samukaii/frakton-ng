export const getContrastTextColor = (hexColor: string, darkColor = '#000000FF', lightColor = "#FFFFFFFF") => {
	hexColor = hexColor.replace(/^#/, '');

	if (hexColor.length === 3) {
		hexColor = hexColor.split('').map(x => x + x).join('');
	}

	const r = parseInt(hexColor.substring(0, 2), 16);
	const g = parseInt(hexColor.substring(2, 4), 16);
	const b = parseInt(hexColor.substring(4, 6), 16);

	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	return luminance > 0.5 ? darkColor : lightColor;
};
