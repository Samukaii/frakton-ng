import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktNumberFilterValue, FktNumberModifier } from './fkt-table-filter-number.types';
import { MODIFIER_OPTIONS } from './constants/modifier-options';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { form, FormField } from '@angular/forms/signals';

@Component({
    selector: 'fkt-table-filter-number',
    imports: [
        FktSelectComponent,
        FktButtonsListComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FormField,
    ],
    templateUrl: './fkt-table-filter-number.component.html',
    styleUrl: './fkt-table-filter-number.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterNumberComponent
    implements FktTableCustomFilter<FktNumberFilterValue>
{
    label = input.required<string>();
    placeholder = input.required<string>();
    value = input.required<FktNumberFilterValue>();
    defaultValue = input<FktNumberFilterValue>();
    apply = output<FktNumberFilterValue>();
    close = output();

    protected readonly modifierOptions = MODIFIER_OPTIONS;

    protected readonly internalModifier = linkedSignal(
        () => this.value().modifier
    );

    protected readonly internalValue = linkedSignal<string | null>(() => {
        const value = this.value().value;
        return isNaN(+(String(value))) ? String(value) : null;
    });

    protected readonly field = form(this.internalValue);

    protected readonly actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            label: 'Reset',
            appearance: 'stroked',
            click: () =>
                this.apply.emit(
                    this.defaultValue() ?? { modifier: 'eq', value: null }
                ),
        },
        {
            identifier: 'apply',
            label: 'Apply',
            click: () =>
                this.apply.emit({
                    modifier: this.internalModifier() as FktNumberModifier,
                    value:
                        this.internalValue() !== null
                            ? Number(this.internalValue())
                            : null,
                }),
        },
    ];
}
