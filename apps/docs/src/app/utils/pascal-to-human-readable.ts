export const pascalToHumanReadable = (input: string): string  => {
	const result = input
		.replace(/([A-Z])/g, ' $1')
		.replace(/^ /, '')
		.replace(/\s+/g, ' ')
		.trim();

	return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}
