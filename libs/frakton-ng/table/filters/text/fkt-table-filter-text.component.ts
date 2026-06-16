import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { FktInputOldComponent } from 'frakton-ng/input-old';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';

@Component({
    selector: 'fkt-table-filter-text',
    imports: [FktInputOldComponent, FktButtonsListComponent],
    templateUrl: './fkt-table-filter-text.component.html',
    styleUrl: './fkt-table-filter-text.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterTextComponent
    implements FktTableCustomFilter<string>
{
    label = input.required<string>();
    placeholder = input<string>();
    value = input.required<string>();
    defaultValue = input<string>();
    close = output();
    apply = output<string>();

    internalValue = linkedSignal(this.value);

    actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            text: 'Reset',
            shape: 'rect',
            theme: 'stroked',
            click: () => {
                this.apply.emit(this.defaultValue() ?? '');
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
