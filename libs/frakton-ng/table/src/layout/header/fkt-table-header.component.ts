import { ChangeDetectionStrategy, Component, input, model, output, signal } from '@angular/core';
import { FktTableFilterValue, FktTableSortEvent, TableItem } from '../../../fkt-table.types';
import { FktTableHeaderCellComponent } from '../header-cell/fkt-table-header-cell.component';
import { FktTableSelectionHeaderComponent } from '../../features/selection/fkt-table-selection-header.component';
import { injectTableContext } from '../../core/inject-table-context';
import { FktTableSelectionBannerComponent } from '../../features/selection/fkt-table-selection-banner.component';

@Component({
    selector: 'thead[fktTableHeader]',
    styleUrl: './fkt-table-header.component.scss',
    imports: [
        FktTableHeaderCellComponent,
        FktTableSelectionHeaderComponent,
        FktTableSelectionBannerComponent,
    ],
    templateUrl: './fkt-table-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'table__header' },
})
export class FktTableHeaderComponent<Item extends TableItem> {
    defaultFilters = input<FktTableFilterValue>({});
    filters = model<FktTableFilterValue>({});
    sort = output<FktTableSortEvent | null>();

    protected readonly context = injectTableContext<Item>();
    protected readonly currentSorting = signal<FktTableSortEvent | null>(null);

    protected onSort(event: FktTableSortEvent | null): void {
        this.currentSorting.set(event);
        this.sort.emit(event);
    }
}
