export const kebabToCamel = (value: string) => {
    return value.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};

export const kebabToPascalCase = (value: string) => {
    return value
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
};

export const pascalToKebab = (value: string) => {
    return value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
};

export const escapeTemplateText = (value: string) => {
    return value.replaceAll('`', '\\`').replace(/\r?\n/g, '\\n').replaceAll(`$`, '\\$');
};

export const stripInlineMarkdown = (value: string) => {
    return value
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/`(.*?)`/g, '$1')
        .replace(/~~(.*?)~~/g, '$1');
};
