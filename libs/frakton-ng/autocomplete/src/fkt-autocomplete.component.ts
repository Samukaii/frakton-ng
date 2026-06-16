import {
    AfterViewInit,
    booleanAttribute,
    Component,
    computed,
    contentChild,
    effect,
    inject,
    input,
    Optional,
    Self,
    viewChild,
} from '@angular/core';
import {
    FktErrorDirective,
    FktFieldComponent,
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteSearchDirective } from './directives/fkt-autocomplete-search.directive';
import { FktAutocompleteValue } from './fkt-autocomplete.types';
import { FktAutocompleteOverlayDirective } from './directives/fkt-autocomplete-overlay.directive';
import { FktAutocompleteSelectionDirective } from './directives/fkt-autocomplete-selection.directive';
import { FktAutocompleteStoreService } from './services/fkt-autocomplete-store.service';
import { FktAutocompleteContextDirective } from './directives/fkt-autocomplete-context.directive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { injectCompatFormStateWithoutNative } from 'frakton-ng/internal/di';
import {
    FktAutocompleteWritableValue,
    normalizeWrittenAutocompleteValue,
} from './utils/normalize-written-autocomplete-value';
import { FktAutocompleteChipsComponent } from './components/chips/fkt-autocomplete-chips.component';
import { FktAutocompleteActionButtonComponent } from './components/action-button/fkt-autocomplete-action-button.component';

@Component({
    selector: 'fkt-autocomplete',
    imports: [
        FktFieldComponent,
        FktAutocompleteSearchDirective,
        FktAutocompleteChipsComponent,
        FktAutocompleteActionButtonComponent,
        FktFieldPrefixDirective,
        FktHintStartDirective,
        FktHintEndDirective,
        FktErrorDirective,
        FktFieldSuffixDirective,
    ],
    templateUrl: './fkt-autocomplete.component.html',
    styleUrl: './fkt-autocomplete.component.scss',
    providers: [FktAutocompleteStoreService],
    hostDirectives: [
        {
            directive: FktAutocompleteContextDirective,
            inputs: [
                'label',
                'searchDebounce',
                'minSearch',
                'options',
                'labelKey',
                'valueKey',
                'groupKey',
                'localSearch',
                'loading',
                'multiple',
                'listHeight',
                'placeholder',
                'freeText',
                'isDropdownOpened',
                'hint',
                'showError',
                'size',
                'requiredMarker',
                'hideLabel'
            ],
            outputs: ['isDropdownOpenedChange', 'searchChange'],
        },
        FktAutocompleteOverlayDirective,
        FktAutocompleteSelectionDirective,
    ],
    host: {
        '(click)': 'onClick()',
    },
})
export class FktAutocompleteComponent<Option extends Generic | string>
    implements ControlValueAccessor, AfterViewInit
{
    protected readonly formState = injectCompatFormStateWithoutNative();

    protected readonly searchInput = viewChild.required(
        FktAutocompleteSearchDirective<Option>
    );

    protected readonly field = viewChild.required(FktFieldComponent);

    protected readonly context = inject(
        FktAutocompleteContextDirective<Option>
    );

    protected readonly selectionService = inject(
        FktAutocompleteSelectionDirective
    );

    protected readonly store = inject(FktAutocompleteStoreService);

    protected readonly hintStartDirective = contentChild(FktHintStartDirective);
    protected readonly hintEndDirective = contentChild(FktHintEndDirective);
    protected readonly errorDirective = contentChild(FktErrorDirective);
    protected readonly fieldPrefixDirective = contentChild(
        FktFieldPrefixDirective
    );

    private onChange?: (value: FktAutocompleteValue) => void;
    protected onTouched?: () => void;

    protected readonly hasValue = computed(
        () =>
            !!this.context.search().value() || this.selectionService.hasValue()
    );

    private readonly callOnChangeWhenValueChanges = effect(() => {
        this.onChange?.(this.context.value());
    });

    constructor(@Self() @Optional() public ngControl: NgControl) {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    ngAfterViewInit() {
        this.context.search().setInstance(this.searchInput());
        this.context.fieldContainer.set(this.field().container());
    }

    writeValue(value: FktAutocompleteWritableValue<Option>): void {
        const normalized = normalizeWrittenAutocompleteValue(value, {
            multiple: this.context.multiple(),
            valueKey: this.context.valueKey(),
        });

        this.selectionService.updateValue(normalized.value);
        if (normalized.preloadedOptions.length) {
            this.context.preloadedOptions.set(normalized.preloadedOptions);

            // Intentionally emits from writeValue to canonicalize object options
            // into primitive form values. The value signal equality prevents loops
            // when the canonical value is unchanged.
            this.onChange?.(this.context.value());
        }

        this.selectionService.updateVisible();
        this.store.query.set('');
    }

    registerOnChange(fn: (value: FktAutocompleteValue) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    protected onClick() {
        if (this.formState?.disabled()) return;

        this.context.openDropdown();
        this.context.search().focus();
    }
}
