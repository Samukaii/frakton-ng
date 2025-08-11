import { FktGeometryOffset, FktGeometryPosition, FktGeometryRect, FktGeometrySize } from '../../../shared/types';

export interface AlignTargetToOptions {
	position: FktGeometryPosition;
	anchor: FktGeometryRect;
	targetSize: FktGeometrySize;
	padding?: number | FktGeometryOffset;
}
