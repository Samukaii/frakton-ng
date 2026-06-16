import {
    computed,
    Directive,
    ElementRef,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import {
    FktFieldControl,
    FktTextFieldControl,
} from 'frakton-ng/internal/directives';
import { injectCompatFormState } from 'frakton-ng/internal/di';
import { FktFieldControlStateErrors, Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteKeyboardDirective } from './fkt-autocomplete-keyboard.directive';
import { FktAutocompleteSelectionDirective } from './fkt-autocomplete-selection.directive';
import { FktAutocompleteStoreService } from '../services/fkt-autocomplete-store.service';
import { FktAutocompleteContextDirective } from './fkt-autocomplete-context.directive';

@Directive({
    selector: 'input[fktAutocompleteSearch]',
    providers: [
        {
            provide: FktFieldControl,
            useExisting: FktAutocompleteSearchDirective,
        },
    ],
    hostDirectives: [FktAutocompleteKeyboardDirective],
    host: {
        '[id]': 'id',
        'aria-autocomplete': 'list',
        '[class.fkt-control-field]': 'true',
        '[attr.aria-activedescendant]': 'store.activeDescendant.id()',
        '[disabled]': 'disabled()',
        '[attr.aria-invalid]': 'invalid()',
        '(input)': 'onInputChange()',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
    },
})
export class FktAutocompleteSearchDirective<Option extends Generic | string>
    implements FktTextFieldControl
{
    errors = input<FktFieldControlStateErrors>({
        errors: [],
        source: 'reactive',
    });

    hasValue = input.required<boolean>();
    isTouched = model<boolean>(false);
    disabled = input(false);
    invalid = input(false);
    required = input(false);
    maxLength = input<number | null>(null);

    private state = injectCompatFormState<string>();
    protected store = inject(FktAutocompleteStoreService<Option>);
    readonly elementRef = inject(ElementRef);

    private readonly selectionService = inject(
        FktAutocompleteSelectionDirective
    );
    protected readonly context = inject(
        FktAutocompleteContextDirective<Option>
    );

    id = this.context.id;

    focused = signal(false);

    value = computed(() => {
        return this.state.value();
    });

    touched = computed(() => {
        return this.isTouched();
    });

    setValue(value: string) {
        this.state.setValue(value);
    }

    focus() {
        this.elementRef.nativeElement.focus();
    }

    protected onFocus() {
        this.focused.set(true);
    }

    protected onBlur() {
        this.isTouched.set(true);
        this.focused.set(false);
    }

    protected onInputChange() {
        if (this.state.value()) this.context.openDropdown();
    }
}
