import {
    computed,
    Directive,
    signal,
} from '@angular/core';
import {
    FktFieldControl,
    FktTextFieldControl,
} from 'frakton-ng/internal/directives';
import { injectCompatFormState } from 'frakton-ng/internal/di';

@Directive({
    selector: 'input[fktInputText]',
    providers: [
        { provide: FktFieldControl, useExisting: FktInputTextDirective },
        { provide: FktTextFieldControl, useExisting: FktInputTextDirective },
    ],
    host: {
        '[class.fkt-control-field]': 'true',
        '(focus)': 'focused.set(true)',
        '(blur)': 'focused.set(false)',
        '[id]': 'id',
    },
})
export class FktInputTextDirective implements FktTextFieldControl {
    private state = injectCompatFormState<string>();

    private static id = 0;

    id = `fkt-input-text-${FktInputTextDirective.id++}`;

    focused = signal(false);

    value = computed(() => {
        return this.state.value();
    });

    hasValue = computed(() => !!this.value());

    setValue(value: string) {
        this.state?.setValue?.(value);
    }

    invalid = computed(() => {
        return this.state.invalid();
    });

    touched = computed(() => {
        return this.state.touched();
    });

    disabled = computed(() => {
        return this.state.disabled();
    });

    required = computed(() => {
        return this.state.required();
    });

    maxLength = computed(() => {
        return this.state.maxLength();
    });

    errors = computed(() => {
        return this.state.errors();
    });
}
