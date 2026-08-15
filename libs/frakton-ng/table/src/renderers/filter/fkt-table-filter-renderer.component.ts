import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { deepEqual, deepSignal } from 'frakton-ng/internal/utils';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktTableColumn, FktTableFilterValue } from '../../../fkt-table.types';
import { FktPopoverComponent, FktPopoverTriggerDirective, FktPopoverContentDirective } from 'frakton-ng/popover';
import { FktComponentRendererComponent } from 'frakton-ng/internal/components';

@Component({
  selector: 'fkt-table-filter-renderer',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktComponentRendererComponent,
  ],
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

  protected dropdownOpen = signal(false);

  protected filterData = computed(() => {
    const columnFilter = this.filterOptions();

    if (!columnFilter) return;

    return {
      ...columnFilter.data,
      value: this.value(),
      defaultValue: this.defaultValue(),
      apply: (newValue: T) => {
        this.value.set(newValue);
        this.dropdownOpen.set(false);
      },
      cancel: () => {
        this.dropdownOpen.set(false);
      },
    };
  });
}
