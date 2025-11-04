import { inject, Injectable, signal, Type } from '@angular/core';
import { DialogAnchorComponent } from './anchor/dialog-anchor.component';
import { FktElementAnchorService } from 'frakton-ng/internal/services';
import { createComponentBindings, getElementDesignTokens } from 'frakton-ng/internal/utils';
import { FktDialogConfirmActionComponent } from './confirm-action/fkt-dialog-confirm-action.component';
import { FktConfirmActionOptions, FktDialogOptions } from './fkt-dialog.types';
import { FktOverlayRef } from 'frakton-ng/overlay';

@Injectable({
	providedIn: 'root',
})
export class FktDialogService {
	private anchorService = inject(FktElementAnchorService);
	private overlays = signal(new Map<string, FktOverlayRef<any>>());

	open<T>(options: FktDialogOptions<T>) {
		if (!options.panelOptions?.allowDuplicates) {
			const ref = this.findRefByComponent(options.component);

			if (ref) return ref;
		}

		if (options.panelOptions?.id && !this.canUseId(options.panelOptions.id))
			throw new Error(
				`The overlay id "${options.panelOptions.id}" is already in use. Please choose a different id.`,
			);

		const id = options.panelOptions?.id ?? this.createId();

		const close = () => {
			this.overlays().delete(id);

			if (options.panelOptions?.focusTriggerOnClose !== false)
				anchor.componentRef.instance.restoreFocus();

			anchor.destroy();
			componentRef.destroy();
		}

		const stackIndex = this.getLastZIndex() + 1;

		let styles = options.panelOptions?.styles ?? {};

		if (options.panelOptions?.inheritDesignTokensFrom) {
			const inheritedTokens = options?.panelOptions.inheritDesignTokensFrom

			let tokens: Record<string, string>;

			if (inheritedTokens instanceof HTMLElement)
				tokens = getElementDesignTokens(inheritedTokens);
			else tokens = inheritedTokens;

			styles = {...styles, ...tokens}
		}

		const anchor = this.anchorService.createAnchor(DialogAnchorComponent, {
			id,
			stackIndex,
			styles,
			...options?.panelOptions,
			escapeKeyDown: () => {
				options?.panelOptions?.onEscapeKeyDown?.()
				close();
			},
			backdropClick: () => {
				options?.panelOptions?.onBackdropClick?.();
				close();
			},
		});

		const anchorElement = anchor.componentRef.location.nativeElement as HTMLElement;

		anchorElement.style.zIndex = stackIndex.toString();

		const componentRef = anchor.componentRef.instance
			.container()
			.createComponent(options.component, {
				bindings: createComponentBindings(
					options.component,
					options.data,
				),
			});

		const overlayRef: FktOverlayRef<T> = {
			componentRef,
			stackIndex,
			close,
		};

		this.registerOverlay(id, overlayRef);

		return overlayRef;
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
				onBackdropClick: () => {
					options?.onBackdropClick?.();
				}
			}
		})

		return instance;
	}

	closeAll() {
		Array.from(this.overlays().values()).forEach(dialog => {
			dialog.close()
		});
	}

	private findRefByComponent(type: Type<any>) {
		const overlays = Array.from(this.overlays().values());

		return overlays.find(overlay => overlay.componentRef.componentType === type);
	}

	private canUseId(id: string) {
		return !this.overlays().has(id);
	}

	private registerOverlay(id: string, ref: FktOverlayRef<any>) {
		const map = new Map(this.overlays());

		map.set(id, ref);

		this.overlays.set(map);
	}

	private getLastZIndex() {
		const overlaysCount = this.overlays().size;

		return overlaysCount + 9999;
	}

	private createId() {
		let counter = 1;
		let id = `overlay-container-${counter}`;

		while (!this.canUseId(id)) {
			counter++;
			id = `overlay-container-${counter}`;
		}

		return id;
	}
}
