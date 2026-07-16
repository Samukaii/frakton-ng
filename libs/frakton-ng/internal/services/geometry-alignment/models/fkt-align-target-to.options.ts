import {
	FktGeometryDirection,
	FktGeometryOffset,
	FktGeometryPosition,
	FktGeometryRect,
	FktGeometrySize,
} from 'frakton-ng/internal/types';

export interface FktAlignTargetToOptions {
	position: FktGeometryPosition;
	direction?: FktGeometryDirection;
	anchor: FktGeometryRect;
	targetSize: FktGeometrySize;
	padding?: number | FktGeometryOffset;
}
