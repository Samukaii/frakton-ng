import { AlignTargetToOptions } from "./align-target-to.options";
import { FktGeometryPosition, FktGeometryRect } from '../../../shared/types';

export interface SmartAlignTargetToOptions extends Omit<AlignTargetToOptions, 'position'> {
	preferredPositions?: FktGeometryPosition[];
	container?: FktGeometryRect;
}
