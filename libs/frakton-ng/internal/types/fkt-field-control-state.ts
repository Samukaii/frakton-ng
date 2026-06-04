import { Signal } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { AbstractControl } from '@angular/forms';

export type FktFieldControlStateErrors =
    | (
          | {
                source: 'reactive';
                errors: {
                    kind: string;
                    message?: string;
                    name?: string;
                    field: Signal<AbstractControl>;
                }[];
            }
          | {
                source: 'signal';
                errors: {
                    kind: string;
                    message?: string;
                    name?: string;
                    field: FieldTree<unknown>;
                }[];
            }
      )
    | null;

export interface FktFieldControlState<T> {
    value: Signal<T | null>;
    disabled: Signal<boolean>;
    invalid: Signal<boolean>;
    touched: Signal<boolean>;
    errors: Signal<FktFieldControlStateErrors>;
}
