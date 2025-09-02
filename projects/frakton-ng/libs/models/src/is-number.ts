export const isNumber = (value: unknown): value is number => {
	if (typeof value !== 'number' && typeof value !== 'string') return false;

	return !isNaN(+value);
};
