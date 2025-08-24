import { FktGeometryOffset, FktGeometryPosition, FktGeometryRect, FktGeometrySize } from '../../../shared/types';

export interface FktAlignTargetToOptions {
	position: FktGeometryPosition;
	anchor: FktGeometryRect;
	targetSize: FktGeometrySize;
	padding?: number | FktGeometryOffset;
}
