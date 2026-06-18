import { computed, Directive, input } from '@angular/core';
import {
    FktFieldControl,
    FktTextFieldControl,
} from './fkt-field-control.directive';

@Directive({
    selector: '[fktFieldControlPropagator]',
    providers: [
        { provide: FktFieldControl, useExisting: FktFieldControlPropagator },
        {
            provide: FktTextFieldControl,
            useExisting: FktFieldControlPropagator,
        },
    ],
})
export class FktFieldControlPropagator<T> implements FktFieldControl<T> {
    state = input<FktFieldControl<T>>();

    get id() {
        return this.state()?.id ?? '';
    }

    focused = computed(() => {
        return this.state()?.focused() ?? false;
    });

    value = computed(() => {
        return this.state()?.value() ?? null;
    });

    hasValue = computed(() => !!this.state()?.hasValue())

    setValue(value: T) {
        this.state()?.setValue?.(value);
    }

    invalid = computed(() => {
        return this.state()?.invalid() ?? false;
    });

    touched = computed(() => {
        return this.state()?.touched() ?? false;
    });

    disabled = computed(() => {
        return this.state()?.disabled() ?? false;
    });

    required = computed(() => {
        return this.state()?.required() ?? false;
    });

    maxLength = computed(() => {
        return this.state()?.maxLength() ?? Infinity;
    });

    errors = computed(() => {
        return this.state()?.errors() ?? null;
    });
}
