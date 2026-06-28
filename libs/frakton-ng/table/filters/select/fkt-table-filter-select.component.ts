import {
    ChangeDetectionStrategy,
    Component,
    input,
    linkedSignal,
    output,
} from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import {
    FktSelectComponent,
    FktSelectLabelKey,
    FktSelectValueKey,
} from 'frakton-ng/select';
import { FktTableCustomFilter } from 'frakton-ng/table';
import { Distribute, Generic } from 'frakton-ng/internal/types';

@Component({
    selector: 'fkt-table-filter-select',
    imports: [FktButtonsListComponent, FktSelectComponent],
    templateUrl: './fkt-table-filter-select.component.html',
    styleUrl: './fkt-table-filter-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterSelectComponent<T extends Generic | string | number>
    implements FktTableCustomFilter<string | number | null>
{
    label = input.required<string>();
    placeholder = input<string>();
    value = input.required<string | number | null>();
    defaultValue = input<string | number | null>();
    options = input.required<Distribute<T>>();
    labelKey = input.required<FktSelectLabelKey<T>>();
    valueKey = input.required<FktSelectValueKey<T>>();
    cancel = output();
    apply = output<string | number | null>();

    internalValue = linkedSignal(this.value);

    actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            text: 'Reset',
            shape: 'rect',
            theme: 'stroked',
            click: () => {
                this.apply.emit(this.defaultValue() ?? null);
            },
        },
        {
            identifier: 'apply',
            shape: 'rect',
            text: 'Apply',
            click: () => {
                this.apply.emit(this.internalValue());
            },
        },
    ];
}
