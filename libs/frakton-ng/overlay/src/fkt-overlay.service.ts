import { inject, Injectable, Injector, signal, Type } from '@angular/core';
import { FktOverlayAnchorComponent } from './anchor/fkt-overlay-anchor.component';
import { createComponentBindings, getElementDesignTokens } from 'frakton-ng/internal/utils';
import { FktElementAnchorService } from 'frakton-ng/internal/services';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { FktOverlayOptions, FktOverlayRef } from './fkt-overlay.types';
import { OVERLAY_INFO } from './tokens/overlay-info';

@Injectable({
	providedIn: 'root',
})
export class FktOverlayService {
	private anchorService = inject(FktElementAnchorService);
	private overlays = signal(new Map<string, FktOverlayRef<any>>());

	open<T>(options: FktOverlayOptions<T>) {
		if (!options.panelOptions?.allowDuplicates) {
			const ref = this.findRefByComponent(options.component);

			if (ref) return ref;
		}

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
			this.overlays().delete(id);

			if (options.panelOptions?.focusTriggerOnClose !== false)
				anchor.componentRef.instance.restoreFocus();

			anchor.destroy();
			componentRef.destroy();
		}

		const autoClose = () => {
			options?.panelOptions?.onAutoClose?.();

			if(options?.panelOptions?.disableAutoClose !== false) close();
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

		const anchor = this.anchorService.createAnchor(
			FktOverlayAnchorComponent,
			{
				anchor: options.anchorElementRef,
				id,
				stackIndex,
				overlayRefs: this.overlays,
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
				styles,
				scroll: () => {
					options?.panelOptions?.onScroll?.();
				},
				outsideClick: (element) => {
					options?.panelOptions?.onOutsideClick?.(element);
					autoClose();
				},
				escapeKeyDown: () => {
					options?.panelOptions?.onEscapeKeyDown?.();
					autoClose();
				}
			},
			injector
		);

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
