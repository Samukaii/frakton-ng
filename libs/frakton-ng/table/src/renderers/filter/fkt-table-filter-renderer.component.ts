import {ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model,} from '@angular/core';
import {FktOverlayService} from 'frakton-ng/overlay';
import {FktTableColumn, FktTableFilterValue} from '../../../fkt-table.types';
import {deepEqual, deepSignal} from 'frakton-ng/internal/utils';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-table-filter-renderer',
    imports: [FktButtonComponent],
    templateUrl: './fkt-table-filter-renderer.component.html',
    styleUrl: './fkt-table-filter-renderer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterRendererComponent<T> {
    column = input.required<FktTableColumn<T>>();
    defaultFilters = model<FktTableFilterValue>({});
    filters = model<FktTableFilterValue>({});

    overlayService = inject(FktOverlayService);
    elementRef = inject(ElementRef);

    filterOptions = computed(() => this.column().filter);

    filterKey = computed(() => this.filterOptions()?.key ?? '');

    value = deepSignal(this.filters, this.filterKey);
    defaultValue = computed(() => this.defaultFilters()[this.filterKey()]);

    hasChanges = computed(() => !deepEqual(this.value(), this.defaultValue()));

    protected openFilter() {
        const columnFilter = this.filterOptions();

        if (!columnFilter) return;

        const { component, data } = columnFilter;

        const ref = this.overlayService.open({
            anchorElementRef: this.elementRef,
            component: component,
            data: {
                ...data,
                value: this.value(),
                defaultValue: this.defaultValue(),
                apply: (newValue: T) => {
                    this.value.set(newValue);
                    ref.close();
                },
                cancel: () => {
                    ref.close();
                },
            },
            panelOptions: {
                width: 'fit-content',
                padding: '1rem',
                preferredPositions: ['bottom-start'],
            },
        });
    }
}
