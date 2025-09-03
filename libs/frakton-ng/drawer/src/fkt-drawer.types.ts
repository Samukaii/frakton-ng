export const fktSidebarModes = ['overlay', 'push'] as const;

export type FktDrawerTypes = typeof fktSidebarModes[number];
