import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    effect,
    ElementRef,
    input,
    model,
    output,
    viewChild
} from '@angular/core';
import { FktTablePinnedService } from '../features/pinned/fkt-table-pinned.service';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktTableClassesFn, FktTableFilterValue, FktTableSize, FktTableSortEvent, TableItem } from '../../fkt-table.types';
import { FktTableHeaderComponent } from '../layout/header/fkt-table-header.component';
import { FktTableBodyComponent } from '../layout/body/fkt-table-body.component';
import { FktTableFrozenBodyComponent } from '../layout/frozen-body/fkt-table-frozen-body.component';
import { FktTableResizeIndicatorComponent } from '../features/resize/fkt-table-resize-indicator.component';
import { FktTableContextDirective } from './fkt-table-context.directive';
import { injectTableContext } from './inject-table-context';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Component({
    selector: 'fkt-table',
    providers: [FktTablePinnedService],
    host: {
        '[class.size-sm]': 'size() === "sm"',
        '[class.size-md]': 'size() === "md"',
        '[class.size-lg]': 'size() === "lg"',
    },
    imports: [
        FktTableHeaderComponent,
        FktTableBodyComponent,
        FktTableFrozenBodyComponent,
        FktTableResizeIndicatorComponent,
    ],
    hostDirectives: [
        {
            directive: FktTableContextDirective,
            inputs: ['data', 'columns', 'identifier'],
        },
    ],
    templateUrl: './fkt-table.component.html',
    styleUrl: './fkt-table.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableComponent<
    Item extends TableItem,
    Filters extends FktTableFilterValue = FktTableFilterValue
> {
    classesFn = input<FktTableClassesFn<Item>>(() => '');
    skeletonLines = input(10);
    loading = input(false);
    disableRowHover = input(false, { transform: booleanAttribute });
    noResults = input<FktNoResults>({ label: 'No results' });
    singleExpand = input(false, { transform: booleanAttribute });
    clickableRows = input(false, { transform: booleanAttribute });
    striped = input(false, { transform: booleanAttribute });
    gridLines = input(false, { transform: booleanAttribute });
    size = input<FktTableSize>('md')
    defaultFilters = model<Filters>({} as Filters);
    filters = model<Filters>({} as Filters);
    expandedRowIds = model<(number | string)[]>([]);

    readonly rowClick = output<Item>();
    readonly sort = output<FktTableSortEvent | null>();

    protected readonly context = injectTableContext();
    readonly tableScrollElement =
        viewChild.required<ElementRef<HTMLElement>>('tableScroll');

    @MarkUsed()
    protected setScrollContainer = effect(() => {
        this.context.setTableContainer(this.tableScrollElement().nativeElement);
    });
}
