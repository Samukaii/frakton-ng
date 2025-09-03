import * as frakton_ng_forms from 'frakton-ng/forms';
import { FormControlStatus, ValidationErrors } from '@angular/forms';
import * as _angular_core from '@angular/core';
import { OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Generic, Prettify } from 'frakton-ng/internal/types';

declare class SignalFormControl<T> {
    #private;
    initialValue: T;
    private validations;
    value: _angular_core.Signal<NonNullable<T>>;
    viewValue: _angular_core.Signal<any>;
    disabled: _angular_core.Signal<boolean>;
    touched: _angular_core.Signal<boolean>;
    dirty: _angular_core.Signal<boolean>;
    pristine: _angular_core.Signal<boolean>;
    untouched: _angular_core.Signal<boolean>;
    status: _angular_core.Signal<FormControlStatus>;
    errors: _angular_core.Signal<null>;
    invalid: _angular_core.Signal<boolean>;
    valid: _angular_core.Signal<boolean>;
    constructor(initialValue: T, options?: SignalFormControlOptions<T>);
    setValue(value: T | {
        modelValue: any;
        viewValue: any;
    }, _?: SignalUpdateValueOptions): void;
    reset(value?: T): void;
    disable(): void;
    enable(): void;
    markAsTouched(): void;
    markAsDirty(): void;
    markAsUntouched(): void;
    markAsPristine(): void;
    patchValue(value: T): void;
}

declare class SignalFormArray<TControls extends SignalFormArrayControls<any>> {
    #private;
    controls: _angular_core.Signal<TControls>;
    status: _angular_core.Signal<FormControlStatus>;
    disabled: _angular_core.Signal<boolean>;
    invalid: _angular_core.Signal<boolean>;
    valid: _angular_core.Signal<boolean>;
    errors: _angular_core.Signal<null>;
    touched: _angular_core.Signal<boolean>;
    untouched: _angular_core.Signal<boolean>;
    pristine: _angular_core.Signal<boolean>;
    dirty: _angular_core.Signal<boolean>;
    value: _angular_core.Signal<ReturnType<TControls[number]["value"]>[]>;
    constructor(config: TControls);
    private getErrors;
    patchValue(value: Partial<SignalFormArrayControlValue<TControls>>): void;
    markAllAsTouched(): void;
    markAllAsDirty(): void;
    at(index: number): SignalFormArray<any> | frakton_ng_forms.SignalFormControl<any> | frakton_ng_forms.SignalFormGroup<any> | undefined;
    push(control: TControls[number]): void;
    insert(index: number, control: TControls[number]): void;
    removeAt(index: number): void;
    reset(value?: SignalFormArrayControlValue<TControls>): void;
    disable(): void;
    enable(): void;
}

declare class SignalFormGroup<TControls extends SignalFormGroupControls<Generic>> {
    readonly controls: TControls;
    private controlsList;
    status: _angular_core.Signal<FormControlStatus>;
    disabled: _angular_core.Signal<boolean>;
    invalid: _angular_core.Signal<boolean>;
    valid: _angular_core.Signal<boolean>;
    errors: _angular_core.Signal<ValidationErrors | null>;
    touched: _angular_core.Signal<boolean>;
    untouched: _angular_core.Signal<boolean>;
    pristine: _angular_core.Signal<boolean>;
    dirty: _angular_core.Signal<boolean>;
    value: _angular_core.Signal<{ [K in keyof SignalFormGroupValue<SignalFormGroup<TControls>>]: SignalFormGroupValue<SignalFormGroup<TControls>>[K]; }>;
    constructor(config: TControls);
    private getErrors;
    patchValue(value: Partial<Prettify<SignalFormGroupValue<SignalFormGroup<TControls>>>>): void;
    markAllAsTouched(): void;
    markAllAsDirty(): void;
    reset(value?: Partial<Prettify<SignalFormGroupValue<SignalFormGroup<TControls>>>>): void;
    disable(): void;
    enable(): void;
    addControl(name: keyof TControls, control: TControls[keyof TControls]): void;
}

type AbstractSignalControl<T> = T extends Array<any> ? SignalFormArray<T> | SignalFormControl<T> : T extends Generic ? SignalFormGroup<T> | SignalFormControl<T> : SignalFormControl<T>;

type SignalValidatorFnOptions<T> = {
    value: T;
};

