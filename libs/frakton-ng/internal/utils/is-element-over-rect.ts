export const isElementOverRect = (target: HTMLElement, rect: DOMRect): boolean => {
	if (!target || !rect) return false;

	const elRect = target.getBoundingClientRect();

	const isHorizontallyOverlapping =
		elRect.left < rect.right && elRect.right > rect.left;

	const isVerticallyOverlapping =
		elRect.top < rect.bottom && elRect.bottom > rect.top;

	return isHorizontallyOverlapping && isVerticallyOverlapping;
}
