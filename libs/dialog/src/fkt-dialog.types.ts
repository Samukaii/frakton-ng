import { FktComponentData, FktReactiveComponentData } from '@frakton-ng/internal/types';
import { FktDialogConfirmActionComponent } from './confirm-action/fkt-dialog-confirm-action.component';
import { Type } from '@angular/core';
import { DialogAnchorComponent } from './anchor/dialog-anchor.component';

export interface FktConfirmActionOptions
	extends FktComponentData<FktDialogConfirmActionComponent> {
	backdropClick?: () => void;
}

export interface FktDialogOptions<T> {
	component: Type<T>;
	data: FktReactiveComponentData<T>;
	panelOptions?: Partial<FktReactiveComponentData<DialogAnchorComponent>>;
}
