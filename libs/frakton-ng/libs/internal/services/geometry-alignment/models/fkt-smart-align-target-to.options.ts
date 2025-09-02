import { FktAlignTargetToOptions } from "./fkt-align-target-to.options";
import { FktGeometryPosition, FktGeometryRect } from '@frakton-ng/internal/types';

export interface FktSmartAlignTargetToOptions extends Omit<FktAlignTargetToOptions, 'position'> {
	preferredPositions?: FktGeometryPosition[];
	disableAutoReposition?: boolean;
	container?: FktGeometryRect;
}
