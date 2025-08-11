import { FktGeometryPosition, FktGeometryPositionCalculationFn } from '../shared/types';

const topStart: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x,
	y: anchor.y - target.height,
});

const topEnd: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width - target.width,
	y: anchor.y - target.height,
});

const topLeft: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y - target.height,
});

const topRight: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y - target.height,
});

const topCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width / 2 - target.width / 2,
	y: anchor.y - target.height,
});

const bottomStart: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x,
	y: anchor.y + anchor.height,
});

const bottomEnd: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width - target.width,
	y: anchor.y + anchor.height,
});

const bottomLeft: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height,
});

const bottomRight: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height,
});

const bottomCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width / 2 - target.width / 2,
	y: anchor.y + anchor.height,
});

const leftStart: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y,
});

const leftCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height / 2 - target.height / 2,
});

const leftEnd: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height - target.height,
});

const rightStart: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x + anchor.width,
	y: anchor.y,
});

const rightEnd: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height - target.height,
});

const rightCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height / 2 - target.height / 2,
});

export const geometryPositionCalculations: Record<FktGeometryPosition, FktGeometryPositionCalculationFn> = {
	'top-start': topStart,
	'bottom-start': bottomStart,
	'left-start': leftStart,
	'right-start': rightStart,
	'top-center': topCenter,
	'bottom-center': bottomCenter,
	'left-center': leftCenter,
	'right-center': rightCenter,
	'top-left': topLeft,
	'top-right': topRight,
	'bottom-left': bottomLeft,
	'bottom-right': bottomRight,
	'top-end': topEnd,
	'bottom-end': bottomEnd,
	'left-end': leftEnd,
	'right-end': rightEnd,
};
