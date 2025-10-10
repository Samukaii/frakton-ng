import { getElementDesignTokens } from './get-element-design-tokens';

export const getElementDesignToken = (element: HTMLElement, token: string) => {
	const tokens = getElementDesignTokens(element, token);

	return tokens[token];
}
