export const fktButtonsListOrientations = ['vertical', 'horizontal'] as const;
export const fktButtonsListAlignments = ['start', 'space-between', 'space-evenly', 'space-around', 'end'] as const;

export type FktButtonsListOrientation = typeof fktButtonsListOrientations[number];
export type FktButtonsListAlignment = typeof fktButtonsListAlignments[number];
