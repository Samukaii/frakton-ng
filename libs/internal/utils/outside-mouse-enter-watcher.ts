import { DestroyRef, DOCUMENT, ElementRef, inject } from '@angular/core';

interface OutsideMouseEnterEffectOptions {
	excludeIds?: string[];
}

export const outsideMouseEnterWatcher = (
	options?: OutsideMouseEnterEffectOptions,
) => {
	const elementRef = inject(ElementRef);
	const destroyRef = inject(DestroyRef);
	const document = inject(DOCUMENT);

	let handler: () => void = () => {};
	let registered = false;

	const handleMouseOver = (event: MouseEvent) => {
		const wrapper = elementRef.nativeElement;
		const related = event.relatedTarget as Node;

		const excludedElements =
			options?.excludeIds
				?.map(id => document.getElementById(id))
				?.filter(element => !!element) ?? [];

		const isStillInside =
			wrapper.contains(event.target as Node) ||
			wrapper.contains(related) ||
			excludedElements.some(el =>
				el.contains(event.target as Node) || el.contains(related)
			);

		if (isStillInside) return;

		handler();
	};

	const watch = (fn: () => void) => {
		handler = fn;

		if (!registered) {
			document.addEventListener('mouseover', handleMouseOver, true);
			registered = true;
		}
	};

	const stop = () => {
		if (!registered) return;
		document.removeEventListener('mouseover', handleMouseOver, true);
		registered = false;
	};

	destroyRef.onDestroy(stop);

	return { watch, stop };
};
