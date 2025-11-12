export function kebabToPascalCase(input: string) {
	return input
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join('');
}
