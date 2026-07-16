import { DOCUMENT } from '@angular/common';
import { afterRenderEffect, inject, Signal } from '@angular/core';

export interface WindowEventListenerEffectOptions<
  K extends keyof WindowEventMap
> {
  key: K;
  listener: (this: Window, event: WindowEventMap[K]) => void;
  options?: boolean | AddEventListenerOptions;
  enabled: Signal<boolean>;
}

export const windowEventListenerEffect = <K extends keyof WindowEventMap>({
  key,
  listener,
  options,
  enabled,
}: WindowEventListenerEffectOptions<K>) => {
  const window = inject(DOCUMENT).defaultView;

  return afterRenderEffect((onCleanup) => {
    if (!enabled()) return;

    window?.addEventListener(key, listener, options);

    onCleanup(() => {
      window?.removeEventListener(key, listener, options);
    });
  });
};
