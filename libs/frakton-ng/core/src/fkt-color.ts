export const fktColors = ['primary', 'accent', 'danger', 'warning', 'success', 'info'] as const;
export const fktLabelColors = ['auto'] as const;

export type FktColor = typeof fktColors[number] | (string & {});
export type FktLabelColor = (typeof fktLabelColors[number]) | (string & {});
