import { inject } from '@angular/core';
import { WINDOW } from './tokens';

export interface FktEyeDropper {
    open(options?: {signal?: AbortSignal}): Promise<{sRGBHex: string}>;
}

type WindowWithEyeDropper = Window & {
    EyeDropper?: new () => FktEyeDropper;
};

export const injectEyeDropper = (): FktEyeDropper | null => {
    const window = inject(WINDOW);
    const EyeDropper = (window as WindowWithEyeDropper).EyeDropper;

    if (!EyeDropper) return null;

    return new EyeDropper();
};
