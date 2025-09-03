import * as _angular_core from '@angular/core';

declare class FktDrawerComponent {
    opened: _angular_core.InputSignal<boolean>;
    mode: _angular_core.InputSignal<"overlay" | "push">;
    width: _angular_core.InputSignal<string>;
    backdropClick: _angular_core.OutputEmitterRef<void>;
    protected canShowOverlay: _angular_core.Signal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDrawerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDrawerComponent, "fkt-drawer", never, { "opened": { "alias": "opened"; "required": false; "isSignal": true; }; "mode": { "alias": "mode"; "required": false; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; }, { "backdropClick": "backdropClick"; }, never, ["[side-content]", "[side-main]"], true, never>;
}

declare const fktSidebarModes: readonly ["overlay", "push"];
type FktDrawerTypes = typeof fktSidebarModes[number];

export { FktDrawerComponent, fktSidebarModes };
export type { FktDrawerTypes };
