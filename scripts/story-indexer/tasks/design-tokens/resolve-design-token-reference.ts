const DESIGN_TOKEN_NAME_PATTERN = /--[\w-]+/g;

export const resolveDesignTokenReference = (
    reference: string,
    globalTokens: Record<string, string>
) => {
    return reference.replace(
        DESIGN_TOKEN_NAME_PATTERN,
        (tokenName) => globalTokens[tokenName] ?? tokenName
    );
};
