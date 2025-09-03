import * as _angular_core from '@angular/core';
import { SignalFormControl } from 'frakton-ng/forms';

declare class FktCheckboxComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCheckboxComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCheckboxComponent, "fkt-checkbox", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktCheckboxComponent };
