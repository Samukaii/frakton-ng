import * as _frakton_ng_core from '@frakton-ng/core';
import * as _angular_core from '@angular/core';
import { ModelSignal, InputSignal, OutputEmitterRef, WritableSignal, Signal, ViewContainerRef, Type, ComponentRef, TemplateRef, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { FormControlStatus, ValidationErrors, FormGroup } from '@angular/forms';

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
    at(index: number): SignalFormArray<any> | SignalFormControl<any> | SignalFormGroup<any> | undefined;
    push(control: TControls[number]): void;
    insert(index: number, control: TControls[number]): void;
    removeAt(index: number): void;
    reset(value?: SignalFormArrayControlValue<TControls>): void;
    disable(): void;
    enable(): void;
}

type Generic = Record<string, any>;

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

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

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

declare const fktColors: readonly ["red", "primary", "yellow", "green"];
type FktColor = typeof fktColors[number];

type FktComponentInputNames<T> = {
    [Key in keyof T]: T[Key] extends ModelSignal<any> ? never : T[Key] extends InputSignal<any> ? Key : never;
}[keyof T];

type FktExtractNonUndefined<T> = {
    [Key in keyof T]: undefined extends T[Key] ? never : Key;
}[keyof T];

type FktExtractUndefined<T> = {
    [Key in keyof T]: undefined extends T[Key] ? Key : never;
}[keyof T];

type ComponentInput<T> = {
    [Key in FktComponentInputNames<T>]: T[Key] extends InputSignal<infer InputValue> ? InputValue : never;
};
type RequiredComponentInputs<T> = {
    [Key in FktExtractNonUndefined<ComponentInput<T>>]: Prettify<ComponentInput<T>[Key]>;
};
type OptionalComponentInputs<T> = {
    [Key in FktExtractUndefined<ComponentInput<T>>]?: Prettify<ComponentInput<T>[Key]>;
};
type FktComponentInputs<T> = RequiredComponentInputs<T> & OptionalComponentInputs<T>;

type FktComponentOutputNames<T> = {
    [Key in keyof T]: T[Key] extends OutputEmitterRef<any> ? Key : never;
}[keyof T];

type FktComponentOutputs<T> = {
    [Key in FktComponentOutputNames<T>]: T[Key] extends OutputEmitterRef<infer OutputValue> ? (value: OutputValue) => void : never;
};

type FktComponentTwoWayBindingNames<T> = {
    [Key in keyof T]: T[Key] extends ModelSignal<any> ? Key : never;
}[keyof T];

type ComponentTwoWayBinding<T> = {
    [Key in FktComponentTwoWayBindingNames<T>]: T[Key] extends ModelSignal<infer TwoWayBindingValue> ? TwoWayBindingValue : never;
};
type RequiredComponentTwoWayBindings<T> = {
    [Key in FktExtractNonUndefined<ComponentTwoWayBinding<T>>]: WritableSignal<Prettify<ComponentTwoWayBinding<T>[Key]>>;
};
type OptionalComponentTwoWayBindings<T> = {
    [Key in FktExtractUndefined<ComponentTwoWayBinding<T>>]?: WritableSignal<Prettify<ComponentTwoWayBinding<T>[Key]>>;
};
type FktComponentTwoWayBindings<T> = RequiredComponentTwoWayBindings<T> & OptionalComponentTwoWayBindings<T>;

type FktComponentData<T> = Prettify<FktComponentInputs<T> & Partial<FktComponentOutputs<T>> & FktComponentTwoWayBindings<T>>;

