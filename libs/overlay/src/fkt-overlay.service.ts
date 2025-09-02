import { inject, Injectable, Injector, signal } from '@angular/core';
import { FktOverlayAnchorComponent } from './anchor/fkt-overlay-anchor.component';
import { createComponentBindings } from '@frakton-ng/internal/utils';
import { FktElementAnchorService } from '@frakton-ng/internal/services';
import { FktGeometryPosition } from '@frakton-ng/internal/types';
import { FktOverlayOptions, FktOverlayRef } from './fkt-overlay.types';
import { OVERLAY_INFO } from './tokens/overlay-info';

@Injectable({
	providedIn: 'root',
})
export class FktOverlayService {
	private anchorService = inject(FktElementAnchorService);
	private overlays = new Map<string, FktOverlayRef<any>>();

	open<T>(options: FktOverlayOptions<T>) {
		if (options.panelOptions?.id && !this.canUseId(options.panelOptions.id))
			throw new Error(
				`The overlay id "${options.panelOptions.id}" is already in use. Please choose a different id.`,
			);

		const id = options.panelOptions?.id ?? this.createId();

		const injector = Injector.create({
			providers: [
				{
					provide: OVERLAY_INFO,
					useValue: {
						currentPosition: signal<FktGeometryPosition | null>(null),
					}
				}
			]
		});

		const close = () => {
			this.overlays.delete(id);
			anchor.destroy();
			componentRef.destroy();
		}

		const anchor = this.anchorService.createAnchor(
			FktOverlayAnchorComponent,
			{
				anchor: options.anchorElementRef,
				id,
				width: options.panelOptions?.width,
				position: options.panelOptions?.position,
				padding: options?.panelOptions?.padding,
				maxHeight: options.panelOptions?.maxHeight ?? '300px',
				minWidth: options.panelOptions?.minWidth ?? '200px',
				borderRadius: options.panelOptions?.borderRadius ?? '10px',
				backgroundColor: options.panelOptions?.backgroundColor,
				disableAutoReposition: options.panelOptions?.disableAutoReposition ?? false,
				overflow: options.panelOptions?.overflow,
				boxShadow: options.panelOptions?.boxShadow,
				outsideClick: (element) => {
					options?.panelOptions?.outsideClick?.(element);
					close();
				}
			},
			injector
		);

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
			close,
		};

		this.overlays.set(id, overlayRef);

		return overlayRef;
	}

	private canUseId(id: string) {
		return !this.overlays.has(id);
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
