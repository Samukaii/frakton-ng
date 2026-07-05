import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import {
    FktTableColumn,
    FktTableFilterValue,
    FktTableSortEvent,
    TableItem,
} from '../../../fkt-table.types';
import { FktTableFilterRendererComponent } from '../../renderers/filter/fkt-table-filter-renderer.component';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'th[fktTableHeaderCell]',
    styleUrl: './fkt-table-header-cell.component.scss',
    imports: [NgTemplateOutlet, FktButtonLegacyComponent, FktTableFilterRendererComponent],
    templateUrl: './fkt-table-header-cell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'table__header-title',
        '[class.pinned-left]': 'column().pinned === "left"',
        '[class.pinned-right]': 'column().pinned === "right"',
        '[class.pinned-left-edge]': 'isPinnedLeftEdge()',
        '[class.pinned-right-edge]': 'isPinnedRightEdge()',
        '[class.reorderable]': 'canReorder && !column().pinned',
        '[class.dragging]': 'reorder?.dragSourceKey() === column().key',
        '[class.drag-over]': 'reorder?.dragOverKey() === column().key',
        '[style.left]': 'column().pinned === "left" ? pinnedOffset() : null',
        '[style.right]': 'column().pinned === "right" ? pinnedOffset() : null',
        '[style.width]': 'columnWidth() ?? "auto"',
        '[style.min-width]': 'columnWidth() ?? "none"',
        '[style.max-width]': 'columnWidth() ?? "auto"',
        '[attr.data-column-key]': 'column().key',
        '[attr.draggable]': 'canReorder && !column().pinned ? "true" : null',
        '(dragstart)': 'onDragStart($event)',
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'onDrop($event)',
        '(dragend)': 'onDragEnd()',
    },
})
export class FktTableHeaderCellComponent<Item extends TableItem> {
    readonly isLast = input(true);
    readonly column = input.required<FktTableColumn<Item>>();
    readonly defaultFilters = input<FktTableFilterValue>({});
    readonly currentSorting = input<FktTableSortEvent | null>(null);
    readonly currentSortingChange = output<FktTableSortEvent | null>();
    filters = model<FktTableFilterValue>({});

    protected readonly context = injectTableContext<Item>();
    protected readonly reorder = this.context.features.reorder;

    protected readonly canReorder = !!this.reorder;
    protected readonly canResize = !!this.context.features.resize;

    protected readonly templateRef = computed(() => {
        const header = this.column().header;
        if (typeof header === 'string') return null;
        return header();
    });

    protected readonly sortingIcon = computed(() => {
        const sorting = this.currentSorting();
        if (sorting?.property !== this.column().key) return 'arrows-up-down';
        return sorting.direction === 'asc' ? 'arrow-up' : 'arrow-down';
    });

    readonly pinnedOffset = computed(() =>
        this.context.features.pinnedColumns.pinnedOffsets()[this.column().key]
    );

    readonly isPinnedLeftEdge = computed(() =>
        this.context.features.pinnedColumns.pinnedEdgeKeys().left === this.column().key
    );

    readonly isPinnedRightEdge = computed(() =>
        this.context.features.pinnedColumns.pinnedEdgeKeys().right === this.column().key
    );

    protected readonly columnWidth = computed(() => {
        const widths = this.context.features.resize?.columnWidths() ?? {};
        const key = this.column().key;
        return widths[key] ? `${widths[key]}px` : undefined;
    });

    protected updateSorting(): void {
        const key = this.column().key;
        const current = this.currentSorting();
        let next: FktTableSortEvent | null = null;

        if (current?.property !== key) {
            next = { property: key, direction: 'asc' };
        } else if (current.direction === 'asc') {
            next = { property: key, direction: 'desc' };
        }

        this.currentSortingChange.emit(next);
    }

    protected onResizeStart(event: MouseEvent): void {
        this.context.features.resize?.onResizeStart(this.column().key, event);
    }

    protected onDragStart(event: DragEvent): void {
        this.context.features.reorder?.onDragStart(this.column().key, event);
    }

    protected onDragOver(event: DragEvent): void {
        this.context.features.reorder?.onDragOver(this.column().key, event);
    }

    protected onDrop(event: DragEvent): void {
        this.context.features.reorder?.onDrop(this.column().key, event);
    }

    protected onDragEnd(): void {
        this.context.features.reorder?.onDragEnd();
    }
}
