import { DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { FktFieldControlState } from 'frakton-ng/internal/types';

function readNativeValue<T>(
    element: HTMLInputElement | HTMLTextAreaElement
): T {
    if (element instanceof HTMLInputElement) {
        if (element.type === 'checkbox') {
            return element.checked as T;
        }

        if (element.type === 'number') {
            const value = element.value;

            return (value === '' ? null : element.valueAsNumber) as T;
        }
    }

    return element.value as T;
}

function readNativeInvalid(
    element: HTMLInputElement | HTMLTextAreaElement
): boolean {
    const ariaInvalid = element.getAttribute('aria-invalid');

    if (ariaInvalid === 'true') return true;
    if (ariaInvalid === 'false') return false;

    return !element.validity.valid;
}

export function injectNativeInputState<T>(): {
    state: FktFieldControlState<T>;
    listen: () => void;
} {
    const element = inject(ElementRef).nativeElement as
        | HTMLInputElement
        | HTMLTextAreaElement;
    const destroyRef = inject(DestroyRef);

    const value = signal(readNativeValue<T>(element));
    const disabled = signal(element.disabled);
    const invalid = signal(readNativeInvalid(element));
    const touched = signal(false);
    const required = signal(element.required);

    const state: FktFieldControlState<T> = {
        value: value.asReadonly(),
        disabled: disabled.asReadonly(),
        invalid: invalid.asReadonly(),
        touched: touched.asReadonly(),
        required: required.asReadonly(),
        errors: signal(null)
    };

    const listen = () => {
        const sync = () => {
            value.set(readNativeValue<T>(element));
            disabled.set(element.disabled);
            invalid.set(readNativeInvalid(element));
            required.set(element.required);
        };

        const markTouched = () => {
            touched.set(true);
            sync();
        };

        queueMicrotask(sync);
        const observer = new MutationObserver(sync);

        element.addEventListener('input', sync);
        element.addEventListener('change', sync);
        element.addEventListener('blur', markTouched);

        observer.observe(element, {
            attributes: true,
            attributeFilter: [
                'value',
                'disabled',
                'required',
                'readonly',
                'aria-invalid',
                'class',
            ],
        });

        destroyRef.onDestroy(() => {
            element.removeEventListener('input', sync);
            element.removeEventListener('change', sync);
            element.removeEventListener('blur', markTouched);
            observer.disconnect();
        });
    };

    return { state, listen };
}
