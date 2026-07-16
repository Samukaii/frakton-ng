import { DOCUMENT } from '@angular/common';
import { afterRenderEffect, inject, Signal } from '@angular/core';

export interface DocumentEventListenerEffectOptions<
    K extends keyof DocumentEventMap,
> {
    key: K;
    listener: (this: Document, event: DocumentEventMap[K]) => void;
    options?: boolean | AddEventListenerOptions;
    enabled: Signal<boolean>;
}

export const documentEventListenerEffect = <
    K extends keyof DocumentEventMap,
>({
    key,
    listener,
    options,
    enabled,
}: DocumentEventListenerEffectOptions<K>) => {
    const document = inject(DOCUMENT);

    return afterRenderEffect((onCleanup) => {
        if (!enabled()) return;

        document.addEventListener(key, listener, options);

        onCleanup(() => {
            document.removeEventListener(key, listener, options);
        });
    });
};
