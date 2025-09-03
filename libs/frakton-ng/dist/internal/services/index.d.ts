import * as i0 from '@angular/core';
import { ApplicationRef, EnvironmentInjector, Type, Injector, ComponentRef } from '@angular/core';
import { FktReactiveComponentData, FktGeometryPosition, FktGeometryRect, FktGeometrySize, FktGeometryOffset } from 'frakton-ng/internal/types';

declare class FktElementAnchorService {
    private appRef;
    private injector;
    private document;
    private zIndex;
    constructor(appRef: ApplicationRef, injector: EnvironmentInjector);
    createAnchor<T>(component: Type<T>, options?: Partial<FktReactiveComponentData<T>>, injector?: Injector): {
        componentRef: ComponentRef<T>;
        destroy: () => void;
        zIndex: number;
    };
    private getZIndex;
    private destroy;
    static ɵfac: i0.ɵɵFactoryDeclaration<FktElementAnchorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FktElementAnchorService>;
}

declare class ElementIdGeneratorService {
    private platformId;
    private transferState;
    private clientBuffer;
    private clientIdx;
    private serverCounter;
    next(prefix: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementIdGeneratorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ElementIdGeneratorService>;
}

interface FktAlignTargetToOptions {
    position: FktGeometryPosition;
    anchor: FktGeometryRect;
    targetSize: FktGeometrySize;
    padding?: number | FktGeometryOffset;
}

interface FktSmartAlignTargetToOptions extends Omit<FktAlignTargetToOptions, 'position'> {
    preferredPositions?: FktGeometryPosition[];
    disableAutoReposition?: boolean;
    container?: FktGeometryRect;
}

declare class FktGeometryAlignmentService {
    private window;
    alignTargetTo(options: FktAlignTargetToOptions): {
        x: number;
        y: number;
    };
    smartAlignTargetTo(options: FktSmartAlignTargetToOptions): {
        position: "top-start" | "top-center" | "top-end" | "top-left" | "top-right" | "bottom-start" | "bottom-center" | "bottom-end" | "bottom-left" | "bottom-right" | "left-start" | "left-center" | "left-end" | "right-start" | "right-center" | "right-end";
        result: {
            x: number;
            y: number;
        };
    };
    private calculateBestFit;
    static ɵfac: i0.ɵɵFactoryDeclaration<FktGeometryAlignmentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FktGeometryAlignmentService>;
}

export { ElementIdGeneratorService, FktElementAnchorService, FktGeometryAlignmentService };