type FktFontIconName = 'academic-cap' | 'adjustments-horizontal' | 'adjustments-vertical' | 'archive-box-arrow-down' | 'archive-box-x-mark' | 'archive-box' | 'arrow-down-circle' | 'arrow-down-left' | 'arrow-down-on-square-stack' | 'arrow-down-on-square' | 'arrow-down-right' | 'arrow-down-tray' | 'arrow-down' | 'arrow-left-circle' | 'arrow-left-end-on-rectangle' | 'arrow-left-start-on-rectangle' | 'arrow-left' | 'arrow-long-down' | 'arrow-long-left' | 'arrow-long-right' | 'arrow-long-up' | 'arrow-path-rounded-square' | 'arrow-right-circle' | 'arrow-right-end-on-rectangle' | 'arrow-right-start-on-rectangle' | 'arrow-right' | 'arrow-top-right-on-square' | 'arrow-trending-down' | 'arrow-trending-up' | 'arrow-turn-down-left' | 'arrow-turn-down-right' | 'arrow-turn-left-down' | 'arrow-turn-left-up' | 'arrow-turn-right-down' | 'arrow-turn-right-up' | 'arrow-turn-up-left' | 'arrow-turn-up-right' | 'arrow-up-circle' | 'arrow-up-left' | 'arrow-up-on-square-stack' | 'arrow-up-on-square' | 'arrow-up-right' | 'arrow-up-tray' | 'arrow-up' | 'arrow-uturn-down' | 'arrow-uturn-left' | 'arrow-uturn-right' | 'arrow-uturn-up' | 'arrow' | 'arrows-pointing-in' | 'arrows-pointing-out' | 'arrows-right-left' | 'arrows-up-down' | 'at-symbol' | 'backspace' | 'backward' | 'banknotes' | 'bars-2' | 'bars-3-bottom-left' | 'bars-3-bottom-right' | 'bars-3-center-left' | 'bars-3' | 'bars-4' | 'bars-arrow-down' | 'bars-arrow-up' | 'battery-0' | 'battery-100' | 'battery-50' | 'beaker' | 'bell-alert' | 'bell-slash' | 'bell-snooze' | 'bell' | 'bold' | 'bolt-slash' | 'bolt' | 'book-open' | 'bookmark-slash' | 'bookmark-square' | 'bookmark' | 'briefcase' | 'bug-ant' | 'building-library' | 'building-office-2' | 'building-office' | 'building-storefront' | 'cake' | 'calculator' | 'calendar-date-range' | 'calendar-days' | 'calendar' | 'camera' | 'chart-bar-square' | 'chart-bar' | 'chart-pie' | 'chat-bubble-bottom-center-text' | 'chat-bubble-bottom-center' | 'chat-bubble-left-ellipsis' | 'chat-bubble-left-right' | 'chat-bubble-left' | 'chat-bubble-oval-left-ellipsis' | 'chat-bubble-oval-left' | 'check-badge' | 'check-circle' | 'check' | 'chevron-double-down' | 'chevron-double-left' | 'chevron-double-right' | 'chevron-double-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up-down' | 'chevron-up' | 'circle-stack' | 'clipboard-document-check' | 'clipboard-document-list' | 'clipboard-document' | 'clipboard' | 'clock' | 'cloud-arrow-down' | 'cloud-arrow-up' | 'cloud' | 'code-bracket-square' | 'code-bracket' | 'cog-6-tooth' | 'cog-8-tooth' | 'cog' | 'command-line' | 'computer-desktop' | 'cpu-chip' | 'credit-card' | 'cube-transparent' | 'cube' | 'currency-bangladeshi' | 'currency-dollar' | 'currency-euro' | 'currency-pound' | 'currency-rupee' | 'currency-yen' | 'cursor-arrow-rays' | 'cursor-arrow-ripple' | 'device-phone-mobile' | 'device-tablet' | 'divide' | 'document-arrow-down' | 'document-arrow-up' | 'document-chart-bar' | 'document-check' | 'document-currency-bangladeshi' | 'document-currency-dollar' | 'document-currency-euro' | 'document-currency-pound' | 'document-currency-rupee' | 'document-currency-yen' | 'document-duplicate' | 'document-magnifying-glass' | 'document-minus' | 'document-plus' | 'document-text' | 'document' | 'ellipsis-horizontal-circle' | 'ellipsis-horizontal' | 'ellipsis-vertical' | 'envelope-open' | 'envelope' | 'equals' | 'exclamation-circle' | 'exclamation-triangle' | 'eye-dropper' | 'eye-slash' | 'eye' | 'face-frown' | 'face-smile' | 'film' | 'finger-print' | 'fire' | 'flag' | 'folder-arrow-down' | 'folder-minus' | 'folder-open' | 'folder-plus' | 'folder' | 'forward' | 'funnel' | 'gif' | 'gift-top' | 'gift' | 'globe-alt' | 'globe-americas' | 'globe-asia-australia' | 'globe-europe-africa' | 'h1' | 'h2' | 'h3' | 'hand-raised' | 'hand-thumb-down' | 'hand-thumb-up' | 'hashtag' | 'heart' | 'home-modern' | 'home' | 'identification' | 'inbox-arrow-down' | 'inbox-stack' | 'inbox' | 'information-circle' | 'italic' | 'key' | 'language' | 'lifebuoy' | 'light-bulb' | 'link-slash' | 'link' | 'list-bullet' | 'lock-closed' | 'lock-open' | 'magnifying-glass-circle' | 'magnifying-glass-minus' | 'magnifying-glass-plus' | 'magnifying-glass' | 'map-pin' | 'map' | 'megaphone' | 'microphone' | 'minus-circle' | 'minus' | 'moon' | 'musical-note' | 'newspaper' | 'no-symbol' | 'numbered-list' | 'output' | 'paint-brush' | 'paper-airplane' | 'paper-clip' | 'pause-circle' | 'pause' | 'pencil-square' | 'pencil' | 'percent-badge' | 'phone-arrow-down-left' | 'phone-arrow-up-right' | 'phone-x-mark' | 'phone' | 'photo' | 'play-circle' | 'play-pause' | 'play' | 'plus-circle' | 'plus' | 'power' | 'presentation-chart-bar' | 'presentation-chart-line' | 'printer' | 'puzzle-piece' | 'qr-code' | 'question-mark-circle' | 'queue-list' | 'radio' | 'receipt-percent' | 'receipt-refund' | 'rectangle-group' | 'rectangle-stack' | 'rocket-launch' | 'rss' | 'scale' | 'scissors' | 'server-stack' | 'server' | 'share' | 'shield-check' | 'shield-exclamation' | 'shopping-bag' | 'shopping-cart' | 'signal-slash' | 'signal' | 'slash' | 'sparkles' | 'speaker-wave' | 'speaker-x-mark' | 'square-2-stack' | 'square-3-stack-3d' | 'squares-2x2' | 'squares-plus' | 'star' | 'stop-circle' | 'stop' | 'strikethrough' | 'sun' | 'swatch' | 'table-cells' | 'tag' | 'ticket' | 'trash' | 'trophy' | 'truck' | 'tv' | 'underline' | 'user-circle' | 'user-group' | 'user-minus' | 'user-plus' | 'user' | 'users' | 'variable' | 'video-camera-slash' | 'video-camera' | 'view-columns' | 'viewfinder-circle' | 'wallet' | 'wifi' | 'window' | 'wrench-screwdriver' | 'wrench' | 'x-circle' | 'x-mark';

