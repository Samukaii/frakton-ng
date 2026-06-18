import {
    computed,
    linkedSignal,
    signal,
    Signal,
    WritableSignal,
} from '@angular/core';

/**
 * Reactive cursor that tracks a single "active" item within a list, modeling the
 * WAI-ARIA `aria-activedescendant` pattern used by listboxes, comboboxes, and
 * autocomplete popups.
 *
 * All movement methods return `true` when the cursor moved and `false` when the
 * call was a no-op (disabled, empty list, or out-of-range index). Callers can
 * use the return value to decide whether to `preventDefault()` on a key event.
 */
export interface ActiveDescendant<T> {
    /** Current cursor position. `-1` when no item is active. */
    baseId: string;
    id: Signal<string>;
    index: Signal<number>;
    option: WritableSignal<{scroll: boolean}>;
    /** Item at the current index, or `null` when nothing is active. */
    active: Signal<T | null>;
    /** `true` when navigation is enabled and the list has at least one item. */
    canMove: Signal<boolean>;
    /** Move to the next item, wrapping back to index 0 from the end. */
    moveDown: (option?: { scroll: boolean }) => boolean;
    /** Move to the previous item, wrapping to the last index from the start. */
    moveUp: (option?: { scroll: boolean }) => boolean;
    moveToFirst: (option?: { scroll: boolean }) => boolean;
    moveToLast: (option?: { scroll: boolean }) => boolean;
    /** Jump to a specific index. Returns `false` if out of range. */
    setIndex: (index: number, option?: { scroll: boolean }) => boolean;
}

/**
 * Creates an {@link ActiveDescendant} cursor for the given items signal.
 *
 * The active index resets to `0` whenever `items` or `enabled` change so the
 * cursor never points at a stale position after the source list is replaced
 * (e.g. when an autocomplete query produces a new result set). When `enabled`
 * is `false` or the list is empty, the index collapses to `-1`.
 *
 * `moveDown` and `moveUp` wrap around the list edges, matching the behavior
 * expected by ARIA listbox widgets.
 */
export function useActiveDescendant<T>(options: {
    baseId: string;
    items: Signal<readonly T[]>;
    enabled: Signal<boolean>;
}): ActiveDescendant<T> {
    const canMove = computed(
        () => options.enabled() && options.items().length > 0
    );

    const args = signal({scroll: true});

    const activeIndex = linkedSignal({
        source: () => ({ items: options.items(), canMove: canMove() }),
        computation: (source): number => {
            if (!source.canMove) return -1;

            return 0;
        },
    });


    return {
        baseId: options.baseId,
        id: computed(() => `${options.baseId}-${activeIndex()}`),
        index: activeIndex.asReadonly(),
        option: args,
        canMove,
        active: computed(() => {
            if (!canMove()) return null;

            const item = options.items()[activeIndex()];

            return item ?? null;
        }),

        moveDown: (option) => {
            args.set(option ?? {scroll: true});
            const length = options.items().length;
            if (!canMove()) return false;

            const next = (activeIndex() + 1) % length;
            activeIndex.set(next);

            return true;
        },

        moveUp: (option) => {
            args.set(option ?? { scroll: true });
            const length = options.items().length;
            if (!canMove()) return false;

            const previous = (activeIndex() - 1 + length) % length;
            activeIndex.set(previous);
            return true;
        },

        moveToFirst: (option) => {
            args.set(option ?? { scroll: true });
            if (!canMove()) return false;

            activeIndex.set(0);
            return true;
        },

        moveToLast: (option) => {
            args.set(option ?? { scroll: true });
            const length = options.items().length;
            if (!canMove()) return false;

            activeIndex.set(length - 1);
            return true;
        },

        setIndex: (index: number, option) => {
            args.set(option ?? { scroll: true });
            const length = options.items().length;

            if (!canMove() || index < 0 || index >= length) return false;

            activeIndex.set(index);
            return true;
        },
    };
}
