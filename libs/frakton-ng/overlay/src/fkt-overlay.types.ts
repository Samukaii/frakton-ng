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
		preferredPositions?: FktGeometryPosition | FktGeometryPosition[];
		allowDuplicates?: boolean;
		disableAutoReposition?: boolean;
		disableAutoClose?: boolean;
		inheritDesignTokensFrom?: HTMLElement | Record<string, string>;
		styles?: Generic;
		onAutoClose?: () => void;
		onOutsideClick?: (element: HTMLElement) => void;
		onScroll?: () => void;
		onEscapeKeyDown?: () => void;
	}
}

export interface FktOverlayRef<T> {
	componentRef: ComponentRef<T>;
	stackIndex: number;
	close: () => void;
}
