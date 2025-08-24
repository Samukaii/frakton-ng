import { DestroyRef, inject, signal } from '@angular/core';
import { WINDOW } from './tokens/window';
import { FktGeometryPoint } from '../shared/types';

export const injectWindowScroll = () => {
	const destroyRef = inject(DestroyRef);
	const window = inject(WINDOW);

	const scroll = signal<FktGeometryPoint>({
		x: window.scrollX,
		y: window.scrollY,
	});

	const onScroll = () => {
		scroll.set({
			x: window.scrollX,
			y: window.scrollY,
		})
	}

	window.addEventListener('scroll', onScroll);

	destroyRef.onDestroy(() => {
		window.removeEventListener('scroll', onScroll);
	});

	return scroll.asReadonly();
}
