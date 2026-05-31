export const kebabToHumanReadable = (input: string): string => {
    const result = input
        .replace(/(-)/g, ' ')
        .replace(/^ /, '')
        .replace(/\s+/g, ' ')
        .trim();

    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};
