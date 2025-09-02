import { DestroyRef, inject, signal, Signal } from '@angular/core';
import { FktGeometryRect } from '@frakton-ng/internal/types';

interface ElementSizeSignalFunction {
	(element: HTMLElement, options: {startWithNull: true}): Signal<FktGeometryRect | null>;
	(element: HTMLElement, options?: {startWithNull?: false}): Signal<FktGeometryRect>;
}

export const elementSizeSignal: ElementSizeSignalFunction = (element, options) => {
	const destroyRef = inject(DestroyRef);

	const size = signal<any>(options?.startWithNull ? null: element.getBoundingClientRect());

	const observer = new ResizeObserver(() => {
		size.set(element.getBoundingClientRect());
	});

	observer.observe(element);

	destroyRef.onDestroy(() => {
		observer.disconnect();
	});

	return size.asReadonly();
};
