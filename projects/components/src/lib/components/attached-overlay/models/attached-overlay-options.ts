import { ElementRef, Type } from "@angular/core";
import { FktGeometryPosition, FktReactiveComponentData } from '../../../shared/types';

export interface AttachedOverlayOptions<T> {
	anchorElementRef?: ElementRef<HTMLElement>;
	component: Type<T>;
	data: FktReactiveComponentData<T>;
	panelOptions?: {
		overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
		id?: string;
		maxHeight?: string;
		minWidth?: string;
		borderRadius?: string;
		backgroundColor?: string;
		width?: string;
		padding?: string;
		boxShadow?: string;
		position?: FktGeometryPosition;
	}
}
