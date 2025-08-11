export const fktSidebarModes = ['overlay', 'push'] as const;

export type FktSidebarTypes = typeof fktSidebarModes[number];