interface FktGeometryPoint {
    x: number;
    y: number;
}

interface FktGeometryOffset extends FktGeometryPoint {
}

declare const fktGeometryPositions: readonly ["top-start", "top-center", "top-end", "top-left", "top-right", "bottom-start", "bottom-center", "bottom-end", "bottom-left", "bottom-right", "left-start", "left-center", "left-end", "right-start", "right-center", "right-end"];
type FktGeometryPosition = (typeof fktGeometryPositions)[number];

interface FktGeometrySize {
    height: number;
    width: number;
}

interface FktGeometryRect extends FktGeometryPoint, FktGeometrySize {
}

type FktGeometryPositionCalculationFn = (anchor: FktGeometryRect, target: FktGeometrySize) => FktGeometryPoint;

type FktIconName = FktFontIconName;

type FktInferFormValue<T extends FormGroup> = ReturnType<T['getRawValue']>;

type FktInferFormValueFn<T extends (...args: any[]) => FormGroup> = FktInferFormValue<ReturnType<T>>;

interface FktMenuItem {
    name: string;
    path: string;
    icon: FktIconName;
}

interface FktMenuGroup {
    name?: string;
    items: FktMenuItem[];
}

type FktOrSignal<T> = {
    [K in keyof T]: T[K] | Signal<T[K]>;
};

