export const fktGeometryPositions = [
	'top-start',
	'top-center',
	'top-end',
	'top-start-corner',
	'top-end-corner',

	'bottom-start',
	'bottom-center',
	'bottom-end',
	'bottom-start-corner',
	'bottom-end-corner',

	'start-top',
	'start-center',
	'start-bottom',

	'end-top',
	'end-center',
	'end-bottom',
] as const;

export type FktGeometryPosition = (typeof fktGeometryPositions)[number];

export type FktGeometryDirection = 'ltr' | 'rtl';
