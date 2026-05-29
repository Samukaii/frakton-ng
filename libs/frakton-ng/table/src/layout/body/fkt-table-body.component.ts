import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, model, output, signal } from '@angular/core';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktSkeletonComponent } from 'frakton-ng/skeleton';
import { FktTableClassesFn, TableItem } from '../../../fkt-table.types';
import { FktTableRowComponent } from '../row/fkt-table-row.component';
import { FktTableSpacerRowComponent } from '../spacer-row/fkt-table-spacer-row.component';
import { FktTableExpandableRowComponent } from '../../features/expand/fkt-table-expandable-row.component';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'tbody[fktTableBody]',
    styleUrl: './fkt-table-body.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FktTableRowComponent,
        FktTableSpacerRowComponent,
        FktTableExpandableRowComponent,
        FktNoResultsComponent,
        FktSkeletonComponent,
    ],
    templateUrl: './fkt-table-body.component.html',
})
export class FktTableBodyComponent<Item extends TableItem> {
    readonly classesFn = input<FktTableClassesFn<Item>>(() => '');
    readonly disableRowHover = input(false);
    readonly clickableRows = input(false);
    readonly singleExpand = input.required<boolean>();
    readonly loading = input(false);
    readonly skeletonLines = input(10);
    readonly noResults = input<FktNoResults>({ label: 'No results' });
    readonly striped = input(false, { transform: booleanAttribute });

    readonly expandedRowIds = model<(number | string)[]>([]);
    protected readonly renderedRowIds = signal<(number | string)[]>([]);

    protected readonly expandedRowIdSet = computed(() => new Set(this.expandedRowIds()));
    protected readonly renderedRowIdSet = computed(() => new Set(this.renderedRowIds()));

    readonly rowClick = output<Item>();

    protected readonly context = injectTableContext<Item>();

    protected readonly skeletonRange = computed(() =>
        Array.from({ length: this.skeletonLines() }, (_, i) => i)
    );

    private readonly virtualRange = computed(
        () => this.context.features.virtualScroll?.virtualData()?.range
    );

    protected readonly virtualTopSpacerHeight = computed(
        () => this.virtualRange()?.topSpacerHeight ?? null
    );

    protected readonly virtualBottomSpacerHeight = computed(
        () => this.virtualRange()?.bottomSpacerHeight ?? null
    );

    protected readonly virtualOffset = computed(
        () => this.virtualRange()?.startIndex ?? 0
    );

    protected getId(item: Item) {
        return this.context.getId(item);
    }

    protected toggleExpand(item: Item) {
        const expandedIds = new Set(this.expandedRowIds());
        const renderedIds = new Set(this.renderedRowIds());
        const itemId = this.getId(item);

        if (expandedIds.has(itemId)) {
            expandedIds.delete(itemId);
        } else {
            if (this.singleExpand()) expandedIds.clear();
            expandedIds.add(itemId);
            renderedIds.add(itemId);
            this.renderedRowIds.set(Array.from(renderedIds));
        }

        this.expandedRowIds.set(Array.from(expandedIds));
    }
}
