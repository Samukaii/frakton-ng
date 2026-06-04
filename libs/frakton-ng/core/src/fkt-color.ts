export const fktColors = ['primary', 'accent', 'danger', 'warning', 'success', 'info'] as const;
export const fktLabelColors = ['auto'] as const;

export type FktColor = 'primary' | 'accent' | 'danger' | 'warning' | 'success' | 'info' | (string & {});
export type FktLabelColor = 'auto' | (string & {});
