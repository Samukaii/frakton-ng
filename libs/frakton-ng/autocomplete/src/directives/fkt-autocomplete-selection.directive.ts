import { computed, Directive, inject } from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteOption,
    FktAutocompleteValue,
} from '../fkt-autocomplete.types';
import { normalizeAutocompleteValue } from '../utils/normalize-autocomplete.value';
import { FktAutocompleteStoreService } from '../services/fkt-autocomplete-store.service';
import { FktAutocompleteContextDirective } from './fkt-autocomplete-context.directive';

@Directive({ selector: 'fkt-autocomplete[fktAutocompleteSelection]' })
export class FktAutocompleteSelectionDirective<
    Option extends Generic | string
> {
    private readonly context = inject(FktAutocompleteContextDirective);
    private readonly store = inject<FktAutocompleteStoreService<Option>>(
        FktAutocompleteStoreService
    );

    readonly normalizedValue = computed(() =>
        normalizeAutocompleteValue(
            this.context.value(),
            this.context.multiple()
        )
    );

    readonly hasValue = computed(() => this.normalizedValue().length > 0);

    readonly selectedOptions = computed(() => {
        const value = this.normalizedValue();
        const options = this.store.lookupMappedOptions();

        return value.map((item, index): FktAutocompleteOption<Option> => {
            const existentOption = options.find(
                (option) => option.value === item
            );

            if (existentOption) return existentOption;

            return {
                label: item.toString(),
                value: item,
                raw: null,
                index,
            };
        });
    });

    clearSelection() {
        this.context.search().clear();
        this.updateValue(null);
    }

    selectItem(option: FktAutocompleteOption<Option>) {
        if (this.context.multiple()) this.toggleMultipleItem(option);
        else this.selectSingleItem(option);
    }

    removeItem(option: FktAutocompleteOption<Option>) {
        const normalizedValue = this.normalizedValue();

        this.updateValue(
            normalizedValue.filter((value) => value !== option.value)
        );
    }

    removeLastItem() {
        const normalizedValue = [...this.normalizedValue()];
        normalizedValue.pop();

        this.updateValue(normalizedValue);
    }

    addItemValue(value: string | number) {
        if (this.context.multiple()) this.addMultipleItemValue(value);
        else this.addSingleItemValue(value);
    }

    updateValue(value: FktAutocompleteValue) {
        const normalized = Array.from(
            new Set(normalizeAutocompleteValue(value, this.context.multiple()))
        );

        if (this.context.multiple()) this.context.value.set(normalized);
        else this.context.value.set(normalized[0] ?? null);
    }

    typedValueExists() {
        const query = this.context.search().value();

        if (!query) return false;

        return !!this.store.findOption(query);
    }

    canAddTypedValue() {
        return this.typedValueExists() || this.context.freeText();
    }

    addTypedValue() {
        const query = this.context.search().value();

        if (!query) return;

        this.addItemValue(query);
    }

    updateVisible() {
        if (!this.context.multiple())
            this.context
                .search()
                .setValue(this.selectedOptions()[0]?.label ?? '');
    }

    private toggleMultipleItem(option: FktAutocompleteOption<Option>) {
        const normalized = this.normalizedValue();

        if (normalized.includes(option.value)) this.removeItem(option);
        else this.addMultipleItemValue(option.value);

        this.store.activeDescendant.setIndex(option.index, {
            scroll: false,
        });

        this.context.search().clear();
    }

    private selectSingleItem(option: FktAutocompleteOption<Option>) {
        this.context.search().setValue(option.label);
        this.store.query.set('');

        this.updateValue(option.value);
        this.context.closeDropdown();
    }

    private addMultipleItemValue(value: string | number) {
        const existent = this.store.findOption(value);

        const normalized = this.normalizedValue();

        if (existent) {
            this.updateValue([...normalized, existent.value]);
            return;
        }

        if (this.context.freeText()) this.updateValue([...normalized, value]);
    }

    private addSingleItemValue(value: string | number) {
        const existent = this.store.findOption(value);

        if (existent) {
            this.updateValue(existent.value);
            this.context.search().setValue(existent.label);
            return;
        }

        if (this.context.freeText()) this.updateValue(value);
    }
}
