import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';
import { FktFieldComponent } from 'frakton-ng/field';
import { form, FormField } from '@angular/forms/signals';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'fkt-table-filter-text',
    imports: [
        FktButtonsListComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FormField,
    ],
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

    protected readonly internalValue = linkedSignal(this.value);

    protected readonly field = form(this.internalValue);

    protected readonly actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            label: 'Reset',
            appearance: 'stroked',
            click: () => {
                this.apply.emit(this.defaultValue() ?? '');
            },
        },
        {
            identifier: 'apply',
            label: 'Apply',
            click: () => {
                this.apply.emit(this.internalValue());
            },
        },
    ];
}