type SignalValidatorFn<T> = (control: SignalValidatorFnOptions<T>) => ValidationErrors | null;

type SignalValidatorConfig<T> = SignalValidatorFn<T> | SignalValidatorFn<T>[];

type SignalFormBuilderPermissiveWithValidators<T> = [
    T,
    SignalValidatorConfig<T>
];

type SignalFormControlTransformer = (value: any) => {
    modelValue: any;
    viewValue: any;
    cursorPosition?: number;
};

interface SignalFormControlValueInterceptors {
    formatter?: SignalFormControlTransformer;
}

interface SignalFormControlOptions<T> {
    validators?: SignalValidatorFn<T>[];
    interceptors?: SignalFormControlValueInterceptors;
}

type SignalFormBuilderPermissiveConfig<T> = [
    T,
    SignalFormControlOptions<T>
];

type SignalFormControlBuilderConfig<T> = T | SignalFormBuilderPermissiveWithValidators<T> | SignalFormBuilderPermissiveConfig<T>;

type SignalFormArrayBuilderConfig<T> = Array<AbstractSignalControl<T> | SignalFormControlBuilderConfig<T>>;

type ArrayBuilderConfigToSignalFormArray<T extends SignalFormArrayBuilderConfig<any>> = T[number] extends SignalFormArray<any> ? T[number] : T[number] extends SignalFormGroup<any> ? T[number] : T[number] extends SignalFormControl<any> ? T[number] : T[number] extends SignalFormBuilderPermissiveWithValidators<T[number]>[number] ? Array<any> extends T[number] ? SignalFormControl<Exclude<T[number][number], SignalValidatorConfig<T[number] | SignalFormControlOptions<any>>>> : SignalFormControl<Exclude<T[number], SignalValidatorConfig<T[number] | SignalFormControlOptions<any>>>> : T[number] extends SignalFormBuilderPermissiveConfig<T[number]>[number] ? Array<any> extends T[number] ? SignalFormControl<Exclude<T[number][number], SignalFormControlOptions<any>>> : SignalFormControl<Exclude<T[number], SignalFormControlOptions<any>>> : SignalFormControl<T[number]>;

type SignalFormGroupBuilderConfig<T extends Generic> = {
    [key in keyof T]: T[key] extends Array<any> ? SignalFormArray<T[key]> | SignalFormControl<T[key]> | SignalFormControlBuilderConfig<T[key]> : T[key] extends Generic ? SignalFormGroup<T[key]> | SignalFormControl<T[key]> | SignalFormControlBuilderConfig<T[key]> : SignalFormControl<T[key]> | SignalFormControlBuilderConfig<T[key]>;
};

type FormBuilderConfigToSignalFormGroup<T extends SignalFormGroupBuilderConfig<any>> = Prettify<{
    [key in keyof T]: T[key] extends SignalFormArray<any> ? T[key] : T[key] extends SignalFormGroup<infer V> ? SignalFormGroup<V> : T[key] extends SignalFormControl<any> ? T[key] : T[key] extends SignalFormBuilderPermissiveWithValidators<T[key]>[number] ? Array<any> extends T[key] ? SignalFormControl<Exclude<T[key][number], SignalValidatorConfig<T[key]> | SignalFormControlOptions<any>>> : SignalFormControl<Exclude<T[key], SignalValidatorConfig<T[key] | SignalFormControlOptions<any>>>> : SignalFormControl<T[key]>;
}>;

type TypeToSignalFormGroupControls<T extends Generic> = {
    [key in keyof T]: TypeToSignalFormControls<T[key]>;
};
type TypeToSignalFormControls<T> = T extends Array<any> ? SignalFormArray<TypeToSignalFormControls<T[number]>[]> : T extends Generic ? SignalFormGroup<Prettify<TypeToSignalFormGroupControls<T>>> : SignalFormControl<T>;

type TypeToConfig<T> = T extends Array<infer U> ? SignalFormArray<TypeToSignalFormControls<U>[]> : T extends Generic ? SignalFormGroup<TypeToSignalFormGroupControls<T>> : SignalFormControl<T> | SignalFormControlBuilderConfig<T>;
type InterfaceToFormConfig<T extends Generic> = {
    [key in keyof T]: TypeToConfig<T[key]>;
};

