import fs from 'fs';
import { DesignToken, ParsedDesignTokenFile } from './design-token.models';

export const parseDesignTokenFile = (
    styleFilePath: string,
    globalTokens: Record<string, string>
): ParsedDesignTokenFile | null => {
    if (!fs.existsSync(styleFilePath)) {
        console.warn(`Warning: File not found: ${styleFilePath}`);
        return null;
    }

    const styleContent = fs.readFileSync(styleFilePath, 'utf8');
    const designTokensBlock = styleContent.match(
        /\/\/\s*<design-tokens>([\s\S]*?)\/\/\s*<\/design-tokens>/gm
    )?.[0];

    if (!designTokensBlock) return null;

    const blocks = designTokensBlock.match(/\/\*([\s\S]*?)\*\//gm);

    if (!blocks || blocks.length === 0) {
        console.warn(`Warning: No token blocks found in ${styleFilePath}`);
        return null;
    }

    let parsedBlocks = Array.from(blocks);
    let scopeName: string | null = null;

    if (parsedBlocks[0]?.includes('@scope')) {
        const scopeBlock = parsedBlocks[0];
        parsedBlocks = parsedBlocks.slice(1);

        const parsed = scopeBlock
            .replace('/*', '')
            .replace('*/', '')
            .split('\n')
            .map((rule) => rule.trim())
            .filter(Boolean)[0];

        const match = parsed.match(/@(\w*) (.*)/);
        scopeName = match?.[2] ?? null;
    }

    const tokens = parsedBlocks.flatMap((token) => {
        try {
            const [description, ...rules] = token
                .replace('/*', '')
                .replace('*/', '')
                .split('\n')
                .map((rule) => rule.trim())
                .filter(Boolean);

            if (!description) {
                console.warn(`Warning: Token missing description in ${styleFilePath}`);
                return [];
            }

            const object: Record<string, any> = { description };

            rules.forEach((rule) => {
                const match = rule.match(/@(\w*) (.*)/);
                if (!match) return;

                const [, name, value] = match;
                object[name] = value;
            });

            if (!object['name']) {
                console.warn(
                    `Warning: Token missing @name property in ${styleFilePath}: ${description}`
                );
                return [];
            }

            if (object['reference']) {
                object['defaultValue'] =
                    globalTokens[object['reference']] ?? object['reference'];
            }

            if (scopeName && !object['component']) {
                object['component'] = scopeName;
            }

            return [object as DesignToken];
        } catch (error) {
            console.error(
                `Error parsing token block in ${styleFilePath}:`,
                (error as Error).message
            );
            return [];
        }
    });

    return tokens.length > 0 ? { filePath: styleFilePath, scopeName, tokens } : null;
};
