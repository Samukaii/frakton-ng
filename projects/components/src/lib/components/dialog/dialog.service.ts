import { ComponentRef, inject, Injectable } from '@angular/core';
import { DialogAnchorComponent } from './anchor/dialog-anchor.component';
import { DialogOptions } from './models/dialog-options';
import { ElementAnchorService } from '../../services/element-anchor/element-anchor.service';
import { ConfirmActionComponent } from '../confirm-action/confirm-action.component';
import { createComponentBindings } from '../../utils';
import { FktConfirmActionOptions } from '../../shared/types';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	private anchorService = inject(ElementAnchorService);
	private dialogs: {
		componentRef: ComponentRef<any>;
		anchor: {
			componentRef: ComponentRef<DialogAnchorComponent>;
			destroy: () => void;
		};
	}[] = [];

	open<T>(options: DialogOptions<T>) {
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

		this.dialogs.push({ componentRef, anchor });

		return {componentRef, close: () => anchor.destroy()}
	}

	confirm(options: FktConfirmActionOptions) {
		const instance = this.open({
			component: ConfirmActionComponent,
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
