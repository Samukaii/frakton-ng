import {
    computed,
    Directive,
    input,
    model,
    signal,
} from '@angular/core';
import { FktFieldControl } from 'frakton-ng/internal/directives';
import { FktFieldControlStateErrors } from 'frakton-ng/internal/types';
import { FktSelectSelectionDirective } from './fkt-select-selection.directive';
import { FktSelectContextDirective } from './fkt-select-context.directive';

@Directive({
    selector: '[fktSelectControl]',
    exportAs: 'selectControl',
    providers: [
        {
            provide: FktFieldControl,
            useExisting: FktSelectControlDirective,
        },
    ],
    host: {
        '[id]': 'id',
        '[class.fkt-control-field]': 'true',
        '[attr.tabindex]': 'disabled() ? -1 : 0',
        '[attr.aria-expanded]': 'context().dropdownOpened()',
        '[attr.aria-controls]': 'context().listBoxId',
        '[attr.aria-activedescendant]': 'activeDescendantId()',
        '[attr.aria-disabled]': 'disabled()',
        '[attr.aria-invalid]': 'invalid()',
        '(focus)': 'focused.set(true)',
        '(blur)': 'onBlur()',
    },
})
export class FktSelectControlDirective {
    readonly errors = input.required<FktFieldControlStateErrors>();
    readonly disabled = input(false);
    readonly invalid = input(false);
    readonly required = input(false);
    readonly maxLength = input<number | null>(null);
    readonly isTouched = model(false);
    readonly activeDescendantId = input('');

    readonly context = input.required<FktSelectContextDirective<any>>();
    readonly selection = input.required<FktSelectSelectionDirective<any>>();

    private static counter = 0;
    readonly id = `fkt-select-control-${FktSelectControlDirective.counter++}`;

    readonly focused = signal(false);
    readonly touched = computed(() => this.isTouched());
    readonly value = computed(() => this.context().value());
    readonly hasValue = computed(() => this.selection().hasValue());

    setValue(value: string | number | (string | number)[]) {
        this.selection().updateValue(value);
    }

    protected onBlur() {
        this.focused.set(false);
        this.isTouched.set(true);
    }
}