type FktReactiveComponentData<T> = Prettify<FktOrSignal<FktComponentInputs<T>> & Partial<FktComponentOutputs<T>> & FktComponentTwoWayBindings<T>>;

interface FktIdentifiable {
    id: number | string;
}

interface SignalFormControlOptions<T> {
    validators?: SignalValidatorFn<T>[];
    interceptors?: SignalFormControlValueInterceptors;
}

type SignalFormControlTransformer = (value: any) => {
    modelValue: any;
    viewValue: any;
    cursorPosition?: number;
};
interface SignalFormControlValueInterceptors {
    formatter?: SignalFormControlTransformer;
}
interface SignalUpdateValueOptions {
    source?: 'ui' | 'programmatic';
}
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

interface FktAutocompleteOption {
    value: string | number;
    label: string;
}

declare class FktButtonComponent {
    loading: _angular_core.InputSignal<boolean>;
    disabled: _angular_core.InputSignal<boolean>;
    text: _angular_core.InputSignal<string>;
    loadingText: _angular_core.InputSignal<string>;
    color: _angular_core.InputSignal<"red" | "primary" | "yellow" | "green">;
    theme: _angular_core.InputSignal<string>;
    variant: _angular_core.InputSignal<string>;
    icon: _angular_core.InputSignal<_frakton_ng_core.FktFontIconName | undefined>;
    iconPosition: _angular_core.InputSignal<"left" | "right">;
    protected classes: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktButtonComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktButtonComponent, "fkt-button", never, { "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "loadingText": { "alias": "loadingText"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "iconPosition": { "alias": "iconPosition"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const fktButtonVariants: string[];
declare const fktButtonThemes: string[];
type FktButtonVariant = typeof fktButtonVariants[number];
type FktButtonTheme = typeof fktButtonThemes[number];
type FktButtonAction<Context = any> = Prettify<Partial<FktComponentInputs<FktButtonComponent>> & {
    tooltip?: string;
    identifier: string;
    condition?: boolean;
    click?: (context: Context) => void;
}>;

interface FktNoResults {
    label: string;
    icon?: {
        name: FktIconName;
        size?: string;
    };
    description?: string;
    action?: FktButtonAction;
}

declare class FktNoResultsComponent {
    noResults: _angular_core.InputSignal<FktNoResults>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktNoResultsComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktNoResultsComponent, "fkt-no-results", never, { "noResults": { "alias": "noResults"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FktAutocompleteComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    options: _angular_core.InputSignal<FktAutocompleteOption[]>;
    actions: _angular_core.InputSignal<{
        disabled?: boolean | undefined;
        text?: string | undefined;
        loading?: boolean | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: _frakton_ng_core.FktFontIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    }[]>;
    enableAutoCreation: _angular_core.InputSignal<boolean>;
    noResults: _angular_core.InputSignal<FktNoResults>;
    loading: _angular_core.InputSignal<boolean>;
    placeholder: _angular_core.InputSignal<string>;
    label: _angular_core.InputSignal<string>;
    search: _angular_core.OutputEmitterRef<string>;
    private overlayService;
    private inputComponent;
    protected allOptions: _angular_core.Signal<FktAutocompleteOption[]>;
    transformer: SignalFormControlTransformer;
    protected closeOverlayOnOutsideClick: {
        destroy: () => void;
    };
    protected openOverlay(): void;
    private overlay;
    protected selectedOption: _angular_core.Signal<FktAutocompleteOption | null>;
    protected selectOption(option: FktAutocompleteOption): void;
    private closeOverlay;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktAutocompleteComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktAutocompleteComponent, "fkt-autocomplete", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; "enableAutoCreation": { "alias": "enableAutoCreation"; "required": false; "isSignal": true; }; "noResults": { "alias": "noResults"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, { "search": "search"; }, never, never, true, never>;
}

declare class FktBadgeComponent {
    text: _angular_core.InputSignal<string | undefined>;
    color: _angular_core.InputSignal<"red" | "green" | "blue" | "orange">;
    variant: _angular_core.InputSignal<"opaque" | "faded">;
    protected classes: _angular_core.Signal<string[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktBadgeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktBadgeComponent, "fkt-badge", never, { "text": { "alias": "text"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": true; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, ["[badge-content]"], true, never>;
}

declare const fktBadgeColors: readonly ["green", "red", "blue", "orange"];
declare const fktBadgeVariants: readonly ["opaque", "faded"];
type FktBadgeColor = typeof fktBadgeColors[number];
type FktBadgeVariant = typeof fktBadgeVariants[number];

interface FktBadge<Id extends string = string> {
    id: Id;
    name: string;
    color: FktBadgeColor;
}

declare class FktBadgeSelectorComponent<Id extends string> {
    options: _angular_core.InputSignal<FktBadge<Id>[]>;
    currentBadgeId: _angular_core.ModelSignal<Id | undefined>;
    private overlay;
    private ref;
    private elementRef;
    protected selectedOption: _angular_core.Signal<FktBadge<Id> | undefined>;
    protected select(): void;
    private close;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktBadgeSelectorComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktBadgeSelectorComponent<any>, "fkt-badge-selector", never, { "options": { "alias": "options"; "required": true; "isSignal": true; }; "currentBadgeId": { "alias": "currentBadgeId"; "required": false; "isSignal": true; }; }, { "currentBadgeId": "currentBadgeIdChange"; }, never, never, true, never>;
}

declare class FktButtonsListComponent<T> {
    context: _angular_core.InputSignal<T | undefined>;
    orientation: _angular_core.InputSignal<"horizontal" | "vertical">;
    fill: _angular_core.InputSignalWithTransform<boolean, unknown>;
    verticalAlignment: _angular_core.InputSignal<"start" | "space-between" | "space-evenly" | "space-around" | "end">;
    horizontalAlignment: _angular_core.InputSignal<"start" | "space-between" | "space-evenly" | "space-around" | "end">;
    actions: _angular_core.InputSignal<{
        disabled?: boolean | undefined;
        text?: string | undefined;
        loading?: boolean | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: _frakton_ng_core.FktFontIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    }[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktButtonsListComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktButtonsListComponent<any>, "fkt-buttons-list", never, { "context": { "alias": "context"; "required": false; "isSignal": true; }; "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; "fill": { "alias": "fill"; "required": false; "isSignal": true; }; "verticalAlignment": { "alias": "verticalAlignment"; "required": false; "isSignal": true; }; "horizontalAlignment": { "alias": "horizontalAlignment"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface FktCalendarDateConfig {
    date: string;
    onClick?: () => void;
    isCurrentDate: boolean;
    isToday: boolean;
    classes: string[];
}
type FktCalendarDateOptions = Prettify<Partial<Omit<FktCalendarDateConfig, 'date' | 'isCurrentDate'>>>;
type FktCalendarDateConfigFn = (date: Date) => FktCalendarDateOptions;
declare const fktCalendarStep: readonly ["date", "month", "year"];
type FktCalendarStep = typeof fktCalendarStep[number];

declare class FktCalendarComponent {
    configFn: _angular_core.InputSignal<FktCalendarDateConfigFn>;
    currentDate: _angular_core.ModelSignal<Date>;
    borderless: _angular_core.InputSignal<boolean>;
    protected step: _angular_core.WritableSignal<"year" | "month" | "date">;
    private lastStep;
    protected selectStep(step: FktCalendarStep): void;
    protected goBackToLastStep(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCalendarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCalendarComponent, "fkt-calendar", never, { "configFn": { "alias": "configFn"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; "borderless": { "alias": "borderless"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; }, never, never, true, never>;
}

declare class FktCalendarNavigatorComponent {
    mode: _angular_core.InputSignal<"year" | "month">;
    currentDate: _angular_core.ModelSignal<Date>;
    private overlay;
    private elementRef;
    private overlayRef;
    protected openMonthModal(): void;
    protected openYearModal(): void;
    private openModal;
    private closeModal;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCalendarNavigatorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCalendarNavigatorComponent, "fkt-calendar-navigator", never, { "mode": { "alias": "mode"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; }, never, never, true, never>;
}

declare const fktCalendarNavigatorModes: readonly ["month", "year"];
type FktCalendarNavigatorMode = typeof fktCalendarNavigatorModes[number];

declare class FktCardComponent {
    borderless: _angular_core.InputSignalWithTransform<boolean, unknown>;
    shadowless: _angular_core.InputSignalWithTransform<boolean, unknown>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCardComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCardComponent, "fkt-card", never, { "borderless": { "alias": "borderless"; "required": false; "isSignal": true; }; "shadowless": { "alias": "shadowless"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class FktCheckboxComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCheckboxComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCheckboxComponent, "fkt-checkbox", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FktDatePickerComponent {
    label: _angular_core.InputSignal<string | undefined>;
    placeholder: _angular_core.InputSignal<string | undefined>;
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    private overlay;
    private overlayRef;
    protected transformer: SignalFormControlTransformer;
    protected autoclose: {
        destroy: () => void;
    };
    protected openModal(ref: HTMLElement, position: FktGeometryPosition): void;
    private getCurrentDate;
    private closeModal;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDatePickerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDatePickerComponent, "fkt-date-picker", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FktDialogConfirmActionComponent {
    title: _angular_core.InputSignal<string>;
    description: _angular_core.InputSignal<string | undefined>;
    actions: _angular_core.InputSignal<{
        primary?: Partial<FktButtonAction>;
        secondary?: Partial<FktButtonAction>;
    } | undefined>;
    protected confirmActions: _angular_core.Signal<{
        disabled?: boolean | undefined;
        text?: string | undefined;
        loading?: boolean | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: _frakton_ng_core.FktFontIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    }[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDialogConfirmActionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDialogConfirmActionComponent, "fkt-dialog-confirm-action", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class DialogAnchorComponent {
    backdropClick: _angular_core.OutputEmitterRef<void>;
    height: _angular_core.InputSignal<string>;
    width: _angular_core.InputSignal<string>;
    maxHeight: _angular_core.InputSignal<string>;
    maxWidth: _angular_core.InputSignal<string>;
    borderRadius: _angular_core.InputSignal<string>;
    backgroundColor: _angular_core.InputSignal<string>;
    padding: _angular_core.InputSignal<string>;
    container: _angular_core.Signal<ViewContainerRef>;
    protected windowScroll: _angular_core.Signal<_frakton_ng_core.FktGeometryPoint>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DialogAnchorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<DialogAnchorComponent, "fkt-dialog-host", never, { "height": { "alias": "height"; "required": false; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; "maxHeight": { "alias": "maxHeight"; "required": false; "isSignal": true; }; "maxWidth": { "alias": "maxWidth"; "required": false; "isSignal": true; }; "borderRadius": { "alias": "borderRadius"; "required": false; "isSignal": true; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; }, { "backdropClick": "backdropClick"; }, never, never, true, never>;
}

interface FktConfirmActionOptions extends FktComponentData<FktDialogConfirmActionComponent> {
    backdropClick?: () => void;
}
interface FktDialogOptions<T> {
    component: Type<T>;
    data: FktReactiveComponentData<T>;
    panelOptions?: Partial<FktReactiveComponentData<DialogAnchorComponent>>;
}

declare class FktDialogService {
    private anchorService;
    private dialogs;
    open<T>(options: FktDialogOptions<T>): {
        componentRef: ComponentRef<T>;
        close: () => void;
    };
    confirm(options: FktConfirmActionOptions): {
        componentRef: ComponentRef<FktDialogConfirmActionComponent>;
        close: () => void;
    };
    closeAll(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDialogService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<FktDialogService>;
}

declare class FktIconComponent {
    name: _angular_core.InputSignal<_frakton_ng_core.FktFontIconName>;
    protected icon: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktIconComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktIconComponent, "fkt-icon", never, { "name": { "alias": "name"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class DragAndDropDirective {
    dropped: _angular_core.OutputEmitterRef<File[]>;
    dragOverClass: _angular_core.InputSignal<string>;
    private elementRef;
    private isDraggingOver;
    protected updateClass: _angular_core.EffectRef;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DragAndDropDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DragAndDropDirective, "[appDragAndDrop]", never, { "dragOverClass": { "alias": "dragOverClass"; "required": false; "isSignal": true; }; }, { "dropped": "dropped"; }, never, never, true, never>;
}

declare class FormControlSuffixDirective {
    templateRef: TemplateRef<any>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormControlSuffixDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<FormControlSuffixDirective, "[fktFormControlSuffix]", never, {}, {}, never, never, true, never>;
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

declare class TabLazyDirective {
    template: TemplateRef<any>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabLazyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<TabLazyDirective, "[appTabLazy]", never, {}, {}, never, never, true, never>;
}

declare const fktInputTypes: readonly ["text", "password", "number", "email"];
declare const fktInputTransformers: readonly ["currency", "percent", "hour"];
type FktInputType = typeof fktInputTypes[number];
type FktInputTransformer = typeof fktInputTransformers[number] | SignalFormControlTransformer;

declare class FktInputComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string>;
    placeholder: _angular_core.InputSignal<string>;
    inputPadding: _angular_core.InputSignal<string>;
    type: _angular_core.InputSignal<"number" | "email" | "text" | "password">;
    transformer: _angular_core.InputSignal<FktInputTransformer | undefined>;
    spellcheck: _angular_core.InputSignal<boolean>;
    protected suffix: _angular_core.Signal<FormControlSuffixDirective | undefined>;
    protected showPassword: _angular_core.WritableSignal<boolean>;
    protected inputType: _angular_core.Signal<"number" | "email" | "text" | "password">;
    protected transformerValue: _angular_core.Signal<SignalFormControlTransformer | undefined>;
    element: _angular_core.Signal<ElementRef<any> | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktInputComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktInputComponent, "fkt-input", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "inputPadding": { "alias": "inputPadding"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "transformer": { "alias": "transformer"; "required": false; "isSignal": true; }; "spellcheck": { "alias": "spellcheck"; "required": false; "isSignal": true; }; }, {}, ["suffix"], never, true, never>;
}

declare class FktNavigatorComponent {
    next: _angular_core.OutputEmitterRef<void>;
    previous: _angular_core.OutputEmitterRef<void>;
    canGoToPrevious: _angular_core.InputSignal<boolean>;
    canGoToNext: _angular_core.InputSignal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktNavigatorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktNavigatorComponent, "fkt-navigator", never, { "canGoToPrevious": { "alias": "canGoToPrevious"; "required": false; "isSignal": true; }; "canGoToNext": { "alias": "canGoToNext"; "required": false; "isSignal": true; }; }, { "next": "next"; "previous": "previous"; }, never, ["*"], true, never>;
}

interface FktSelectOption {
    value: number | string;
    label: string;
}

declare class FktSelectComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string | undefined>;
    placeholder: _angular_core.InputSignal<string | undefined>;
    loading: _angular_core.InputSignal<boolean>;
    options: _angular_core.InputSignal<FktSelectOption[]>;
    noResults: _angular_core.InputSignal<FktNoResults>;
    selectOpened: _angular_core.OutputEmitterRef<void>;
    private overlayService;
    private idGenerator;
    protected labelId: string;
    protected listBoxId: string;
    protected errorId: string;
    private overlayRef;
    protected opened: _angular_core.Signal<boolean>;
    protected activeIndex: _angular_core.WritableSignal<number>;
    protected activeOptionId: _angular_core.Signal<string | null>;
    protected selectedIndex: _angular_core.Signal<number>;
    protected handleKeydown(element: HTMLDivElement, event: KeyboardEvent): undefined;
    private onKeyDownWithOverlayOpened;
    protected openOverlay(nativeElement: HTMLDivElement): void;
    protected selectedOption: _angular_core.Signal<FktSelectOption | null>;
    protected selectOption(option: FktAutocompleteOption): void;
    private closeOverlay;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktSelectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktSelectComponent, "fkt-select", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": true; "isSignal": true; }; "noResults": { "alias": "noResults"; "required": false; "isSignal": true; }; }, { "selectOpened": "selectOpened"; }, never, never, true, never>;
}

declare class FktDrawerComponent {
    opened: _angular_core.InputSignal<boolean>;
    mode: _angular_core.InputSignal<"push" | "overlay">;
    width: _angular_core.InputSignal<string>;
    backdropClick: _angular_core.OutputEmitterRef<void>;
    protected canShowOverlay: _angular_core.Signal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDrawerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDrawerComponent, "fkt-drawer", never, { "opened": { "alias": "opened"; "required": false; "isSignal": true; }; "mode": { "alias": "mode"; "required": false; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; }, { "backdropClick": "backdropClick"; }, never, ["[side-content]", "[side-main]"], true, never>;
}

declare const fktSidebarModes: readonly ["overlay", "push"];
type FktDrawerTypes = typeof fktSidebarModes[number];

declare class FktSpinnerComponent {
    size: _angular_core.InputSignal<number>;
    stroke: _angular_core.InputSignal<number>;
    color: _angular_core.InputSignal<"red" | "primary" | "yellow" | "green">;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktSpinnerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktSpinnerComponent, "fkt-spinner", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "stroke": { "alias": "stroke"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

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

export { DragAndDropDirective, FktAutocompleteComponent, FktBadgeComponent, FktBadgeSelectorComponent, FktButtonComponent, FktButtonsListComponent, FktCalendarComponent, FktCalendarNavigatorComponent, FktCardComponent, FktCheckboxComponent, FktDatePickerComponent, FktDialogService, FktDrawerComponent, FktIconComponent, FktInputComponent, FktNavigatorComponent, FktNoResultsComponent, FktSelectComponent, FktSpinnerComponent, FktTextareaComponent, FormControlSuffixDirective, SignalFormControlDirective, TabLazyDirective, fktBadgeColors, fktBadgeVariants, fktButtonThemes, fktButtonVariants, fktCalendarNavigatorModes, fktCalendarStep, fktColors, fktInputTransformers, fktInputTypes, fktSidebarModes };
export type { AbstractSignalControl, ArrayBuilderConfigToSignalFormArray, FktAutocompleteOption, FktBadge, FktBadgeColor, FktBadgeVariant, FktButtonAction, FktButtonTheme, FktButtonVariant, FktCalendarDateConfig, FktCalendarDateConfigFn, FktCalendarDateOptions, FktCalendarNavigatorMode, FktCalendarStep, FktColor, FktComponentData, FktComponentInputNames, FktComponentInputs, FktComponentOutputNames, FktComponentOutputs, FktComponentTwoWayBindingNames, FktComponentTwoWayBindings, FktConfirmActionOptions, FktDialogOptions, FktDrawerTypes, FktExtractNonUndefined, FktExtractUndefined, FktFontIconName, FktGeometryOffset, FktGeometryPoint, FktGeometryPosition, FktGeometryPositionCalculationFn, FktGeometryRect, FktGeometrySize, FktIconName, FktIdentifiable, FktInferFormValue, FktInferFormValueFn, FktInputTransformer, FktInputType, FktMenuGroup, FktMenuItem, FktNoResults, FktOrSignal, FktReactiveComponentData, FormBuilderConfigToSignalFormGroup, InterfaceToFormConfig, SignalFormArrayBuilderConfig, SignalFormArrayControlValue, SignalFormArrayControls, SignalFormBuilderPermissiveConfig, SignalFormBuilderPermissiveWithValidators, SignalFormControlBuilderConfig, SignalFormGroupBuilderConfig, SignalFormGroupControls, SignalFormGroupValue, SignalValidatorConfig, SignalValidatorFn, SignalValidatorFnOptions, TypeToSignalFormControls, TypeToSignalFormGroupControls };
