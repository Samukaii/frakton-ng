import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { FktInputOldComponent } from 'frakton-ng/input-old';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';
import { FktSelectComponent } from 'frakton-ng/select';
import {
    FktNumberFilterValue,
    FktNumberModifier,
} from './fkt-table-filter-number.types';
import { MODIFIER_OPTIONS } from './constants/modifier-options';

@Component({
    selector: 'fkt-table-filter-number',
    imports: [FktInputOldComponent, FktSelectComponent, FktButtonsListComponent],
    templateUrl: './fkt-table-filter-number.component.html',
    styleUrl: './fkt-table-filter-number.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableFilterNumberComponent
    implements FktTableCustomFilter<FktNumberFilterValue>
{
    label = input.required<string>();
    value = input.required<FktNumberFilterValue>();
    defaultValue = input<FktNumberFilterValue>();
    apply = output<FktNumberFilterValue>();
    close = output();

    protected readonly modifierOptions = MODIFIER_OPTIONS;

    protected internalModifier = linkedSignal(() => this.value().modifier);
    protected internalValue = linkedSignal<string | null>(() => {
        const value = this.value().value;
        return value !== null ? String(value) : null;
    });

    protected actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            text: 'Reset',
            shape: 'rect',
            theme: 'stroked',
            click: () =>
                this.apply.emit(
                    this.defaultValue() ?? { modifier: 'eq', value: null }
                ),
        },
        {
            identifier: 'apply',
            shape: 'rect',
            text: 'Apply',
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
