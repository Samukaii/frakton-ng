import {
    afterRenderEffect,
    ElementRef,
    Signal,
    signal,
} from '@angular/core';

export const watchGridColumns = (
    gridElement: Signal<ElementRef<HTMLElement> | undefined>
) => {
    const totalColumns = signal(0);

    afterRenderEffect((onCleanup) => {
        const elementRef = gridElement();

        if (!elementRef) return;

        const resizeObserver = new ResizeObserver(() => updateColumns());
        resizeObserver.observe(elementRef.nativeElement);

        onCleanup(() => {
            resizeObserver.disconnect();
        });
    });

    const updateColumns = () => {
        const container = gridElement()?.nativeElement;

        if (!container) return;

        const computedStyles = window.getComputedStyle(container);
        const columnsString = computedStyles.getPropertyValue(
            'grid-template-columns'
        );

        if (!columnsString)
            throw new Error('The element does not use display: grid');

        const count = columnsString.trim().split(/\s+/).length;
        totalColumns.set(count || 1);
    };

    return totalColumns.asReadonly();
};
