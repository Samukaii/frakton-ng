export const normalizeSearchText = (value: unknown): string => {
    return String(value ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/\p{P}/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
};
