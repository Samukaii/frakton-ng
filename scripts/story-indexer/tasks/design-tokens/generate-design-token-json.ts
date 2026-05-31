import { DesignToken } from './design-token.models';

export const dedupeDesignTokens = (tokens: DesignToken[]) => {
    const cleanedTokens: DesignToken[] = [];

    tokens.forEach((token) => {
        if (cleanedTokens.find((cleanedToken) => cleanedToken.name === token.name)) {
            return;
        }

        cleanedTokens.push(token);
    });

    return cleanedTokens;
};
