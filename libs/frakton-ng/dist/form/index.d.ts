import * as _angular_core from '@angular/core';
import { SignalFormGroup, SignalFormGroupValue } from 'frakton-ng/forms';
import { Generic } from 'frakton-ng/internal/types';

type FktFormModifier<InputModel extends Generic, Form extends SignalFormGroup<any>> = {
    [Key in keyof SignalFormGroupValue<Form>]?: (value: InputModel) => SignalFormGroupValue<Form>[Key];
};

declare class FktFormComponent<InputModel extends Generic, Form extends SignalFormGroup<any>> {
    form: _angular_core.InputSignal<Form>;
    data: _angular_core.InputSignal<InputModel | undefined>;
    formModifiers: _angular_core.InputSignal<FktFormModifier<InputModel, Form> | undefined>;
    submit: _angular_core.OutputEmitterRef<SignalFormGroupValue<Form> extends infer T ? { [K in keyof T]: SignalFormGroupValue<Form>[K]; } : never>;
    protected updateForm: _angular_core.EffectRef;
    private patchForm;
    protected onSubmit(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktFormComponent<any, any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktFormComponent<any, any>, "fkt-form", never, { "form": { "alias": "form"; "required": true; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "formModifiers": { "alias": "formModifiers"; "required": false; "isSignal": true; }; }, { "submit": "submit"; }, never, ["*"], true, never>;
}

export { FktFormComponent };
export type { FktFormModifier };
