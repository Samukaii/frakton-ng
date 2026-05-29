import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export const injectDimensions = () => {
    const doc = inject(DOCUMENT);
    const platform = inject(PLATFORM_ID);
    const rootFontSize = isPlatformBrowser(platform)
        ? parseFloat(getComputedStyle(doc.documentElement).fontSize) || 16
        : 16;

    return {
        parseWidth: (width?: string): number => {
            if (!width) return 0;
            if (width.endsWith('px')) return parseFloat(width);
            if (width.endsWith('rem')) return parseFloat(width) * rootFontSize;
            return 0;
        },
    };
};
