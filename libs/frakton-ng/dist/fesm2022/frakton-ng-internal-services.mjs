import * as i0 from '@angular/core';
import { inject, DOCUMENT, createComponent, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { createComponentBindings, geometryPositionCalculations } from 'frakton-ng/internal/utils';
import { isPlatformServer } from '@angular/common';
import { WINDOW } from 'frakton-ng/internal/di';

class FktElementAnchorService {
    appRef;
    injector;
    document = inject(DOCUMENT);
    zIndex = 9999;
    constructor(appRef, injector) {
        this.appRef = appRef;
        this.injector = injector;
    }
    createAnchor(component, options, injector) {
        const componentRef = createComponent(component, {
            elementInjector: injector,
            environmentInjector: this.injector,
            bindings: createComponentBindings(component, options ?? {})
        });
        this.appRef.attachView(componentRef.hostView);
        const el = componentRef.hostView.rootNodes[0];
        this.document.body.appendChild(el);
        const element = componentRef.location.nativeElement;
        element.style.zIndex = `${this.getZIndex()}`;
        return { componentRef, destroy: () => this.destroy(componentRef), zIndex: this.getZIndex() };
    }
    getZIndex() {
        this.zIndex++;
        return this.zIndex;
    }
    destroy(ref) {
        ref.destroy();
        this.zIndex--;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktElementAnchorService, deps: [{ token: i0.ApplicationRef }, { token: i0.EnvironmentInjector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktElementAnchorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktElementAnchorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i0.ApplicationRef }, { type: i0.EnvironmentInjector }] });

const KEY = makeStateKey('fkt-id-sequence');
class ElementIdGeneratorService {
    platformId = inject(PLATFORM_ID);
    transferState = inject(TransferState);
    clientBuffer = null;
    clientIdx = 0;
    serverCounter = 0;
    next(prefix) {
        const isServer = isPlatformServer(this.platformId);
        if (isServer) {
            const id = `${prefix}-${this.serverCounter++}`;
            const sequence = this.transferState.get(KEY, []);
            this.transferState.set(KEY, [...sequence, id]);
            return id;
        }
        if (!this.clientBuffer)
            this.clientBuffer = this.transferState.get(KEY, []);
        const fromSSR = this.clientBuffer[this.clientIdx++];
        if (fromSSR)
            return fromSSR;
        return `${prefix}-${Date.now()}-${this.clientIdx++}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: ElementIdGeneratorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: ElementIdGeneratorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: ElementIdGeneratorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class FktGeometryAlignmentService {
    window = inject(WINDOW);
    alignTargetTo(options) {
        const paddingX = typeof options.padding === 'number'
            ? options.padding
            : options.padding?.x ?? 8;
        const paddingY = typeof options.padding === 'number'
            ? options.padding
            : options.padding?.y ?? 8;
        const aligner = geometryPositionCalculations[options.position];
        const base = aligner(options.anchor, options.targetSize);
        let offsetX = 0;
        let offsetY = 0;
        const pos = options.position;
        if (pos.startsWith('top'))
            offsetY = -paddingY;
        else if (pos.startsWith('bottom'))
            offsetY = paddingY;
        if (pos.startsWith('left') || pos.endsWith('left'))
            offsetX = -paddingX;
        else if (pos.startsWith('right') || pos.endsWith('right'))
            offsetX = paddingX;
        return {
            x: base.x + offsetX,
            y: base.y + offsetY + this.window.scrollY,
        };
    }
    ;
    smartAlignTargetTo(options) {
        const bestFit = this.calculateBestFit(options);
        return {
            position: bestFit,
            result: this.alignTargetTo({
                ...options,
                position: bestFit
            })
        };
    }
    ;
    calculateBestFit(options) {
        const defaultPositions = [
            'bottom-center',
            'bottom-start',
            'bottom-end',
            'top-center',
            'top-start',
            'top-end',
            'left-start',
            'left-center',
            'left-end',
            'right-start',
            'right-center',
            'right-end',
            'bottom-left',
            'bottom-right',
            'top-left',
            'top-right',
        ];
        const positions = [
            ...(options.preferredPositions ?? []),
            ...(options.disableAutoReposition === true ? [] : defaultPositions)
        ];
        const container = options.container ?? {
            x: 0,
            y: 0,
            width: this.window.innerWidth,
            height: this.window.innerHeight
        };
        let bestFit = null;
        let smallestOverflow = Infinity;
        for (const position of positions) {
            const result = this.alignTargetTo({
                ...options,
                position
            });
            const rightOverflow = Math.max(0, result.x + options.targetSize.width - (container.x + container.width));
            const bottomOverflow = Math.max(0, result.y + options.targetSize.height - (container.y + container.height));
            const leftOverflow = Math.max(0, container.x - result.x);
            const topOverflow = Math.max(0, container.y - result.y);
            const totalOverflow = rightOverflow + bottomOverflow + leftOverflow + topOverflow;
            if (totalOverflow === 0) {
                return position;
            }
            if (totalOverflow < smallestOverflow) {
                smallestOverflow = totalOverflow;
                bestFit = position;
            }
        }
        return bestFit;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktGeometryAlignmentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktGeometryAlignmentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktGeometryAlignmentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ElementIdGeneratorService, FktElementAnchorService, FktGeometryAlignmentService };
//# sourceMappingURL=frakton-ng-internal-services.mjs.map
