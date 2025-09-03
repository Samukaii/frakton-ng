import * as i0 from '@angular/core';
import { InjectionToken, signal, viewChild, ViewContainerRef, input, output, inject, ElementRef, computed, effect, Component, Injector, Injectable } from '@angular/core';
import { __decorate } from 'tslib';
import { FktGeometryAlignmentService, FktElementAnchorService } from 'frakton-ng/internal/services';
import { outsideClickEffect, isElementInside, elementSizeSignal, MarkUsed, createComponentBindings } from 'frakton-ng/internal/utils';

const OVERLAY_INFO = new InjectionToken('overlay-info', {
    factory: () => ({
        currentPosition: signal(null)
    })
});

class FktOverlayAnchorComponent {
    container = viewChild.required('container', { read: ViewContainerRef });
    id = input.required(...(ngDevMode ? [{ debugName: "id" }] : []));
    anchor = input.required(...(ngDevMode ? [{ debugName: "anchor" }] : []));
    spacing = input(16, ...(ngDevMode ? [{ debugName: "spacing" }] : []));
    position = input(...(ngDevMode ? [undefined, { debugName: "position" }] : []));
    disableAutoReposition = input(...(ngDevMode ? [undefined, { debugName: "disableAutoReposition" }] : []));
    maxHeight = input('300px', ...(ngDevMode ? [{ debugName: "maxHeight" }] : []));
    minWidth = input('200px', ...(ngDevMode ? [{ debugName: "minWidth" }] : []));
    width = input(...(ngDevMode ? [undefined, { debugName: "width" }] : []));
    padding = input(...(ngDevMode ? [undefined, { debugName: "padding" }] : []));
    borderRadius = input(...(ngDevMode ? [undefined, { debugName: "borderRadius" }] : []));
    backgroundColor = input(...(ngDevMode ? [undefined, { debugName: "backgroundColor" }] : []));
    overflow = input(...(ngDevMode ? [undefined, { debugName: "overflow" }] : []));
    boxShadow = input(...(ngDevMode ? [undefined, { debugName: "boxShadow" }] : []));
    outsideClick = output();
    closeClick = output();
    alignmentService = inject(FktGeometryAlignmentService);
    overlayInfo = inject(OVERLAY_INFO);
    autoClose = outsideClickEffect((element) => {
        if (!(element instanceof HTMLElement))
            return;
        if (isElementInside(element, this.anchor().nativeElement))
            return;
        this.outsideClick.emit(element);
    });
    elementRef = inject(ElementRef);
    sizeSignal = elementSizeSignal(this.elementRef.nativeElement, {
        startWithNull: true,
    });
    canShow = signal(false, ...(ngDevMode ? [{ debugName: "canShow" }] : []));
    internalWidth = computed(() => {
        const width = this.width();
        if (width)
            return width;
        return `${this.anchor().nativeElement.getBoundingClientRect().width}px`;
    }, ...(ngDevMode ? [{ debugName: "internalWidth" }] : []));
    alignedPosition = computed(() => {
        const anchor = this.anchor();
        const anchorRect = anchor.nativeElement.getBoundingClientRect();
        const size = this.sizeSignal();
        if (!size)
            return null;
        return this.alignmentService.smartAlignTargetTo({
            anchor: anchorRect,
            targetSize: size,
            disableAutoReposition: this.disableAutoReposition() ?? false,
            preferredPositions: [this.position() ?? 'bottom-center'],
        });
    }, ...(ngDevMode ? [{ debugName: "alignedPosition" }] : []));
    updateOverlayInfoPosition = effect(() => {
        const alignedPosition = this.alignedPosition();
        this.overlayInfo.currentPosition.set(alignedPosition?.position ?? null);
    }, ...(ngDevMode ? [{ debugName: "updateOverlayInfoPosition" }] : []));
    updateVisibility = effect(() => {
        if (this.sizeSignal()) {
            setTimeout(() => {
                this.canShow.set(true);
            }, 100);
        }
    }, ...(ngDevMode ? [{ debugName: "updateVisibility" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktOverlayAnchorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.3", type: FktOverlayAnchorComponent, isStandalone: true, selector: "fkt-overlay-anchor", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: true, transformFunction: null }, anchor: { classPropertyName: "anchor", publicName: "anchor", isSignal: true, isRequired: true, transformFunction: null }, spacing: { classPropertyName: "spacing", publicName: "spacing", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, disableAutoReposition: { classPropertyName: "disableAutoReposition", publicName: "disableAutoReposition", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, minWidth: { classPropertyName: "minWidth", publicName: "minWidth", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, borderRadius: { classPropertyName: "borderRadius", publicName: "borderRadius", isSignal: true, isRequired: false, transformFunction: null }, backgroundColor: { classPropertyName: "backgroundColor", publicName: "backgroundColor", isSignal: true, isRequired: false, transformFunction: null }, overflow: { classPropertyName: "overflow", publicName: "overflow", isSignal: true, isRequired: false, transformFunction: null }, boxShadow: { classPropertyName: "boxShadow", publicName: "boxShadow", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { outsideClick: "outsideClick", closeClick: "closeClick" }, host: { properties: { "style.opacity": "canShow() ? 1 : 0", "style.left.px": "alignedPosition()?.result?.x ?? 0", "style.top.px": "alignedPosition()?.result?.y ?? 0", "style.width": "internalWidth()", "style.--max-height": "maxHeight()", "style.--padding": "padding()", "style.--min-width": "minWidth()", "style.--border-radius": "borderRadius()", "style.--background-color": "backgroundColor()", "style.--overflow": "overflow()", "style.--box-shadow": "boxShadow()", "id": "id()" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef, isSignal: true }], ngImport: i0, template: ` <div class="overlay-container">
		<ng-template #container></ng-template>
	</div>`, isInline: true, styles: [":host{position:absolute;height:fit-content;opacity:0}.overlay-container{min-width:var(--min-width, 200px);max-height:var(--max-height, 300px);overflow:var(--overflow, auto);background-color:var(--background-color, white);box-shadow:var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, .18));padding:var(--padding);border-radius:var(--border-radius, 10px)}\n"] });
}
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "autoClose", void 0);
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "updateOverlayInfoPosition", void 0);
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "updateVisibility", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktOverlayAnchorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-overlay-anchor', template: ` <div class="overlay-container">
		<ng-template #container></ng-template>
	</div>`, standalone: true, host: {
                        '[style.opacity]': 'canShow() ? 1 : 0',
                        '[style.left.px]': 'alignedPosition()?.result?.x ?? 0',
                        '[style.top.px]': 'alignedPosition()?.result?.y ?? 0',
                        '[style.width]': 'internalWidth()',
                        '[style.--max-height]': 'maxHeight()',
                        '[style.--padding]': 'padding()',
                        '[style.--min-width]': 'minWidth()',
                        '[style.--border-radius]': 'borderRadius()',
                        '[style.--background-color]': 'backgroundColor()',
                        '[style.--overflow]': 'overflow()',
                        '[style.--box-shadow]': 'boxShadow()',
                        '[id]': 'id()',
                    }, styles: [":host{position:absolute;height:fit-content;opacity:0}.overlay-container{min-width:var(--min-width, 200px);max-height:var(--max-height, 300px);overflow:var(--overflow, auto);background-color:var(--background-color, white);box-shadow:var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, .18));padding:var(--padding);border-radius:var(--border-radius, 10px)}\n"] }]
        }], propDecorators: { autoClose: [], updateOverlayInfoPosition: [], updateVisibility: [] } });

class FktOverlayService {
    anchorService = inject(FktElementAnchorService);
    overlays = new Map();
    open(options) {
        if (options.panelOptions?.id && !this.canUseId(options.panelOptions.id))
            throw new Error(`The overlay id "${options.panelOptions.id}" is already in use. Please choose a different id.`);
        const id = options.panelOptions?.id ?? this.createId();
        const injector = Injector.create({
            providers: [
                {
                    provide: OVERLAY_INFO,
                    useValue: {
                        currentPosition: signal(null),
                    }
                }
            ]
        });
        const close = () => {
            this.overlays.delete(id);
            anchor.destroy();
            componentRef.destroy();
        };
        const anchor = this.anchorService.createAnchor(FktOverlayAnchorComponent, {
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
        }, injector);
        const componentRef = anchor.componentRef.instance
            .container()
            .createComponent(options.component, {
            bindings: createComponentBindings(options.component, options.data),
        });
        const overlayRef = {
            componentRef,
            close,
        };
        this.overlays.set(id, overlayRef);
        return overlayRef;
    }
    canUseId(id) {
        return !this.overlays.has(id);
    }
    createId() {
        let counter = 1;
        let id = `overlay-container-${counter}`;
        while (!this.canUseId(id)) {
            counter++;
            id = `overlay-container-${counter}`;
        }
        return id;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktOverlayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktOverlayService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktOverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktOverlayService, OVERLAY_INFO };
//# sourceMappingURL=frakton-ng-overlay.mjs.map
