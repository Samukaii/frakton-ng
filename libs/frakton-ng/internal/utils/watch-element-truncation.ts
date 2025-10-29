import { DestroyRef, inject, signal } from '@angular/core';
import { isElementTextTruncated } from './is-element-text-truncated';

export const watchElementTruncation = (element: HTMLElement) => {
	const isTruncated = signal(isElementTextTruncated(element));
	const destroyRef = inject(DestroyRef);

	const observer = new ResizeObserver(() => {
		isTruncated.set(isElementTextTruncated(element));
	})

	observer.observe(element);

	destroyRef.onDestroy(() => {
		observer.disconnect();
	});

	return isTruncated;
}
