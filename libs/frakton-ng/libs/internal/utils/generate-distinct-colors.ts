export const generateDistinctColors = (count: number): string[] => {
	const saturation = 70;
	const lightness = 60;
	const step = 360 / count;

	return Array.from({ length: count }, (_, i) => {
		const hue = Math.floor((i * step + Math.random() * step * 0.3) % 360);
		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	});
};
