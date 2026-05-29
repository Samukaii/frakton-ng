import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import {
    FktTableClassesFn,
    FktTableColumn,
    FktTableSelection,
    TableItem,
} from '../../../fkt-table.types';
import { FktTableCellRendererComponent } from '../../renderers/cell/fkt-table-cell-renderer.component';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktButtonComponent } from 'frakton-ng/button';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'tr[fktTableRow]',
    styleUrl: './fkt-table-row.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FktTableCellRendererComponent,
        FktCheckboxComponent,
        FktButtonComponent,
        CallPipe,
    ],
    templateUrl: './fkt-table-row.component.html',
    host: {
        '[class]': 'classesFn()(item())',
        '[class.selected]': 'isSelected()',
        '[class.clickable]': 'clickableRows()',
        '[class.disable-row-hover]': 'disableRowHover()',
        '[class.striped]': 'striped() && rowIndex() % 2 !== 0',
        '(click)': 'rowClick.emit(item())',
    },
})
export class FktTableRowComponent<Item extends TableItem> {
    readonly item = input.required<Item>();
    readonly rowIndex = input(0);
    readonly striped = input(false, { transform: booleanAttribute });
    readonly isExpanded = input(false, { transform: booleanAttribute });
    readonly classesFn = input<FktTableClassesFn<Item>>(() => '');
    readonly disableRowHover = input(false, { transform: booleanAttribute });
    readonly clickableRows = input(false, { transform: booleanAttribute });

    readonly rowClick = output<Item>();
    readonly expandToggle = output<void>();

    protected readonly context = injectTableContext();

    protected readonly leftPinnedKey = computed(
        () => this.context.features.pinnedColumns.pinnedEdgeKeys().left
    );

    protected readonly rightPinnedKey = computed(
        () => this.context.features.pinnedColumns.pinnedEdgeKeys().right
    );

    protected readonly columnWidths = computed(
        () => this.context.columnWidths() ?? {}
    );

    private readonly selection = computed(
        () =>
            this.context.features.selection?.selection() ??
            ({ selectAll: false, items: [] } as FktTableSelection<Item>)
    );

    protected readonly isSelected = computed(() => {
        this.selection();
        return (
            this.context.features.selection?.isRowSelected(this.item()) ?? false
        );
    });

    protected readonly isSelectionDisabled = computed(
        () => this.context.features.selection?.selectedState() === 'all'
    );

    protected getClasses(item: Item, column: FktTableColumn<Item>) {
        const classes = column.classes?.(item);

        if (Array.isArray(classes)) return classes.join(' ');

        return classes ?? '';
    }

    protected toggleRowSelection(): void {
        this.context.features.selection?.toggleRowSelection(this.item());
    }

    protected getColumnWidth(
        widths: Record<string, number>,
        column: FktTableColumn<Item>
    ) {
        return widths[column.key] ? `${widths[column.key]}px` : undefined;
    }
}
