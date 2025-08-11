import { Type } from "@angular/core";
import { DialogAnchorComponent } from "../anchor/dialog-anchor.component";
import { FktComponentData } from '../../../shared/types';

export interface DialogOptions<T> {
	component: Type<T>;
	data: FktComponentData<T>;
	panelOptions?: Partial<FktComponentData<DialogAnchorComponent>>;
}
