export const isObjectLiteral = (value: unknown): value is Record<string, unknown> => {
	return (
		typeof value === 'object' &&
		value !== null &&
		Object.getPrototypeOf(value) === Object.prototype
	);
};
