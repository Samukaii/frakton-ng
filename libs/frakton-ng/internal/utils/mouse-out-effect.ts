import { DestroyRef, DOCUMENT, ElementRef, inject } from '@angular/core';

export interface MouseOutEffectOptions {
    excludeIdsOrElements?: (string | HTMLElement)[];
}

export const mouseOutEffect = (
    fn: (element: EventTarget) => void,
    options?: MouseOutEffectOptions
) => {
    const elementRef = inject(ElementRef);
    const destroyRef = inject(DestroyRef);
    const document = inject(DOCUMENT);

    const handleMouseOut = (event: MouseEvent) => {
        const wrapper = elementRef.nativeElement;

        const excludedElements =
            options?.excludeIdsOrElements
                ?.map((id) =>
                    typeof id === 'string' ? document.getElementById(id) : id
                )
                ?.filter((element) => !!element) ?? [];

        const isAnExcludedElement = excludedElements.some((excluded) =>
            excluded.contains(event.target as HTMLElement)
        );

        if (isAnExcludedElement) return;

        if (!wrapper.contains(event.target)) fn(event.target!);
    };

    document.addEventListener('mouseover', handleMouseOut);

    const destroy = () => {
        document.removeEventListener('mouseover', handleMouseOut);
    };

    destroyRef.onDestroy(destroy);

    return { destroy };
};
