import { FktGeometryOffset, FktGeometryPosition, FktGeometryRect, FktGeometrySize } from 'frakton-ng/internal/types';

export interface FktAlignTargetToOptions {
	position: FktGeometryPosition;
	anchor: FktGeometryRect;
	targetSize: FktGeometrySize;
	padding?: number | FktGeometryOffset;
}
