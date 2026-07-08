import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { FktDatePickerComponent } from 'frakton-ng/date-picker';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';
import { FktDateRangeValue } from './fkt-table-filter-date-range.types';

@Component({
    selector: 'fkt-table-filter-date-range',
    imports: [FktDatePickerComponent, FktButtonsListComponent],
    templateUrl: './fkt-table-filter-date-range.component.html',
    styleUrl: './fkt-table-filter-date-range.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterDateRangeComponent
    implements FktTableCustomFilter<FktDateRangeValue>
{
    value = input.required<FktDateRangeValue>();
    defaultValue = input<FktDateRangeValue>();
    apply = output<FktDateRangeValue>();
    close = output();

    protected internalFrom = linkedSignal(() => this.value().from ?? null);
    protected internalTo = linkedSignal(() => this.value().to ?? null);

    protected actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            label: 'Reset',
            appearance: 'stroked',
            click: () =>
                this.apply.emit(
                    this.defaultValue() ?? { from: null, to: null }
                ),
        },
        {
            identifier: 'apply',
            label: 'Apply',
            click: () =>
                this.apply.emit({
                    from: this.internalFrom(),
                    to: this.internalTo(),
                }),
        },
    ];
}
