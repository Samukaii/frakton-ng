export const fktTagColors = ['success', 'danger', 'info', 'warning', 'accent'] as const;
export const fktTagVariants = ['opaque', 'faded'] as const;

export type FktTagColor = typeof fktTagColors[number];
export type FktTagVariant = typeof fktTagVariants[number];
