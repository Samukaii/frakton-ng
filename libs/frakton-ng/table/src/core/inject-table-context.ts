import { computed, inject } from '@angular/core';
import { FktTablePinnedService } from '../features/pinned/fkt-table-pinned.service';
import { FktTableSelectionDirective } from '../features/selection/fkt-table-selection.directive';
import { FktTableResizeDirective } from '../features/resize/fkt-table-resize.directive';
import { FktTableReorderDirective } from '../features/reorder/fkt-table-reorder.directive';
import { FktTableVirtualScrollDirective } from '../features/virtual-scroll/fkt-table-virtual-scroll.directive';
import { FktTableFrozenRowsDirective } from '../features/frozen-rows/fkt-table-frozen-rows.directive';
import { FktTableContextDirective } from './fkt-table-context.directive';
import { injectDimensions } from '../utils/inject-parse-width';
import { TableItem } from '../../fkt-table.types';

export const injectTableContext = <Item extends TableItem>() => {
    const dimensions = injectDimensions();

    const selection = inject<FktTableSelectionDirective<Item>>(
        FktTableSelectionDirective,
        { optional: true }
    );
    const resize = inject(FktTableResizeDirective, { optional: true });
    const reorder = inject(FktTableReorderDirective, { optional: true });
    const virtualScroll = inject(FktTableVirtualScrollDirective, {
        optional: true,
    });
    const frozenRows = inject<FktTableFrozenRowsDirective<Item>>(
        FktTableFrozenRowsDirective,
        { optional: true }
    );

    const pinnedColumns = inject(FktTablePinnedService);
    const context = inject<FktTableContextDirective<Item>>(
        FktTableContextDirective
    );

    const allData = computed(() => context.data());

    const renderedData = computed<Item[]>(
        () => virtualScroll?.virtualData()?.items ?? allData()
    );

    const renderedColumns = computed(
        () => reorder?.orderedColumns() ?? context.columns()
    );

    const columnWidths = computed(() => {
        if (resize) return resize.columnWidths();

        const widths: Record<string, number> = {};

        renderedColumns().forEach((column) => {
            if (!column.width) return;

            widths[column.key] = dimensions.parseWidth(column.width);
        });

        return widths;
    });

    const columnsCount = computed(
        () =>
            context.columns().length +
            (selection ? 1 : 0) +
            (context.expandTemplate() ? 1 : 0)
    );

    const getId = (item: Item) => {
        const identifier = context.identifier();

        if (!(identifier in item))
            throw new Error(
                `Could not find identifier "${identifier}" on table data`
            );

        return item[identifier];
    };

    const setTableContainer = (element: HTMLElement) => {
        context.tableScrollElement.set(element);
    };

    return {
        allData,
        columnsCount,
        renderedColumns,
        renderedData,
        columnWidths,
        setTableContainer,
        expandableTemplate: context.expandTemplate,
        getId,
        isSameRow(first: Item, second: Item) {
            return getId(first) === getId(second);
        },
        features: {
            pinnedColumns,
            selection,
            reorder,
            resize,
            virtualScroll,
            frozenRows,
        },
    };
};
