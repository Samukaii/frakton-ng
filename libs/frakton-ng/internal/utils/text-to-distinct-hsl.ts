export const textToDistinctHsl = (
	str: string,
	seed = 'SEED',
	colorSteps = 12,
): string => {
	const hash = [...str, ...seed].reduce(
		(acc, char) => char.charCodeAt(0) + ((acc << 5) - acc),
		0,
	);
	const hueStep = 360 / colorSteps;
	const hue = (Math.abs(hash) % colorSteps) * hueStep;

	return `hsl(${hue}, 85%, 50%)`;
};
