import { Directive, Signal } from '@angular/core';
import {
    FktFieldControlState,
    FktFieldControlStateErrors,
} from 'frakton-ng/internal/types';

@Directive()
export abstract class FktFieldControl<T> implements FktFieldControlState<T> {
    abstract id: string;
    abstract focused: Signal<boolean>;
    abstract value: Signal<T | null>;
    abstract disabled: Signal<boolean>;
    abstract invalid: Signal<boolean>;
    abstract touched: Signal<boolean>;
    abstract required: Signal<boolean>;
    abstract maxLength: Signal<number | null>;
    abstract errors: Signal<FktFieldControlStateErrors>;
}

@Directive()
export abstract class FktTextFieldControl extends FktFieldControl<string> {
    abstract override maxLength: Signal<number | null>;
}
