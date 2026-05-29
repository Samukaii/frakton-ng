import { DOCUMENT } from '@angular/common';
import {
    computed,
    Directive,
    ElementRef,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import { clampNumber } from 'frakton-ng/internal/utils';

interface ColumnElement {
    key: string;
    width: number;
    element: HTMLElement;
}

@Directive({
    selector: 'fkt-table[fktTableResize]',
})
export class FktTableResizeDirective {
    readonly columnWidths = model<Record<string, number>>({});
    readonly mode = input<'fit' | 'dynamic'>('dynamic');
    readonly minColumnWidth = input(50);

    readonly resizingKey = signal<string | null>(null);
    readonly resizeIndicatorX = signal<number | null>(null);

    private readonly document = inject(DOCUMENT);
    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    private readonly allColumns = computed(() => {
        this.currentColumn();
        return this.getColumns();
    });

    private readonly previousColumns = computed(() => {
        const currentColumn = this.currentColumn();
        const allColumns = this.allColumns();

        const currentIndex = allColumns.findIndex(
            (column) => column.key === currentColumn?.key
        );

        if (currentIndex === -1) return [];

        return allColumns.slice(0, currentIndex);
    });

    private readonly currentColumn = computed(() => {
        const columns = this.getColumns();
        const key = this.resizingKey();

        return columns.find((column) => column.key === key);
    });

    private readonly nextColumns = computed(() => {
        const currentColumn = this.currentColumn();
        const allColumns = this.allColumns();

        const currentIndex = allColumns.findIndex(
            (column) => column.key === currentColumn?.key
        );

        if (currentIndex === -1) return [];

        return allColumns.slice(currentIndex + 1, allColumns.length);
    });

    private readonly nextColumn = computed(() => {
        const nextColumns = this.nextColumns();

        return nextColumns[0];
    });

    onResizeStart(columnKey: string, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        this.syncColumnWidths();
        this.updateResizingState(columnKey, event.clientX);

        let startResizePosition = event.clientX;

        const onUp = () => {
            this.resetResizingState();

            this.document.removeEventListener('mousemove', onMove);
            this.document.removeEventListener('mouseup', onUp);
        };

        const onMove = (moveEvent: MouseEvent) => {
            const delta = moveEvent.clientX - startResizePosition;

            const result = this.recalculateWidths(delta);

            if(result === 0) {
                this.updateResizingState(columnKey, startResizePosition);
                return;
            }

            this.updateResizingState(columnKey, moveEvent.clientX);
            startResizePosition = moveEvent.clientX;
        };

        this.document.addEventListener('mousemove', onMove);
        this.document.addEventListener('mouseup', onUp);
    }

    private recalculateWidths(delta: number) {
        if (this.mode() === 'fit') return this.recalculateWidthsFit(delta);

        return this.recalculateWidthsDynamic(delta);
    }

    private recalculateWidthsFit(delta: number) {
        const currentColumn = this.currentColumn();
        const nextColumn = this.nextColumn();

        if (!currentColumn || !nextColumn) return 0;

        const minimumWidth = this.minColumnWidth();
        const maximumWidth = currentColumn.width + nextColumn.width - minimumWidth;

        const newWidths = { ...this.columnWidths() };

        const clamp = (value: number) => {
            return clampNumber(value, minimumWidth, maximumWidth);
        }

        const originalWidth = newWidths[currentColumn.key];

        newWidths[currentColumn.key] = clamp(originalWidth + delta);
        newWidths[nextColumn.key] = clamp(newWidths[nextColumn.key] - delta)

        this.columnWidths.set(newWidths);

        return newWidths[currentColumn.key] - originalWidth;
    }

    private recalculateWidthsDynamic(delta: number) {
        const minimumWidth = this.minColumnWidth();

        const previousColumns = this.previousColumns();
        const nextColumns = this.nextColumns();

        const currentColumn = this.currentColumn();
        const nextColumn = this.nextColumn();

        if(!currentColumn || !nextColumn) return 0;

        const newWidths = { ...this.columnWidths() };

        const isResizingLeft = delta < 0;

        const columnsToShrink = isResizingLeft
            ? [...previousColumns, currentColumn].reverse()
            : nextColumns;

        const columnToGrow = isResizingLeft ? nextColumn : currentColumn;

        const appliedDelta = this.shrinkColumns(
            columnsToShrink,
            Math.abs(delta),
            newWidths,
            minimumWidth
        );

        newWidths[columnToGrow.key] = newWidths[columnToGrow.key] + appliedDelta;

        this.columnWidths.set(newWidths);

        return appliedDelta;
    }

    private shrinkColumns(
        columns: ColumnElement[],
        delta: number,
        newWidths: Record<string, number>,
        minimumWidth: number
    ): number {
        let remainingDelta = delta;

        for (const column of columns) {
            if (remainingDelta <= 0) break;

            const currentWidth = newWidths[column.key] ?? column.width;
            const targetWidth = Math.max(currentWidth - remainingDelta, minimumWidth);
            const shrinkAmount = currentWidth - targetWidth;

            newWidths[column.key] = targetWidth;
            remainingDelta -= shrinkAmount;
        }

        return delta - remainingDelta;
    }

    private updateResizingState(columnKey: string, mousePosition: number) {
        this.resizingKey.set(columnKey);
        this.resizeIndicatorX.set(this.getIndicatorPosition(mousePosition));
    }

    private resetResizingState() {
        this.resizingKey.set(null);
        this.resizeIndicatorX.set(null);
    }

    private syncColumnWidths() {
        this.columnWidths.set(this.getCurrentColumnWidths());
    }

    private getCurrentColumnWidths() {
        const currentWidths = { ...this.columnWidths() };

        this.allColumns().forEach((column) => {
            currentWidths[column.key] = column.width;
        });

        return currentWidths;
    }

    private getIndicatorPosition(mousePosition: number) {
        const containerLeft = this.getContainer().getBoundingClientRect().left;

        return mousePosition - containerLeft;
    }

    private getColumns(): ColumnElement[] {
        const elements = Array.from(
            this.getContainer().querySelectorAll('[data-column-key]')
        ) as HTMLElement[];

        return elements.map((element) => ({
            element: element,
            width: element.offsetWidth,
            key: element.getAttribute('data-column-key') ?? '',
        }));
    }

    private getContainer() {
        const container =
            this.elementRef.nativeElement.querySelector('.table-container');
        if (!container)
            throw new Error(
                'Can not calculate column widths without a table container'
            );

        return container as HTMLElement;
    }
}
