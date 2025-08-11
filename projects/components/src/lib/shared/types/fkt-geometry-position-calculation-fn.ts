import { FktGeometryRect } from "./fkt-geometry-rect";
import { FktGeometrySize } from "./fkt-geometry-size";
import { FktGeometryPoint } from "./fkt-geometry-point";

export type FktGeometryPositionCalculationFn = (
	anchor: FktGeometryRect,
	target: FktGeometrySize,
) => FktGeometryPoint;
