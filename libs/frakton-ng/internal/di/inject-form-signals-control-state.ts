import {
    afterNextRender,
    computed,
    DestroyRef,
    ElementRef,
    inject,
    signal,
} from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FktFieldControlState } from 'frakton-ng/internal/types';
import { normalizeSignalValidationError } from 'frakton-ng/internal/utils';

const readMaxLength = (
    element: HTMLInputElement | HTMLTextAreaElement
): number | null => {
    return element.maxLength >= 0 ? element.maxLength : null;
};

export function injectFormSignalsControlState<
    T
>(): FktFieldControlState<T> | null {
    const formSignalsControl = inject(Field<T>, { optional: true, self: true });

    if (!formSignalsControl) {
        return null;
    }

    const state = formSignalsControl.state
    const element = inject<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
        ElementRef
    ).nativeElement;
    const destroyRef = inject(DestroyRef);
    const maxLength = signal(readMaxLength(element));

    afterNextRender(() => {
        const syncMaxLength = () => {
            maxLength.set(readMaxLength(element));
        };

        const observer = new MutationObserver(syncMaxLength);

        syncMaxLength();
        observer.observe(element, {
            attributes: true,
            attributeFilter: ['maxlength'],
        });

        destroyRef.onDestroy(() => {
            observer.disconnect();
        });
    });

    return {
        value: computed(() => state().value() as T),
        disabled: computed(() => state().disabled()),
        touched: computed(() => state().touched()),
        invalid: computed(() => state().invalid()),
        required: computed(() => state().required()),
        maxLength: maxLength.asReadonly(),
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

