import { computed, inject, Injectable } from '@angular/core';
import { FktTableSelectionDirective } from '../selection/fkt-table-selection.directive';
import { injectDimensions } from '../../utils/inject-parse-width';
import { FktTableContextDirective } from '../../core/fkt-table-context.directive';

@Injectable()
export class FktTablePinnedService {
    private readonly dimensions = injectDimensions();
    private readonly selectionDirective = inject(FktTableSelectionDirective, {
        optional: true,
    });

    private readonly context = inject(FktTableContextDirective);

    readonly pinnedOffsets = computed(() => {
        const columns = this.context.columns();

        const hasLeftPinned = columns.some(
            (column) => column.pinned === 'left'
        );
        const hasRightPinned = columns.some(
            (column) => column.pinned === 'right'
        );

        if (!hasLeftPinned && !hasRightPinned) return {};

        const offsets: Record<string, string> = {};

        if (hasLeftPinned) {
            let left = 0;
            if (this.selectionDirective) {
                offsets['__checkbox'] = `${left}px`;
                left += this.dimensions.parseWidth('2.5rem');
            }
            if (this.context.expandTemplate()) {
                offsets['__expand'] = `${left}px`;
                left += this.dimensions.parseWidth('2.5rem');
            }
            for (const column of columns.filter((c) => c.pinned === 'left')) {
                offsets[column.key] = `${left}px`;
                left += this.dimensions.parseWidth(column.width);
            }
        }

        if (hasRightPinned) {
            let right = 0;
            for (const column of [...columns]
                .filter((c) => c.pinned === 'right')
                .reverse()) {
                offsets[column.key] = `${right}px`;
                right += this.dimensions.parseWidth(column.width);
            }
        }

        return offsets;
    });

    readonly pinnedEdgeKeys = computed(() => {
        const columns = this.context.columns();

        const leftPinned = columns.filter((column) => column.pinned === 'left');
        const rightPinned = columns.filter(
            (column) => column.pinned === 'right'
        );

        return {
            left: leftPinned.at(-1)?.key ?? null,
            right: rightPinned[0]?.key ?? null,
        };
    });
}
