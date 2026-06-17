import fs from 'fs';
import { IndexerContext } from '../../pipeline/indexer-context';

export const parseGlobalDesignTokens = (context: IndexerContext) => {
    const globalStylesPath = context.config.designTokens.globalStyles.styles;
    const themingStylesPath = context.config.designTokens.globalStyles.themes;

    if (!fs.existsSync(globalStylesPath)) {
        console.warn(`Warning: Global styles file not found at ${globalStylesPath}`);
        return {};
    }

    if (!fs.existsSync(themingStylesPath)) {
        console.warn(`Warning: Theming styles file not found at ${themingStylesPath}`);
        return {};
    }

    const globalStyles = fs.readFileSync(globalStylesPath, 'utf8');
    const themingStyles = fs.readFileSync(themingStylesPath, 'utf8');

    const globalTokens = globalStyles.match(/--.*:.*;/g) || [];
    const themingTokens = themingStyles.match(/--.*:.*;/g) || [];

    const result = [
        ...globalTokens.map((token) => {
            const [name, value] = token.split(':');
            return [name, value.trim().replace(';', '')];
        }),
        ...themingTokens.map((token) => {
            const [name, value] = token.split(':');
            return [name, value.trim().replace(';', '')];
        }),
    ];

    return Object.fromEntries(result) as Record<string, string>;
};
