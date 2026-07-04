import { FktCustomIconCatalog } from 'frakton-ng/icon';

export const customIcons = {
    'custom-square': {
        viewBox: '0 0 24 24',
        content:
            '<rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/><path d="M8 12h8M12 8v8" stroke="white" stroke-width="2" stroke-linecap="round"/>',
    },
} as const satisfies FktCustomIconCatalog;

type CustomIcons = typeof customIcons;

declare module 'frakton-ng/icon' {
    interface FktCustomIcons extends CustomIcons {}
}
