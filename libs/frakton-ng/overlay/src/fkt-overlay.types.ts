import { ComponentRef, ElementRef, Type } from "@angular/core";
import { FktReactiveComponentData, FktGeometryPosition, Generic } from 'frakton-ng/internal/types';

export interface FktOverlayOptions<T> {
	anchorElementRef?: ElementRef<HTMLElement>;
	component: Type<T>;
	data: FktReactiveComponentData<T>;
	panelOptions?: {
		overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
		focusTriggerOnClose?: boolean;
		id?: string;
		maxHeight?: string;
		minWidth?: string;
		borderRadius?: string;
		backgroundColor?: string;
		width?: string;
		padding?: string;
		boxShadow?: string;
		position?: FktGeometryPosition;
		allowDuplicates?: boolean;
		disableAutoReposition?: boolean;
		disableAutoClose?: boolean;
		styles?: Generic;
		outsideClick?: (element: HTMLElement) => void;
	}
}

export interface FktOverlayRef<T> {
	componentRef: ComponentRef<T>;
	stackIndex: number;
	close: () => void;
}
