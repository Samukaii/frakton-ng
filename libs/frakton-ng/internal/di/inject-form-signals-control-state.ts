import { computed, inject } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FktFieldControlState } from 'frakton-ng/internal/types';
import { normalizeSignalValidationError } from 'frakton-ng/internal/utils';

export function injectFormSignalsControlState<
    T
>(): FktFieldControlState<T> | null {
    const formSignalsControl = inject(Field<T>, { optional: true, self: true });

    if (!formSignalsControl) {
        return null;
    }

    const state = formSignalsControl.state

    return {
        value: computed(() => state().value() as T),
        disabled: computed(() => state().disabled()),
        touched: computed(() => state().touched()),
        invalid: computed(() => state().invalid()),
        required: computed(() => state().required()),
        errors: computed(() => {
            const errors = state().errors();

            if(!errors.length) return null;

            return {
                source: 'signal',
                errors: errors.map(error => normalizeSignalValidationError(error))
            };
        }),
    };
}

