export function toKebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.toLowerCase()
		.replace(/^-+|-+$/g, '')
		.replace(/--+/g, '-');
}
