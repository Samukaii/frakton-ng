export const getElementDesignTokens = (element: HTMLElement, filter = "--fkt-") => {
	const styles = getComputedStyle(element);

	const tokens: Record<string, string> = {}

	for (const key of styles) {
		if(!key.startsWith(filter))
			continue;

		tokens[key] = styles.getPropertyValue(key);
	}

	return tokens;
}
