import { computed, effect, inject, Injectable, linkedSignal, untracked } from '@angular/core';
import { createDefaultSearch } from '../utils/create-default-search';
import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteOption,
    FktAutocompleteVirtualData,
    FktGroupedAutocompleteOption,
} from '../fkt-autocomplete.types';
import { findAutocompleteOption } from '../utils/find-autocomplete-option';
import { mapAutocompleteOptions } from '../utils/map-autocomplete-option';
import { FktAutocompleteVirtualScrollDirective } from '../directives/public/fkt-autocomplete-virtual-scroll.directive';
import { groupAutocompleteOptions } from '../utils/group-autocomplete-options';
import { remapAutocompleteVirtualRowsToGroups } from '../utils/virtual-scroll/remap-autocomplete-virtual-rows-to-groups';
import { debouncedComputed, useActiveDescendant } from 'frakton-ng/internal/utils';
import { FktAutocompleteContextDirective } from '../directives/fkt-autocomplete-context.directive';

@Injectable()
export class FktAutocompleteStoreService<Option extends Generic | string> {
    private context = inject<FktAutocompleteContextDirective<Option>>(
        FktAutocompleteContextDirective
    );
    private virtualScroll = inject(FktAutocompleteVirtualScrollDirective, {
        optional: true,
    });
    readonly query = linkedSignal(() => this.context.search().value());

    private readonly debouncedQuery = debouncedComputed(() => {
        return this.query();
    }, {initialValue: this.query(), time: this.context.searchDebounce()})

    private readonly emitQuery = effect(() => {
        const query = this.debouncedQuery();

        if (query.length < this.context.minSearch()) return;

        this.context.searchChange.emit(query);
    })

    readonly activeDescendant = useActiveDescendant<
        FktAutocompleteOption<Option>
    >({
        baseId: `${this.context.id}-option`,
        items: computed(() =>
            this.sourceGrouped().flatMap((group) => group.items)
        ),
        enabled: this.context.dropdownOpened,
    });

    readonly filteredOptions = computed(() => {
        const defaultSearch = createDefaultSearch(
            this.context.labelKey(),
            this.context.valueKey(),
            this.context.groupKey()
        );

        const query = this.debouncedQuery();
        const inputValue = untracked(this.context.search().value);

        if (inputValue.length < this.context.minSearch()) return [];

        const localSearch = this.context.localSearch();

        if (localSearch === false) return this.context.options();

        if (typeof localSearch === 'function')
            return localSearch(query, this.context.options());

        return defaultSearch(query, this.context.options());
    });

    readonly mappedOptions = computed((): FktAutocompleteOption<Option>[] => {
        const options = this.context.options() as Option[];

        return this.mapOptions(options);
    });

    readonly lookupMappedOptions = computed(
        (): FktAutocompleteOption<Option>[] => {
            const options = this.context.lookupOptions() as Option[];

            return this.mapOptions(options);
        }
    );

    readonly mappedAndFilteredOptions = computed(
        (): FktAutocompleteOption<Option>[] => {
            const options = this.filteredOptions() as Option[];

            return this.mapOptions(options);
        }
    );

    findOption(value: string | number) {
        return findAutocompleteOption(this.mappedOptions(), value);
    }

    private mapOptions(options: Option[]) {
        return mapAutocompleteOptions(options, {
            labelKey: this.context.labelKey() as never,
            valueKey: this.context.valueKey() as never,
        });
    }

    readonly sourceGrouped = computed(
        (): FktGroupedAutocompleteOption<Option>[] => {
            return groupAutocompleteOptions(
                this.mappedAndFilteredOptions(),
                this.context.groupKey()
            );
        }
    );

    readonly virtualData = computed((): FktAutocompleteVirtualData<Option> => {
        const groups = this.sourceGrouped();
        const virtualProjection =
            this.virtualScroll?.getVirtualProjection(groups);

        return virtualProjection
            ? {
                  groups: remapAutocompleteVirtualRowsToGroups(
                      virtualProjection.rows
                  ),
                  range: virtualProjection.range,
              }
            : {
                  groups,
                  range: {
                      startIndex: 0,
                      endIndex: groups.length - 1,
                      topSpacerHeight: 0,
                      bottomSpacerHeight: 0,
                  },
              };
    });
}
