import { FktGeometryPosition, FktGeometryRect } from 'frakton-ng/internal/types';
import { FktAlignTargetToOptions } from './fkt-align-target-to.options';

export interface FktSmartAlignTargetToOptions extends Omit<FktAlignTargetToOptions, 'position'> {
	preferredPositions?: FktGeometryPosition[];
	disableAutoReposition?: boolean;
	container?: FktGeometryRect;
}
