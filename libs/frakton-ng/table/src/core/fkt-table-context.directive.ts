import {
    computed,
    contentChild,
    Directive, effect,
    input,
    signal,
} from '@angular/core';
import { FktTableColumn, TableItem } from '../../fkt-table.types';
import { FktTableExpandDirective } from '../features/expand/fkt-table-expand.directive';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Directive({
    selector: 'fkt-table[fktTableContext]',
})
export class FktTableContextDirective<Item extends TableItem> {
    identifier = input('id');
    data = input.required<Item[]>();
    columns = input.required<FktTableColumn<Item>[]>();

    private readonly expandDirective = contentChild(FktTableExpandDirective);
    readonly tableScrollElement = signal<HTMLElement | null>(null);

    readonly expandTemplate = computed(
        () => this.expandDirective()?.templateRef
    );

    @MarkUsed()
    protected readonly verifyColumnIdentities = effect(() => {
       const columns = this.columns();

       const keys = new Set<string>([]);

       columns.forEach(column => {
           if(keys.has(column.key))
               throw new Error(`Columns must have a unique key. Column "${column.key}" is duplicated`);

           keys.add(column.key);
       })
    });

    getId(item: Item) {
        const identifier = this.identifier();

        if (!(identifier in item))
            throw new Error(
                `Could not found identifier "${identifier}" on table data`
            );

        return item[identifier];
    }

    isSameRow(first: Item, second: Item) {
        return this.getId(first) === this.getId(second);
    }
}
