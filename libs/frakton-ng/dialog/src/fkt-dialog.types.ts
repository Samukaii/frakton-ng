import { FktComponentData, FktReactiveComponentData } from 'frakton-ng/internal/types';
import { FktDialogConfirmActionComponent } from './confirm-action/fkt-dialog-confirm-action.component';
import { Type } from '@angular/core';

export interface FktConfirmActionOptions
	extends FktComponentData<FktDialogConfirmActionComponent> {
	inheritDesignTokensFrom?: HTMLElement | Record<string, string>;
	onBackdropClick?: () => void;
	onEscapeKeyDown?: () => void;
}

export interface FktDialogOptions<T> {
    backdropStyles?: {
        'backdropFilter'?: string;
        'backgroundColor'?: string;
    };
	component: Type<T>;
	data: FktReactiveComponentData<T>;
	panelOptions?: {
		focusTriggerOnClose?: boolean;
		id?: string;
		onBackdropClick?: () => void;
		onEscapeKeyDown?: () => void;
		height?: string;
		width?: string;
		maxHeight?: string;
		maxWidth?: string;
		borderRadius?: string;
		backgroundColor?: string;
		padding?: string;
		allowDuplicates?: false;
		styles?: Record<string, string>;
		inheritDesignTokensFrom?: HTMLElement | Record<string, string>;
	}
}
