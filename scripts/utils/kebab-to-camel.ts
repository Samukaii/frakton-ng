export function kebabToCamel(str: string) {
	return str.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
}
