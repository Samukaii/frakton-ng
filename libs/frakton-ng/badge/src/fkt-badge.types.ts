export const fktBadgeColors = ['success', 'danger', 'info', 'warning', 'accent'] as const;
export const fktBadgeVariants = ['opaque', 'faded'] as const;

export type FktBadgeColor = typeof fktBadgeColors[number];
export type FktBadgeVariant = typeof fktBadgeVariants[number];
