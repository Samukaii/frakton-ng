import { DestroyRef, inject, signal } from '@angular/core';
import { FktGeometryPoint } from 'frakton-ng/internal/types';
import { WINDOW } from './tokens';
import { debounce } from 'frakton-ng/internal/utils';

export const injectWindowScroll = (debounceTime  = 0) => {
	const destroyRef = inject(DestroyRef);
	const window = inject(WINDOW);

	const scroll = signal<FktGeometryPoint>({
		x: window.scrollX,
		y: window.scrollY,
	});

	const updateDebounced = debounce(() => {
		scroll.set({
			x: window.scrollX,
			y: window.scrollY,
		})
	}, debounceTime);

	const onScroll = () => {
		if(debounceTime > 0)
			return updateDebounced();

		scroll.set({
			x: window.scrollX,
			y: window.scrollY,
		})
	}

	window.addEventListener('scroll', onScroll, true);

	destroyRef.onDestroy(() => {
		window.removeEventListener('scroll', onScroll, true);
	});

	return scroll.asReadonly();
}
