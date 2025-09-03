import * as frakton_ng_forms from 'frakton-ng/forms';
import { SignalFormControlTransformer, SignalFormControl, FormControlSuffixDirective } from 'frakton-ng/forms';
import * as _angular_core from '@angular/core';
import { ElementRef } from '@angular/core';

declare const fktInputTypes: readonly ["text", "password", "number", "email"];
declare const fktInputTransformers: readonly ["currency", "percent", "hour"];
type FktInputType = typeof fktInputTypes[number];
type FktInputTransformer = typeof fktInputTransformers[number] | SignalFormControlTransformer;

declare class FktInputComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string>;
    placeholder: _angular_core.InputSignal<string>;
    inputPadding: _angular_core.InputSignal<string>;
    type: _angular_core.InputSignal<"number" | "text" | "password" | "email">;
    transformer: _angular_core.InputSignal<FktInputTransformer | undefined>;
    spellcheck: _angular_core.InputSignal<boolean>;
    protected suffix: _angular_core.Signal<FormControlSuffixDirective | undefined>;
    protected showPassword: _angular_core.WritableSignal<boolean>;
    protected inputType: _angular_core.Signal<"number" | "text" | "password" | "email">;
    protected transformerValue: _angular_core.Signal<frakton_ng_forms.SignalFormControlTransformer | undefined>;
    element: _angular_core.Signal<ElementRef<any> | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktInputComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktInputComponent, "fkt-input", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "inputPadding": { "alias": "inputPadding"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "transformer": { "alias": "transformer"; "required": false; "isSignal": true; }; "spellcheck": { "alias": "spellcheck"; "required": false; "isSignal": true; }; }, {}, ["suffix"], never, true, never>;
}

export { FktInputComponent, fktInputTransformers, fktInputTypes };
export type { FktInputTransformer, FktInputType };
