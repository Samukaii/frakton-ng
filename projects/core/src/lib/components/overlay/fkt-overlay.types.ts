import { ComponentRef, ElementRef, Type } from "@angular/core";
import { FktReactiveComponentData, FktGeometryPosition } from '../../shared/types';

export interface FktOverlayOptions<T> {
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
		disableAutoReposition?: boolean;
		disableAutoClose?: boolean;
		outsideClick?: (element: HTMLElement) => void;
	}
}

export interface FktOverlayRef<T> {
	componentRef: ComponentRef<T>;
	close: () => void;
}
