export const fktProgressBarSizes = ['xs', 'sm', 'md', 'lg'] as const;
export type FktProgressBarSize = typeof fktProgressBarSizes[number];

export const fktProgressBarVariants = ['default', 'striped', 'animated'] as const;
export type FktProgressBarVariant = typeof fktProgressBarVariants[number];

export const fktProgressBarShapes = ['rounded', 'square'] as const;
export type FktProgressBarShape = typeof fktProgressBarShapes[number];