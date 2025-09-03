import * as frakton_ng_forms from 'frakton-ng/forms';
import { SignalFormControl } from 'frakton-ng/forms';
import * as _angular_core from '@angular/core';
import { FktGeometryPosition } from 'frakton-ng/internal/types';

declare class FktDatePickerComponent {
    label: _angular_core.InputSignal<string | undefined>;
    placeholder: _angular_core.InputSignal<string | undefined>;
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    private overlay;
    private overlayRef;
    protected transformer: frakton_ng_forms.SignalFormControlTransformer;
    protected autoclose: {
        destroy: () => void;
    };
    protected openModal(ref: HTMLElement, position: FktGeometryPosition): void;
    private getCurrentDate;
    private closeModal;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDatePickerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDatePickerComponent, "fkt-date-picker", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktDatePickerComponent };
