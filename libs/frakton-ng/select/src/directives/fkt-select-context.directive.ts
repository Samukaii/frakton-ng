import {
    booleanAttribute,
    computed,
    Directive,
    effect,
    ElementRef,
    input,
    model,
    output,
    signal,
} from '@angular/core';
import { Distribute, Generic } from 'frakton-ng/internal/types';
import {
    FktSelectGroupKey,
    FktSelectLabelKey,
    FktSelectValue,
    FktSelectValueKey,
} from '../fkt-select.types';
import { mergeSelectOptions } from '../utils/merge-select-options';

@Directive({ selector: 'fkt-select[fktSelectContext]' })
export class FktSelectContextDirective<Option extends Generic | string | number> {
    readonly value = model<FktSelectValue>(null);
    readonly preloadedOptions = signal<Option[]>([]);
    readonly fieldContainer = signal<ElementRef<HTMLElement> | null>(null);

    readonly dropdownOpened = signal(false);
    readonly hideClearButton = input(false, {
        transform: booleanAttribute
    })
    readonly dropdownOpenChange = output<boolean>();
    private previousDropdownOpened = this.dropdownOpened();

    private readonly emitDropdownOpenChange = effect(() => {
        const opened = this.dropdownOpened();

        if (opened === this.previousDropdownOpened) return;

        this.previousDropdownOpened = opened;
        this.dropdownOpenChange.emit(opened);
    });
    readonly label = input.required<string>();
    readonly placeholder = input<string>();
    readonly options = input.required<Distribute<Option>>();
    readonly labelKey = input<FktSelectLabelKey<Option>>();
    readonly valueKey = input<FktSelectValueKey<Option>>();
    readonly groupKey = input<FktSelectGroupKey<Option>>();
    readonly loading = input(false);
    readonly disabled = input(false, { transform: booleanAttribute });
    readonly multiple = input(false, { transform: booleanAttribute });
    readonly listHeight = input(300);

    readonly hint = input<string>();
    readonly showError = input<boolean>();
    readonly size = input<'sm' | 'md' | 'lg'>('md');
    readonly requiredMarker = input<boolean>();
    readonly hideLabel = input(false, { transform: booleanAttribute });

    readonly lookupOptions = computed(() =>
        mergeSelectOptions(
            [...this.options(), ...this.preloadedOptions()] as Option[],
            this.valueKey()
        )
    );

    private static idCounter = 0;
    readonly id = `fkt-select-${FktSelectContextDirective.idCounter++}`;
    readonly listBoxId = `${this.id}-listbox`;

    openDropdown() {
        this.dropdownOpened.set(true);
    }

    closeDropdown() {
        this.dropdownOpened.set(false);
    }
}
