import { InjectionToken, signal } from "@angular/core";
import { FktGeometryPosition } from 'frakton-ng/internal/types';

export const OVERLAY_INFO = new InjectionToken('overlay-info', {
	factory: () => ({
		currentPosition: signal<FktGeometryPosition | null>(null)
	})
});
