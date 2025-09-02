import { DestroyRef, DOCUMENT, ElementRef, inject } from "@angular/core";

interface OutsideClickEffectOptions {
	excludeIdsOrElements?: (string | HTMLElement)[];
}

export const outsideClickEffect = (fn: (element: EventTarget) => void, options?: OutsideClickEffectOptions) => {
	const elementRef = inject(ElementRef);
	const destroyRef = inject(DestroyRef);
	const document = inject(DOCUMENT);

	const handleClickOutside = (event: MouseEvent) => {
		const wrapper = elementRef.nativeElement;

		const excludedElements = options?.excludeIdsOrElements
			?.map(id => typeof id === "string" ? document.getElementById(id): id)
			?.filter(element => !!element) ?? [];

		const isAnExcludedElement = excludedElements.some(excluded => excluded.contains(event.target as HTMLElement));

		if(isAnExcludedElement) return;

		if (!wrapper.contains(event.target)) fn(event.target!);
	};

	document.addEventListener('mousedown', handleClickOutside);

	const destroy = () => {
		document.removeEventListener('mousedown', handleClickOutside);
	};

	destroyRef.onDestroy(destroy);

	return {destroy}
}
