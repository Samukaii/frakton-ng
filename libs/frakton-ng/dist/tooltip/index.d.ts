import * as _angular_core from '@angular/core';

declare class FktTooltipDirective {
    fktTooltip: _angular_core.InputSignal<string>;
    tooltipEnabled: _angular_core.InputSignal<boolean>;
    disableAutoReposition: _angular_core.InputSignalWithTransform<boolean, unknown>;
    position: _angular_core.InputSignal<"top-start" | "top-center" | "top-end" | "top-left" | "top-right" | "bottom-start" | "bottom-center" | "bottom-end" | "bottom-left" | "bottom-right" | "left-start" | "left-center" | "left-end" | "right-start" | "right-center" | "right-end">;
    private overlay;
    private overlayRef;
    private elementRef;
    outsideWatcher: {
        watch: (fn: () => void) => void;
        stop: () => void;
    };
    show(): void;
    hide: () => void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTooltipDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<FktTooltipDirective, "[fktTooltip]", never, { "fktTooltip": { "alias": "fktTooltip"; "required": true; "isSignal": true; }; "tooltipEnabled": { "alias": "tooltipEnabled"; "required": false; "isSignal": true; }; "disableAutoReposition": { "alias": "disableAutoReposition"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktTooltipDirective };
