export const fktBadgeColors = ['green', 'red', 'blue', 'orange'] as const;
export const fktBadgeVariants = ['opaque', 'faded'] as const;

export type FktBadgeColor = typeof fktBadgeColors[number];
export type FktBadgeVariant = typeof fktBadgeVariants[number];
