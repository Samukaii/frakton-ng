export const lightenColor = (hex: string, factor: number = 0.2) => {
	if (!/^#/.test(hex)) hex = "#" + hex;
	if (hex.length === 4) {
		hex = "#" + [...hex.slice(1)].map(x => x + x).join('');
	}

	let [r, g, b] = [
		parseInt(hex.substring(1,3), 16),
		parseInt(hex.substring(3,5), 16),
		parseInt(hex.substring(5,7), 16),
	];

	r = Math.round(r + (255 - r) * factor);
	g = Math.round(g + (255 - g) * factor);
	b = Math.round(b + (255 - b) * factor);

	r = Math.min(255, Math.max(0, r));
	g = Math.min(255, Math.max(0, g));
	b = Math.min(255, Math.max(0, b));

	const toHex = (c: number) => c.toString(16).padStart(2, '0');
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
