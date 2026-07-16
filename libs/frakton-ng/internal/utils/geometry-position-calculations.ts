import {
	FktGeometryDirection,
	FktGeometryPosition,
	FktGeometryPositionCalculationFn,
} from 'frakton-ng/internal/types';

const topLeft: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x,
	y: anchor.y - target.height,
});

const topRight: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width - target.width,
	y: anchor.y - target.height,
});

const topLeftCorner: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y - target.height,
});

const topRightCorner: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y - target.height,
});

const topCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width / 2 - target.width / 2,
	y: anchor.y - target.height,
});

const bottomLeft: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x,
	y: anchor.y + anchor.height,
});

const bottomRight: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width - target.width,
	y: anchor.y + anchor.height,
});

const bottomLeftCorner: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height,
});

const bottomRightCorner: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height,
});

const bottomCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width / 2 - target.width / 2,
	y: anchor.y + anchor.height,
});

const leftTop: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y,
});

const leftCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height / 2 - target.height / 2,
});

const leftBottom: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x - target.width,
	y: anchor.y + anchor.height - target.height,
});

const rightTop: FktGeometryPositionCalculationFn = (anchor) => ({
	x: anchor.x + anchor.width,
	y: anchor.y,
});

const rightBottom: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height - target.height,
});

const rightCenter: FktGeometryPositionCalculationFn = (anchor, target) => ({
	x: anchor.x + anchor.width,
	y: anchor.y + anchor.height / 2 - target.height / 2,
});

export const geometryPositionCalculations = (
	direction: FktGeometryDirection
): Record<FktGeometryPosition, FktGeometryPositionCalculationFn> => ({
	'top-start': direction === 'rtl' ? topRight : topLeft,
	'bottom-start': direction === 'rtl' ? bottomRight : bottomLeft,
	'start-top': direction === 'rtl' ? rightTop : leftTop,
	'end-top': direction === 'rtl' ? leftTop : rightTop,
	'top-center': topCenter,
	'bottom-center': bottomCenter,
	'start-center': direction === 'rtl' ? rightCenter : leftCenter,
	'end-center': direction === 'rtl' ? leftCenter : rightCenter,
	'top-start-corner': direction === 'rtl' ? topRightCorner : topLeftCorner,
	'top-end-corner': direction === 'rtl' ? topLeftCorner : topRightCorner,
	'bottom-start-corner': direction === 'rtl' ? bottomRightCorner : bottomLeftCorner,
	'bottom-end-corner': direction === 'rtl' ? bottomLeftCorner : bottomRightCorner,
	'top-end': direction === 'rtl' ? topLeft : topRight,
	'bottom-end': direction === 'rtl' ? bottomLeft : bottomRight,
	'start-bottom': direction === 'rtl' ? rightBottom : leftBottom,
	'end-bottom': direction === 'rtl' ? leftBottom : rightBottom,
});
