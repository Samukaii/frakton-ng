import { computed, inject, Injectable } from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import { useActiveDescendant } from 'frakton-ng/internal/utils';
import { FktSelectContextDirective } from '../directives/fkt-select-context.directive';
import { groupSelectOptions } from '../utils/group-select-options';
import { mapSelectOptions } from '../utils/map-select-options';

@Injectable()
export class FktSelectStoreService<
    Option extends Generic | string | number,
> {
    private readonly context = inject<FktSelectContextDirective<Option>>(
        FktSelectContextDirective
    );

    readonly mappedOptions = computed(() =>
        mapSelectOptions(this.context.options() as Option[], {
            labelKey: this.context.labelKey(),
            valueKey: this.context.valueKey(),
        })
    );

    readonly lookupMappedOptions = computed(() =>
        mapSelectOptions(this.context.lookupOptions(), {
            labelKey: this.context.labelKey(),
            valueKey: this.context.valueKey(),
        })
    );

    readonly groups = computed(() =>
        groupSelectOptions(this.mappedOptions(), this.context.groupKey())
    );

    readonly flattenedOptions = computed(() =>
        this.groups().flatMap((group) => group.items)
    );

    readonly activeDescendant = useActiveDescendant({
        baseId: `${this.context.id}-option`,
        items: this.flattenedOptions,
        enabled: this.context.dropdownOpened,
    });
}