type SignalFormArrayControls<T> = Array<AbstractSignalControl<T>>;

type SignalFormArrayControlValue<T extends SignalFormArrayControls<any>> = ReturnType<T[number]['value']>[];

type SignalFormGroupValue<T extends SignalFormGroup<any>> = {
    [key in keyof T['controls']]: Prettify<ReturnType<T['controls'][key]['value']>>;
};

type SignalFormGroupControls<T> = {
    [key in keyof T]: AbstractSignalControl<T[key]>;
};

interface SignalUpdateValueOptions {
    source?: 'ui' | 'programmatic';
}

declare const SignalValidators: {
    required: () => (options: frakton_ng_forms.SignalValidatorFnOptions<any>) => {
        required: boolean;
    } | null;
    requiredTrue: () => (options: frakton_ng_forms.SignalValidatorFnOptions<any>) => {
        requiredTrue: boolean;
    } | null;
    minLength: (length: number) => SignalValidatorFn<any>;
    maxLength: (length: number) => SignalValidatorFn<any>;
    email: () => SignalValidatorFn<any>;
    min: (minValue: number) => SignalValidatorFn<any>;
    max: (maxValue: number) => SignalValidatorFn<any>;
};

declare class SignalFormBuilder {
    group<T extends SignalFormGroupBuilderConfig<any>>(config: T): SignalFormGroup<FormBuilderConfigToSignalFormGroup<T>>;
    array<T extends SignalFormArrayBuilderConfig<any>>(config: T): SignalFormArray<ArrayBuilderConfigToSignalFormArray<T>[]>;
    strictGroup<T extends Generic>(config: Prettify<InterfaceToFormConfig<T>>): SignalFormGroup<TypeToSignalFormGroupControls<T>>;
    control<T>(config: SignalFormControlBuilderConfig<T>): SignalFormControl<T>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SignalFormBuilder, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<SignalFormBuilder>;
}

declare class SignalFormControlDirective<T> implements OnInit, OnDestroy {
    signalFormControl: _angular_core.InputSignal<SignalFormControl<T>>;
    transformer: _angular_core.InputSignal<SignalFormControlTransformer | undefined>;
    updateOn: _angular_core.InputSignal<"blur" | "focus">;
    private elementRef;
    private element;
    private cursorPosition;
    viewValue: _angular_core.WritableSignal<any>;
    protected updateValue: _angular_core.EffectRef;
    protected updateTransformer: _angular_core.EffectRef;
    private onInput;
    private getViewValue;
    private onKeyDown;
    private markAsTouched;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SignalFormControlDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SignalFormControlDirective<any>, "input[signalFormControl],textarea[signalFormControl]", never, { "signalFormControl": { "alias": "signalFormControl"; "required": true; "isSignal": true; }; "transformer": { "alias": "transformer"; "required": false; "isSignal": true; }; "updateOn": { "alias": "updateOn"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FormControlSuffixDirective {
    templateRef: TemplateRef<any>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormControlSuffixDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<FormControlSuffixDirective, "[fktFormControlSuffix]", never, {}, {}, never, never, true, never>;
}

declare const currencyTransformer: SignalFormControlTransformer;

declare const dateTransformer: SignalFormControlTransformer;

declare const hourTransformer: SignalFormControlTransformer;

declare const percentTransformer: SignalFormControlTransformer;

export { FormControlSuffixDirective, SignalFormArray, SignalFormBuilder, SignalFormControl, SignalFormControlDirective, SignalFormGroup, SignalValidators, currencyTransformer, dateTransformer, hourTransformer, percentTransformer };
export type { AbstractSignalControl, ArrayBuilderConfigToSignalFormArray, FormBuilderConfigToSignalFormGroup, InterfaceToFormConfig, SignalFormArrayBuilderConfig, SignalFormArrayControlValue, SignalFormArrayControls, SignalFormBuilderPermissiveConfig, SignalFormBuilderPermissiveWithValidators, SignalFormControlBuilderConfig, SignalFormControlOptions, SignalFormControlTransformer, SignalFormControlValueInterceptors, SignalFormGroupBuilderConfig, SignalFormGroupControls, SignalFormGroupValue, SignalUpdateValueOptions, SignalValidatorConfig, SignalValidatorFn, SignalValidatorFnOptions, TypeToSignalFormControls, TypeToSignalFormGroupControls };
