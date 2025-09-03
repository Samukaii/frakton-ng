import * as i0 from '@angular/core';
import { ElementRef, Type, ComponentRef, InjectionToken } from '@angular/core';
import { FktReactiveComponentData, FktGeometryPosition } from 'frakton-ng/internal/types';

interface FktOverlayOptions<T> {
    anchorElementRef?: ElementRef<HTMLElement>;
    component: Type<T>;
    data: FktReactiveComponentData<T>;
    panelOptions?: {
        overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
        id?: string;
        maxHeight?: string;
        minWidth?: string;
        borderRadius?: string;
        backgroundColor?: string;
        width?: string;
        padding?: string;
        boxShadow?: string;
        position?: FktGeometryPosition;
        disableAutoReposition?: boolean;
        disableAutoClose?: boolean;
        outsideClick?: (element: HTMLElement) => void;
    };
}
interface FktOverlayRef<T> {
    componentRef: ComponentRef<T>;
    close: () => void;
}

declare class FktOverlayService {
    private anchorService;
    private overlays;
    open<T>(options: FktOverlayOptions<T>): FktOverlayRef<T>;
    private canUseId;
    private createId;
    static ɵfac: i0.ɵɵFactoryDeclaration<FktOverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FktOverlayService>;
}

declare const OVERLAY_INFO: InjectionToken<{
    currentPosition: i0.WritableSignal<"top-start" | "top-center" | "top-end" | "top-left" | "top-right" | "bottom-start" | "bottom-center" | "bottom-end" | "bottom-left" | "bottom-right" | "left-start" | "left-center" | "left-end" | "right-start" | "right-center" | "right-end" | null>;
}>;

export { FktOverlayService, OVERLAY_INFO };
export type { FktOverlayOptions, FktOverlayRef };
