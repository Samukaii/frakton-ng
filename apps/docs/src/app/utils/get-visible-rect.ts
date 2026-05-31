import { intersectRects } from '@/utils/intersect-rects';

export function getVisibleRect(
    element: HTMLElement,
    root: HTMLElement
): DOMRect | null {
    let rect: DOMRect | null = element.getBoundingClientRect();

    let parent = element.parentElement;

    while (parent && parent !== root.parentElement) {
        const style = getComputedStyle(parent);

        const clips =
            ['auto', 'scroll', 'hidden', 'clip'].includes(style.overflow) ||
            ['auto', 'scroll', 'hidden', 'clip'].includes(style.overflowX) ||
            ['auto', 'scroll', 'hidden', 'clip'].includes(style.overflowY);

        if (clips) {
            const parentRect = parent.getBoundingClientRect();

            rect = intersectRects(rect, parentRect);

            if (!rect) return null;
        }

        if (parent === root) break;

        parent = parent.parentElement;
    }

    return rect;
}

