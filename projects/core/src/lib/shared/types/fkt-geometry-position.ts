export const fktGeometryPositions = [
	'top-start', 'top-center', 'top-end', 'top-left', 'top-right',

	'bottom-start', 'bottom-center', 'bottom-end', 'bottom-left', 'bottom-right',

	'left-start', 'left-center', 'left-end',

	'right-start', 'right-center', 'right-end'
] as const;

export type FktGeometryPosition = (typeof fktGeometryPositions)[number]
