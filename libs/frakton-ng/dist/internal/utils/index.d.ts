import { FormControl, ValidationErrors } from '@angular/forms';
import { Signal, Type, Binding } from '@angular/core';
import { FktReactiveComponentData, FktGeometryRect, FktGeometryPosition, FktGeometryPositionCalculationFn } from 'frakton-ng/internal/types';

declare const clampNumber: (value: number, min: number, max: number) => number;

declare const normalizeLevels: {
    readonly year: (date: Date) => Date;
    readonly month: (date: Date) => Date;
    readonly date: (date: Date) => Date;
    readonly hour: (date: Date) => Date;
    readonly minute: (date: Date) => Date;
    readonly seconds: (date: Date) => Date;
};
type NormalizeLevel = keyof typeof normalizeLevels;
declare const normalizeDate: (date: Date | string, level: NormalizeLevel) => Date;

declare const compareDates: (first: Date | string, second: Date | string, level?: NormalizeLevel) => "equal" | "first-is-greater" | "second-is-greater";

interface ControlErrorsSignal {
    (control: FormControl | Signal<FormControl>): Signal<ValidationErrors | null>;
}
declare const controlErrorsSignal: ControlErrorsSignal;

declare const createComponentBindings: <T>(component: Type<T>, data: Partial<FktReactiveComponentData<T>>) => Binding[];

declare const isNumber: (value: unknown) => value is number;

declare const MarkUsed: () => PropertyDecorator;

interface OutsideClickEffectOptions {
    excludeIdsOrElements?: (string | HTMLElement)[];
}
declare const outsideClickEffect: (fn: (element: EventTarget) => void, options?: OutsideClickEffectOptions) => {
    destroy: () => void;
};

interface OutsideMouseEnterEffectOptions {
    excludeIds?: string[];
}
declare const outsideMouseEnterWatcher: (options?: OutsideMouseEnterEffectOptions) => {
    watch: (fn: () => void) => void;
    stop: () => void;
};

/**
 * Verifica se o elemento "target" está contido dentro do "container".
 * Isso inclui casos em que o target é o próprio container.
 */
declare function isElementInside(target: HTMLElement, container: HTMLElement): boolean;

interface ElementSizeSignalFunction {
    (element: HTMLElement, options: {
        startWithNull: true;
    }): Signal<FktGeometryRect | null>;
    (element: HTMLElement, options?: {
        startWithNull?: false;
    }): Signal<FktGeometryRect>;
}
declare const elementSizeSignal: ElementSizeSignalFunction;

declare const isValidDateString: (dateString: string) => boolean;

declare const wait: (time: number) => Promise<void>;

declare const isIsoDateString: (str: string) => boolean;

declare const geometryPositionCalculations: Record<FktGeometryPosition, FktGeometryPositionCalculationFn>;

export { MarkUsed, clampNumber, compareDates, controlErrorsSignal, createComponentBindings, elementSizeSignal, geometryPositionCalculations, isElementInside, isIsoDateString, isNumber, isValidDateString, normalizeDate, outsideClickEffect, outsideMouseEnterWatcher, wait };
export type { NormalizeLevel };
