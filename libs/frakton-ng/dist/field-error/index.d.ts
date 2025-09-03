import * as _angular_core from '@angular/core';
import { SignalFormControl } from 'frakton-ng/forms';

declare class FktFieldErrorComponent {
    control: _angular_core.InputSignal<SignalFormControl<any> | undefined>;
    private messages;
    message: _angular_core.Signal<string | null>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktFieldErrorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktFieldErrorComponent, "fkt-field-error", never, { "control": { "alias": "control"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktFieldErrorComponent };
