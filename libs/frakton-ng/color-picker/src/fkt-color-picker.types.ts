

export const fktColorPickerFormats = ['hsl', 'rgb', 'hex'] as const;

export type FktColorPickerFormat = (typeof fktColorPickerFormats)[number];
