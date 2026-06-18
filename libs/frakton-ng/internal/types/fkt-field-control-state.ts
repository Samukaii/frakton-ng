import { Signal } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { AbstractControl } from '@angular/forms';

export interface FktNormalizedValidationError<TField = unknown> {
    kind: string;
    message?: string;
    name?: string;
    params: Record<string, unknown>;
    raw: unknown;
    field?: TField;
}

export type FktFieldControlStateErrors =
    | (
          | {
                source: 'reactive';
                errors: FktNormalizedValidationError<Signal<AbstractControl>>[];
            }
          | {
                source: 'signal';
                errors: FktNormalizedValidationError<FieldTree<unknown>>[];
            }
      )
    | null;

export interface FktFieldControlState<T> {
    value: Signal<T | null>;
    disabled: Signal<boolean>;
    invalid: Signal<boolean>;
    touched: Signal<boolean>;
    required: Signal<boolean>;
    maxLength: Signal<number | null>;
    errors: Signal<FktFieldControlStateErrors>;
    setValue: (value: T) => void;
}
