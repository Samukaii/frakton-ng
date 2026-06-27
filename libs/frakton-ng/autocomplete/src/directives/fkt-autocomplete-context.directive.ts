import {
    booleanAttribute,
    computed,
    Directive,
    effect,
    ElementRef,
    input,
    output,
    signal,
} from '@angular/core';
import { Distribute, Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteGroupKey,
    FktAutocompleteLabelKey,
    FktAutocompleteSearchBy,
    FktAutocompleteValue,
    FktAutocompleteValueKey,
} from '../fkt-autocomplete.types';
import { FktAutocompleteSearchDirective } from './fkt-autocomplete-search.directive';
import { mergeByValueKey } from '../utils/merge-by-value-key';

@Directive({ selector: 'fkt-autocomplete[fktAutocompleteContext]' })
export class FktAutocompleteContextDirective<Option extends Generic | string> {
    value = signal<FktAutocompleteValue>(null);

    dropdownOpened = signal(false);
    dropdownOpenChange = output<boolean>();
    private previousDropdownOpened = this.dropdownOpened();

    private readonly emitDropdownOpenChange = effect(() => {
        const opened = this.dropdownOpened();

        if (opened === this.previousDropdownOpened) return;

        this.previousDropdownOpened = opened;
        this.dropdownOpenChange.emit(opened);
    });
    label = input.required<string>();
    placeholder = input<string>();
    options = input.required<Distribute<Option>>();
    listHeight = input(300);
    hint = input<string>();
    showError = input<boolean>();
    size = input<'sm' | 'md' | 'lg'>('md');
    requiredMarker = input<boolean>();
    hideLabel = input(false, {
        transform: booleanAttribute,
    });

    labelKey = input<FktAutocompleteLabelKey<Option>>();
    valueKey = input<FktAutocompleteValueKey<Option>>();
    groupKey = input<FktAutocompleteGroupKey<Option>>();

    localSearch = input(false, {
        transform: (value: unknown) => {
            if (value === false) return false;

            if (value === '' || value === true) return true;

            return value as FktAutocompleteSearchBy<Option>;
        },
    });

    minSearch = input(0);
    searchDebounce = input(0);

    loading = input(false);

    multiple = input(false, {
        transform: booleanAttribute,
    });

    freeText = input(false, {
        transform: booleanAttribute,
    });

    searchChange = output<string>();

    private static idCounter = 0;
    readonly id = `fkt-autocomplete-search-${FktAutocompleteContextDirective.idCounter++}`;
    readonly listBoxId = `fkt-autocomplete-list-box-id-${FktAutocompleteContextDirective.idCounter++}`;

    readonly preloadedOptions = signal<Option[]>([]);
    readonly fieldContainer = signal<ElementRef<HTMLElement> | null>(null);

    readonly lookupOptions = computed((): Option[] => {
        const allOptions = [
            ...this.options(),
            ...this.preloadedOptions(),
        ] as Option[];

        return mergeByValueKey(allOptions, this.valueKey());
    });

    private readonly searchInput =
        signal<FktAutocompleteSearchDirective<Option> | null>(null);

    readonly search = computed(() => {
        const input = this.searchInput();

        return {
            value: computed(() => input?.value() ?? ''),
            focus: () => {
                input?.focus();
            },
            setValue: (value: string) => {
                input?.setValue(value);
            },
            setInstance: (input: FktAutocompleteSearchDirective<Option>) => {
                this.searchInput.set(input);
            },
            clear: () => {
                input?.setValue('');
            },
        };
    });

    openDropdown() {
        this.dropdownOpened.set(true);
    }

    closeDropdown() {
        this.dropdownOpened.set(false);
    }
}
