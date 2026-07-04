## Configuration Options

<arg-types></arg-types>

## Custom Icon Registration

Define trusted SVG content in a catalog, derive its names through module
augmentation, and register it in the application providers:

```ts
// custom-icons.ts
import { FktCustomIconCatalog } from 'frakton-ng/icon';

export const customIcons = {
  'company-logo': {
    viewBox: '0 0 32 32',
    content: '<path fill="currentColor" d="..." />',
  },
} as const satisfies FktCustomIconCatalog;

type CustomIcons = typeof customIcons;

declare module 'frakton-ng/icon' {
  interface FktCustomIcons extends CustomIcons {}
}
```

```ts
// app.config.ts
import { provideFktIcons } from 'frakton-ng/icon';
import { customIcons } from './custom-icons';

export const appConfig = {
  providers: [provideFktIcons(customIcons)],
};
```

`provideFktIcons` is a multi-provider. Calling it more than once combines the
catalogs, which allows features to provide independent application-owned icon
sets.

### Variants and Fallback

A definition without variants is used for every requested variant. For
variant-specific artwork, use `variants` and optionally `fallback`:

```ts
export const customIcons = {
  'company-status': {
    variants: {
      outline: outlineStatus,
      solid: solidStatus,
    },
    fallback: fallbackStatus,
  },
} as const satisfies FktCustomIconCatalog;
```

When a requested variant is absent and no fallback exists, the custom icon
renders no SVG content.

### Trust Boundary

Custom SVG content is trusted and rendered without sanitization. Only register
static application-owned markup. Never include values from users, APIs, a CMS,
or any other untrusted source.

## Performance

- The Outline catalog is included synchronously.
- Solid, Mini, and Micro catalogs are loaded when first requested.
- Loaded catalogs and resolved SVG markup are cached by the registry.
- Angular `PendingTasks` tracks catalog loading during server-side rendering.

## Accessibility

`fkt-icon` is decorative and always renders with `aria-hidden="true"`. Put the
accessible name on the containing button, link, field, or other semantic
element. Do not rely on the icon name as a screen-reader label.
