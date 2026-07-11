import { inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { wait } from 'frakton-ng/internal/utils';

export const createClipboardCopy = (getText: () => Promise<string>) => {
    const copied = signal(false);
    const platform = inject(PLATFORM_ID);

    const copy = async () => {
        if (!isPlatformBrowser(platform)) return;

        const text = await getText();
        await navigator.clipboard.writeText(text);

        copied.set(true);
        await wait(1000);
        copied.set(false);
    };

    return { copy, copied: copied.asReadonly() };
};
