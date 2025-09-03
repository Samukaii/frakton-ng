import * as _angular_core from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { SignalFormControl } from 'frakton-ng/forms';

declare class FktTextareaComponent implements AfterViewInit {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string>;
    placeholder: _angular_core.InputSignal<string>;
    autoExpand: _angular_core.InputSignalWithTransform<boolean, unknown>;
    private element;
    protected autoExpandWhenValueChanges: _angular_core.EffectRef;
    ngAfterViewInit(): void;
    focus(): void;
    protected autoExpandElement(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTextareaComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTextareaComponent, "fkt-textarea", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": true; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "autoExpand": { "alias": "autoExpand"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktTextareaComponent };
