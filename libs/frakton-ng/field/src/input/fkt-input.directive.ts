import { computed, Directive, signal } from '@angular/core';
import { FktFieldControl } from 'frakton-ng/internal/directives';
import { injectCompatFormState } from 'frakton-ng/internal/di';


@Directive({
    selector: 'input[fktInput], textarea[fktInput]',
    providers: [{ provide: FktFieldControl, useExisting: FktInputDirective }],
    host: {
        '[class.fkt-control-field]': 'true',
        '(focus)': 'focused.set(true)',
        '(blur)': 'focused.set(false)',
        '[id]': 'id',
    },
})
export class FktInputDirective<T> implements FktFieldControl<T> {
    private state = injectCompatFormState<T>();

    private static id = 0;

    id = `fkt-input-${FktInputDirective.id++}`;

    focused = signal(false);

    value = computed(() => {
        return this.state.value();
    });

    invalid = computed(() => {
        return this.state.invalid();
    });

    touched = computed(() => {
        return this.state.touched();
    });

    disabled = computed(() => {
        return this.state.disabled();
    });

    errors = computed(() => {
        return this.state.errors();
    });
}
