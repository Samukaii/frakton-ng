import { afterNextRender, computed, DestroyRef, inject, signal } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FktFieldControlState } from 'frakton-ng/internal/types';
import { normalizeReactiveValidationError } from 'frakton-ng/internal/utils';

export function injectReactiveFormsControlState<T>(): {
    state: FktFieldControlState<T>;
    listen: () => void;
} | null {
    const formControlName = inject(FormControlName, {
        optional: true,
        self: true,
    });
    const formControl = inject(FormControlDirective, {
        optional: true,
        self: true,
    });
    const ngModel = inject(NgModel, { optional: true, self: true });

    const controlDirective = formControlName ?? formControl ?? ngModel;

    const destroyRef = inject(DestroyRef);

    if (!controlDirective) return null;

    const value = signal<T | null>(null);
    const disabled = signal(false);
    const touched = signal(false);
    const invalid = signal(false);
    const required = signal(false);
    const rawErrors = signal<Record<string, any> | null>(null);

    const inferRequired = (control: AbstractControl): boolean => {
        const validator = control.validator;

        if (!validator) return false;

        const probe = Object.create(control) as AbstractControl;

        Object.defineProperty(probe, 'value', {
            configurable: true,
            get: () => null,
        });

        return validator(probe)?.['required'] === true;
    };

    const getFieldName = (control: AbstractControl) => {
        const controls = control.parent?.controls;

        if (!controls) return;

        if (Array.isArray(controls)) return;

        return Object.keys(controls).find(
            (key) => controls[key as keyof typeof controls] === control
        );
    };

    const normalizedErrors: FktFieldControlState<T>['errors'] = computed(() => {
        const errorsObject = rawErrors();

        if (!errorsObject) return null;

        const entries = Object.entries(errorsObject);

        const name = getFieldName(controlDirective.control);

        const errors = entries.map(([key, value]) =>
            normalizeReactiveValidationError(key, value, {
                name,
                control: controlDirective.control,
            })
        );

        return {
            source: 'reactive',
            errors
        }
    })

    const state: FktFieldControlState<T> = {
        value: value.asReadonly(),
        disabled: disabled.asReadonly(),
        invalid: invalid.asReadonly(),
        touched: touched.asReadonly(),
        required: required.asReadonly(),
        errors: normalizedErrors,
    };

    const listen = () => {
        const sync = () => {
            const control = controlDirective.control;

            if (!control) return;

            value.set(control.value as T);
            disabled.set(control.disabled);
            touched.set(control.touched);
            invalid.set(control.invalid);
            required.set(inferRequired(control));
            rawErrors.set(control.errors);
        };

        afterNextRender(() => {
            const control = controlDirective.control;

            sync();

            if (!control) return;

            control.events.pipe(takeUntilDestroyed(destroyRef)).subscribe(sync);
        });
    };

    return { state, listen };
}
