import { InjectionToken, inject, DestroyRef, signal } from '@angular/core';

const WINDOW = new InjectionToken('window', {
    factory: () => window
});

const injectWindowScroll = () => {
    const destroyRef = inject(DestroyRef);
    const window = inject(WINDOW);
    const scroll = signal({
        x: window.scrollX,
        y: window.scrollY,
    }, ...(ngDevMode ? [{ debugName: "scroll" }] : []));
    const onScroll = () => {
        scroll.set({
            x: window.scrollX,
            y: window.scrollY,
        });
    };
    window.addEventListener('scroll', onScroll);
    destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
    });
    return scroll.asReadonly();
};

/**
 * Generated bundle index. Do not edit.
 */

export { WINDOW, injectWindowScroll };
//# sourceMappingURL=frakton-ng-internal-di.mjs.map
