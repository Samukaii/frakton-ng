import { inject, Injectable, InjectionToken, Injector, signal } from '@angular/core';
import { AttachedOverlayOptions } from './models/attached-overlay-options';
import { AttachedOverlayRef } from './models/attached-overlay-ref';
import { AttachedOverlayComponent } from './anchor/attached-overlay.component';
import { createComponentBindings } from '../../utils';
import { ElementAnchorService } from '../../services/element-anchor/element-anchor.service';
import { FktGeometryPosition } from '../../shared/types';

export const OVERLAY_INFO = new InjectionToken('overlay-info', {
	factory: () => ({
		currentPosition: signal<FktGeometryPosition | null >(null)
	})
})

@Injectable({
	providedIn: 'root',
})
export class AttachedOverlayService {
	private anchorService = inject(ElementAnchorService);
	private overlays = new Map<string, AttachedOverlayRef<any>>();

	open<T>(options: AttachedOverlayOptions<T>) {
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
		})

		const anchor = this.anchorService.createAnchor(
			AttachedOverlayComponent,
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
				overflow: options.panelOptions?.overflow,
				boxShadow: options.panelOptions?.boxShadow,
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

		const overlayRef: AttachedOverlayRef<T> = {
			componentRef,
			close: () => {
				this.overlays.delete(id);
				anchor.destroy();
				componentRef.destroy();
			},
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
