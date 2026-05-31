import { Directive, input } from '@angular/core';
import { TableItem } from '../../../fkt-table.types';

@Directive({
    selector: '[fktTableFrozenRows]',
    exportAs: 'fktTableFrozenRows',
})
export class FktTableFrozenRowsDirective<Item extends TableItem> {
    readonly frozenData = input.required<Item[]>();
}
