import {
    computed,
    Directive,
    effect,
    ElementRef,
    inject,
    InjectionToken,
    input,
    Signal,
    signal,
} from '@angular/core';
import { FktTableContextDirective } from '../../core/fkt-table-context.directive';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { TableItem } from '../../../fkt-table.types';

export const RESIZE_OBSERVER_TOKEN = new InjectionToken<typeof ResizeObserver>(
    'ResizeObserver',
    { providedIn: 'root', factory: () => ResizeObserver }
);

export interface FktTableVirtualRange {
    startIndex: number;
    endIndex: number;
    topSpacerHeight: number;
    bottomSpacerHeight: number;
}

@Directive({
    selector: 'fkt-table[fktTableVirtualScroll]',
})
export class FktTableVirtualScrollDirective<Item extends TableItem> {
    readonly rowHeight = input(48);

    private readonly scrollTop = signal(0);
    private readonly viewportHeight = signal(0);

    private readonly context = inject(FktTableContextDirective);
    private readonly ResizeObserverClass = inject(RESIZE_OBSERVER_TOKEN);

    private readonly computedRange = computed(() => {
        const items = this.context.data() as Item[];
        const total = items.length;

        const rowHeight = this.rowHeight();
        const scrollTop = this.scrollTop();
        const viewportHeight = this.viewportHeight();
        if (viewportHeight === 0) return null;
        const buffer = 5;
        const startIndex = Math.max(
            0,
            Math.floor(scrollTop / rowHeight) - buffer
        );
        const endIndex = Math.min(
            total - 1,
            Math.ceil((scrollTop + viewportHeight) / rowHeight) - 1 + buffer
        );
        return {
            startIndex,
            endIndex,
            topSpacerHeight: startIndex * rowHeight,
            bottomSpacerHeight: Math.max(0, (total - endIndex - 1) * rowHeight),
        };
    })

    @MarkUsed()
    protected readonly throwErrorIfHasExpandable = effect(() => {
        if(!this.context.expandTemplate()) return;

        throw new Error(
            'Virtual scroll can not be used with expandable rows'
        );
    })

    @MarkUsed()
    protected readonly observeViewPort = effect((onCleanup) => {
        const element = this.context.tableScrollElement();

        if(!element) return;

        const onScroll = () => {
            this.scrollTop.set(element.scrollTop);
        };
        element.addEventListener('scroll', onScroll, { passive: true });

        const observer = new this.ResizeObserverClass(() =>
            this.viewportHeight.set(element.clientHeight)
        );
        observer.observe(element);
        this.viewportHeight.set(element.clientHeight);

        onCleanup(() => {
            element.removeEventListener('scroll', onScroll);
            observer.disconnect();
        });
    });

    readonly virtualData = computed(() => {
        const items = this.context.data() as Item[];
        const range = this.computedRange();

        if (!range) return null;

        return {
            items: items.slice(range.startIndex, range.endIndex + 1),
            range,
        };
    });
}
