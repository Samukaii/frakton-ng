export function intersectRects(first: DOMRect, second: DOMRect): DOMRect | null {
    const left = Math.max(first.left, second.left);
    const top = Math.max(first.top, second.top);
    const right = Math.min(first.right, second.right);
    const bottom = Math.min(first.bottom, second.bottom);

    if (right <= left || bottom <= top) return null;

    return new DOMRect(left, top, right - left, bottom - top);
}
