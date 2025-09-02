import { ComponentRef, inject, Injectable } from '@angular/core';
import { DialogAnchorComponent } from './anchor/dialog-anchor.component';
import { FktElementAnchorService } from '@frakton-ng/internal/services';
import { createComponentBindings } from '@frakton-ng/internal/utils';
import { FktDialogConfirmActionComponent } from './confirm-action/fkt-dialog-confirm-action.component';
import { FktConfirmActionOptions, FktDialogOptions } from './fkt-dialog.types';

@Injectable({
	providedIn: 'root',
})
export class FktDialogService {
	private anchorService = inject(FktElementAnchorService);
	private dialogs: {
		componentRef: ComponentRef<any>;
		anchor: {
			componentRef: ComponentRef<DialogAnchorComponent>;
			destroy: () => void;
		};
	}[] = [];

	open<T>(options: FktDialogOptions<T>) {
		const anchor = this.anchorService.createAnchor(DialogAnchorComponent, {
			...options?.panelOptions,
			backdropClick: () => {
				anchor.destroy();
				options?.panelOptions?.backdropClick?.();
			},
		});

		const componentRef = anchor.componentRef.instance
			.container()
			.createComponent(options.component, {
				bindings: createComponentBindings(
					options.component,
					options.data,
				),
			});

		this.dialogs.push({componentRef, anchor});

		return {componentRef, close: () => anchor.destroy()}
	}

	confirm(options: FktConfirmActionOptions) {
		const instance = this.open({
			component: FktDialogConfirmActionComponent,
			data: {
				...options,
				actions: {
					...options.actions,
					secondary: {
						...options.actions?.secondary,
						click: () => {
							options.actions?.secondary?.click?.(null);
							instance.close();
						},
					}
				}
			},
			panelOptions: {
				width: 'fit-content',
				backdropClick: () => {
					options?.backdropClick?.();
				}
			}
		})

		return instance;
	}

	closeAll() {
		this.dialogs.forEach(dialog => {
			dialog.anchor.destroy();
		});
	}
}
