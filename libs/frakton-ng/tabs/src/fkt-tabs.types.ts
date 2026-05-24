export const fktTabsRenderModes = ['destructive', 'eager', 'lazy'] as const;
export type FktTabsRenderMode = (typeof fktTabsRenderModes)[number];
