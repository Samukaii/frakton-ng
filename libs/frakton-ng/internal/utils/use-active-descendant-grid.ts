import { computed, isSignal, Signal, signal } from '@angular/core';
import { clampNumber } from './clamp-number';

export interface ActiveDescendantGridOptions<T> {
    items: Signal<T[]>;
    columnsCount: Signal<number> | number;
    wrap?: boolean;
    selectKeys?: string[];
    onSelect?: (item: T, event: KeyboardEvent) => void;
}

export const useActiveDescendantGrid = <T>(
    options: ActiveDescendantGridOptions<T>
) => {
    const activeIndex = signal(-1);
    const wrap = options.wrap ?? true;
    const selectKeys = options.selectKeys ?? ['Enter'];

    const activeItem = computed<T | null>(
        () => options.items()[activeIndex()] ?? null
    );

    const relativeIndex = () => activeIndex() % getColumnsCount();

    const getColumnsCount = () =>
        isSignal(options.columnsCount)
            ? options.columnsCount()
            : options.columnsCount;

    const clampAbsolute = (value: number) =>
        clampNumber(value, 0, options.items().length - 1);

    const clampRelative = (value: number) =>
        clampNumber(value, firstRelativeColumn(), lastRelativeColumn());

    const cycleAbsolute = (value: number) =>
        (value < 0 ? options.items().length + value : value) %
        options.items().length;

    const firstRelativeColumn = () => {
        const active = activeIndex();
        const columns = getColumnsCount();
        return active - (active % columns);
    };

    const lastRelativeColumn = () => {
        const columns = getColumnsCount();
        return clampAbsolute(firstRelativeColumn() + columns - 1);
    };

    const update = (fn: (index: number) => number) => {
        const active = activeIndex();

        const result = fn(active);

        const clamped = wrap ? cycleAbsolute(result) : clampAbsolute(result);

        if (clamped === active) return;

        activeIndex.set(clamped);
    };

    const updateHorizontal = (fn: (index: number) => number) =>
        update((index) => (wrap ? fn(index) : clampRelative(fn(index))));

    const moveUp = () => {
        update((index) => {
            const columns = getColumnsCount();
            const totalItems = options.items().length;

            const result = index - columns;

            if (result >= 0) return result;

            const standaloneItems = totalItems % columns;

            if (index > standaloneItems - 1)
                return index - columns - standaloneItems;

            return index - standaloneItems;
        });
    };

    const moveDown = () => {
        update((index) => {
            const columns = getColumnsCount();

            const result = index + columns;

            if (result < options.items().length) return result;

            return relativeIndex();
        });
    };

    const moveRight = () => {
        updateHorizontal((index) => index + 1);
    };

    const moveLeft = () => {
        updateHorizontal((index) => index - 1);
    };

    const moveToFirstColumn = () => {
        update(() => firstRelativeColumn());
    };

    const moveToLastColumn = () => {
        update(() => lastRelativeColumn());
    };

    const moveToLastItem = () => {
        update(() => options.items().length - 1);
    };

    const moveToFirstItem = () => {
        update(() => 0);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();

                moveRight();

                break;
            case 'ArrowLeft':
                event.preventDefault();

                moveLeft();

                break;

            case 'ArrowDown':
                event.preventDefault();

                moveDown();

                break;
            case 'ArrowUp':
                event.preventDefault();

                moveUp();

                break;
            case 'Home':
                event.preventDefault();

                if (event.ctrlKey) moveToFirstItem();
                else moveToFirstColumn();

                break;
            case 'End':
                event.preventDefault();

                if (event.ctrlKey) moveToLastItem();
                else moveToLastColumn();

                break;
        }

        const item = activeItem();
        if (selectKeys.includes(event.key) && item)
            options.onSelect?.(item, event);
    };

    return {
        handleKeyDown,
        activeIndex: activeIndex.asReadonly(),
        activeItem,
        reset: () => activeIndex.set(-1),
    };
};
