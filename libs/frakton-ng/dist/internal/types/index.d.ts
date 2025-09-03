import { ModelSignal, InputSignal, OutputEmitterRef, WritableSignal, Signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

type FktComponentInputNames<T> = {
    [Key in keyof T]: T[Key] extends ModelSignal<any> ? never : T[Key] extends InputSignal<any> ? Key : never;
}[keyof T];

type FktExtractNonUndefined<T> = {
    [Key in keyof T]: undefined extends T[Key] ? never : Key;
}[keyof T];

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

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

type FktInferFormValue<T extends FormGroup> = ReturnType<T['getRawValue']>;

type FktInferFormValueFn<T extends (...args: any[]) => FormGroup> = FktInferFormValue<ReturnType<T>>;

type FktOrSignal<T> = {
    [K in keyof T]: T[K] | Signal<T[K]>;
};

type FktReactiveComponentData<T> = Prettify<FktOrSignal<FktComponentInputs<T>> & Partial<FktComponentOutputs<T>> & FktComponentTwoWayBindings<T>>;

type Generic = Record<string, any>;

export { fktGeometryPositions };
export type { FktComponentData, FktComponentInputNames, FktComponentInputs, FktComponentOutputNames, FktComponentOutputs, FktComponentTwoWayBindingNames, FktComponentTwoWayBindings, FktExtractNonUndefined, FktExtractUndefined, FktGeometryOffset, FktGeometryPoint, FktGeometryPosition, FktGeometryPositionCalculationFn, FktGeometryRect, FktGeometrySize, FktInferFormValue, FktInferFormValueFn, FktOrSignal, FktReactiveComponentData, Generic, Prettify };
