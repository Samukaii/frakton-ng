import { Component, input, linkedSignal, output } from '@angular/core';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktTableCustomFilter } from 'frakton-ng/table';

const ALL_CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Sports', 'Food'];

@Component({
    selector: 'app-category-multi-filter',
    imports: [FktCheckboxComponent, FktButtonsListComponent],
    templateUrl: './category-multi-filter.component.html',
    styleUrl: './category-multi-filter.component.scss',
})
export class CategoryMultiFilterComponent
    implements FktTableCustomFilter<string[]>
{
    value = input.required<string[]>();
    defaultValue = input<string[]>();
    apply = output<string[]>();
    close = output();

    protected categories = ALL_CATEGORIES;
    protected selected = linkedSignal(() => [...this.value()]);

    protected isSelected(category: string) {
        return this.selected().includes(category);
    }

    protected toggle(category: string, checked: boolean) {
        this.selected.update((s) =>
            checked ? [...s, category] : s.filter((c) => c !== category)
        );
    }

    protected actions: FktButtonAction[] = [
        {
            identifier: 'reset',
            text: 'Reset',
            shape: 'rect',
            theme: 'stroked',
            click: () => this.apply.emit(this.defaultValue() ?? []),
        },
        {
            identifier: 'apply',
            shape: 'rect',
            text: 'Apply',
            click: () => this.apply.emit(this.selected()),
        },
    ];
}
