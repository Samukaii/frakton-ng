import { computed, Directive, inject } from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import {
    FktNormalizedSelectOption,
    FktSelectValue,
} from '../fkt-select.types';
import { FktSelectContextDirective } from './fkt-select-context.directive';
import { FktSelectStoreService } from '../services/fkt-select-store.service';

@Directive({ selector: 'fkt-select[fktSelectSelection]' })
export class FktSelectSelectionDirective<
    Option extends Generic | string | number,
> {
    private readonly context = inject<FktSelectContextDirective<Option>>(
        FktSelectContextDirective
    );
    private readonly store = inject<FktSelectStoreService<Option>>(
        FktSelectStoreService
    );

    readonly normalizedValue = computed(() => {
        const value = this.context.value();

        return Array.isArray(value)
            ? value
            : value === null
              ? []
              : [value];
    });

    readonly hasValue = computed(() => this.normalizedValue().length > 0 && !!this.normalizedValue()[0]);

    readonly selectedOptions = computed(() => {
        const lookupOptions = this.store.lookupMappedOptions();

        return this.normalizedValue().map(
            (value, index): FktNormalizedSelectOption<Option> => {
                const option = lookupOptions.find(
                    (candidate) => candidate.value === value
                );

                return (
                    option ?? {
                        value,
                        label: value.toString(),
                        raw: null,
                        index,
                    }
                );
            }
        );
    });

    isSelected(option: FktNormalizedSelectOption<Option>) {
        return this.normalizedValue().includes(option.value);
    }

    select(option: FktNormalizedSelectOption<Option>) {
        if (this.context.multiple()) {
            const values = this.normalizedValue();

            this.updateValue(
                values.includes(option.value)
                    ? values.filter((value) => value !== option.value)
                    : [...values, option.value]
            );
            return;
        }

        this.updateValue(option.value);
        this.context.closeDropdown();
    }

    remove(option: FktNormalizedSelectOption<Option>) {
        this.updateValue(
            this.normalizedValue().filter(
                (value) => value !== option.value
            )
        );
    }

    clear() {
        this.updateValue(null);
    }

    updateValue(value: FktSelectValue) {
        const normalized = Array.from(
            new Set(
                Array.isArray(value)
                    ? value
                    : value === null
                      ? []
                      : [value]
            )
        );

        this.context.value.set(
            this.context.multiple() ? normalized : normalized[0] ?? null
        );
    }
}
