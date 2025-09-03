import * as _angular_core from '@angular/core';

declare class FktNavigatorComponent {
    next: _angular_core.OutputEmitterRef<void>;
    previous: _angular_core.OutputEmitterRef<void>;
    canGoToPrevious: _angular_core.InputSignal<boolean>;
    canGoToNext: _angular_core.InputSignal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktNavigatorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktNavigatorComponent, "fkt-navigator", never, { "canGoToPrevious": { "alias": "canGoToPrevious"; "required": false; "isSignal": true; }; "canGoToNext": { "alias": "canGoToNext"; "required": false; "isSignal": true; }; }, { "next": "next"; "previous": "previous"; }, never, ["*"], true, never>;
}

export { FktNavigatorComponent };
