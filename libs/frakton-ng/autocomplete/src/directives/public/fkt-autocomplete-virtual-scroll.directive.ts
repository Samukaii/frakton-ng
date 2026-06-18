import {
    Directive,
    inject,
    input,
    isDevMode,
    linkedSignal,
    signal,
} from '@angular/core';
import {
    FktGroupedAutocompleteOption,
    FktAutocompleteVirtualProjection,
    FktAutocompleteVirtualRenderRow,
    FktAutocompleteVirtualRenderRowWithOffset,
} from '../../fkt-autocomplete.types';
import { addAutocompleteVirtualRowOffsets } from '../../utils/virtual-scroll/add-autocomplete-virtual-row-offsets';
import {
    createAutocompleteVirtualScrollLimitMessage,
    exceedsAutocompleteBrowserScrollLimit,
} from '../../utils/virtual-scroll/autocomplete-virtual-scroll-limit';
import { buildAutocompleteVirtualRows } from '../../utils/virtual-scroll/build-autocomplete-virtual-rows';
import { getAutocompleteVirtualRange } from '../../utils/virtual-scroll/get-autocomplete-virtual-range';
import { getAutocompleteVirtualScrollTarget } from '../../utils/virtual-scroll/get-autocomplete-virtual-scroll-target';
import { FktAutocompleteContextDirective } from '../fkt-autocomplete-context.directive';

@Directive({
    selector: 'fkt-autocomplete[fktAutocompleteVirtualScroll]',
})
export class FktAutocompleteVirtualScrollDirective<T> {
    itemHeight = input.required<number>({
        alias: 'virtualItemHeight',
    });
    maxItems = input.required<number>({
        alias: 'maxVirtualItems',
    });
    groupHeight = input(20, {
        alias: 'virtualGroupHeight',
    });
    buffer = input(5, {
        alias: 'virtualBuffer',
    });

    private readonly context = inject(FktAutocompleteContextDirective);
    private readonly scrollTop = signal(0);
    private readonly viewportHeight = linkedSignal(signal(200));
    private hasLoggedExceededLimit = false;

    updateViewport(element: HTMLElement | undefined) {
        if (!element) return;

        this.scrollTop.set(element.scrollTop);
        this.viewportHeight.set(element.clientHeight);
    }

    getVirtualProjection(
        groups: FktGroupedAutocompleteOption<T>[]
    ): FktAutocompleteVirtualProjection<T> {
        const rows = this.getRowsWithOffset(groups);
        const range = this.getRange(rows);

        return {
            rows: rows.slice(range.startIndex, range.endIndex + 1),
            range,
        };
    }

    scrollToOption(
        optionIndex: number,
        groups: FktGroupedAutocompleteOption<T>[],
        element: HTMLElement | undefined
    ) {
        if (!element) return;

        const rows = this.getRowsWithOffset(groups);
        const row = rows.find(
            (item) => item.kind === 'item' && item.item.index === optionIndex
        );

        if (!row) return;

        const target = getAutocompleteVirtualScrollTarget(
            row,
            this.viewportHeight()
        );
        const distance = Math.abs(this.scrollTop() - target);
        const isLongJump = distance > 2 * this.itemHeight();

        element.scrollTo({
            top: Math.max(0, target),
            behavior: isLongJump ? 'auto' : 'smooth',
        });
    }

    private getRowsWithOffset(groups: FktGroupedAutocompleteOption<T>[]) {
        return addAutocompleteVirtualRowOffsets(this.getRenderRows(groups));
    }

    private getRenderRows(groups: FktGroupedAutocompleteOption<T>[]) {
        const rows = buildAutocompleteVirtualRows(groups, {
            groupHeight: this.groupHeight(),
            itemHeight: this.itemHeight(),
        });

        this.assertScrollLimit(rows, groups);

        return rows;
    }

    private getRange(rows: FktAutocompleteVirtualRenderRowWithOffset<T>[]) {
        return getAutocompleteVirtualRange(rows, {
            buffer: this.buffer(),
            scrollTop: this.scrollTop(),
            viewportHeight: this.viewportHeight(),
        });
    }

    private assertScrollLimit(
        rows: FktAutocompleteVirtualRenderRow<T>[],
        groups: FktGroupedAutocompleteOption<T>[]
    ) {
        const config = {
            groupHeight: this.groupHeight(),
            itemHeight: this.itemHeight(),
            maxItems: this.maxItems(),
        };

        if (!exceedsAutocompleteBrowserScrollLimit(rows, config)) return;

        const message = createAutocompleteVirtualScrollLimitMessage(
            rows,
            groups,
            config
        );

        if (isDevMode()) throw new Error(message);

        if (!this.hasLoggedExceededLimit) {
            console.error(message);
            this.hasLoggedExceededLimit = true;
        }
    }
}
