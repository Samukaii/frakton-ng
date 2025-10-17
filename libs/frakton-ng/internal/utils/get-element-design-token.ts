import { getElementDesignTokens } from './get-element-design-tokens';

export const getElementDesignToken = (element: HTMLElement, token: string, fallback?: string) => {
	const tokens = getElementDesignTokens(element, token);

	return tokens[token] ?? (!!fallback ? (tokens[fallback] ?? null) : null);
}
