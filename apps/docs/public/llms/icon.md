# Components/Data Display/Icon

## Metadata

- id: icon
- type: story
- route: /docs/icon
- title: Components/Data Display/Icon
- component: FktIconComponent
- import: `import { FktIconComponent } from 'frakton-ng/icon';`

## Description

SVG icon component with typed built-in and application-defined names. Outline icons are
available synchronously, while Solid, Mini, and Micro catalogs are loaded on demand. Size, color,
and stroke width integrate with the design token system and remain customizable through CSS.

## Features

### Usage

- id: usage
- type: introduction

Core icon usage. Icons are decorative by default and inherit the surrounding text color, so the
accessible name must belong to the button, link, field, or other interface element that contains
them.

### Basic

- id: basic
- type: story
- component: IconBasicExampleComponent

A horizontal sample from the default Outline catalog. Icons inherit `currentColor` and use the
medium semantic size when no `variant` or `size` is provided.

Example component: `IconBasicExampleComponent`

```ts title="icon-basic-example.component.ts"
import { Component } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-icon-basic-example',
    imports: [FktIconComponent],
    templateUrl: './icon-basic-example.component.html',
    styleUrl: './icon-basic-example.component.scss',
})
export class IconBasicExampleComponent {}
```

```html title="icon-basic-example.component.html"
<fkt-icon name="home" />
<fkt-icon name="magnifying-glass" />
<fkt-icon name="bell" />
<fkt-icon name="heart" />
<fkt-icon name="cog-6-tooth" />
<fkt-icon name="user" />
```

```css title="icon-basic-example.component.scss"
:host {
    display: flex;
    align-items: center;
    gap: var(--fkt-space-md);
    color: var(--fkt-color-neutral-800);
}
```

### Gallery

- id: gallery
- type: story
- component: IconsGalleyComponent

Search the built-in catalog by icon name. Select an item to copy its typed name for use with the
`name` input.

### Sizes

- id: sizes
- type: story
- component: IconSizesExampleComponent

Semantic sizes keep icons aligned with the density of the surrounding component. Medium is the
default; use small for compact controls and large when the interface needs stronger emphasis.

Example component: `IconSizesExampleComponent`

```ts title="icon-sizes-example.component.ts"
import { Component } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-icon-sizes-example',
    imports: [FktIconComponent],
    templateUrl: './icon-sizes-example.component.html',
    styleUrl: './icon-sizes-example.component.scss',
})
export class IconSizesExampleComponent {}
```

```html title="icon-sizes-example.component.html"
<div>
    <fkt-icon name="sparkles" size="sm" />
    <span>Small</span>
</div>

<div>
    <fkt-icon name="sparkles" size="md" />
    <span>Medium</span>
</div>

<div>
    <fkt-icon name="sparkles" size="lg" />
    <span>Large</span>
</div>
```

```css title="icon-sizes-example.component.scss"
:host {
    display: flex;
    align-items: flex-end;
    gap: var(--fkt-space-lg);
}

div {
    display: grid;
    justify-items: center;
    gap: var(--fkt-space-xs);
}

span {
    color: var(--fkt-color-neutral-700);
    font-size: var(--fkt-font-size-sm);
}
```

### Variants

- id: variants
- type: introduction

Artwork variants. Outline is the default 24-unit stroked catalog. Solid, Mini, and Micro are
filled catalogs designed by Heroicons for different visual densities. They do not set the
rendered component size; combine `variant` and `size` according to the surrounding interface.

### VariantComparison

- id: variant-comparison
- type: story
- component: IconVariantsExampleComponent

The same icon across all four artwork catalogs. Filled variants are lazy-loaded the first time
they are requested and then cached by the icon registry.

Example component: `IconVariantsExampleComponent`

```ts title="icon-variants-example.component.ts"
import { Component } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-icon-variants-example',
    imports: [FktIconComponent],
    templateUrl: './icon-variants-example.component.html',
    styleUrl: './icon-variants-example.component.scss',
})
export class IconVariantsExampleComponent {}
```

```html title="icon-variants-example.component.html"
<div>
    <fkt-icon name="information-circle" variant="outline" />
    <span>Outline</span>
</div>

<div>
    <fkt-icon name="information-circle" variant="solid" />
    <span>Solid</span>
</div>

<div>
    <fkt-icon name="information-circle" variant="mini" />
    <span>Mini</span>
</div>

<div>
    <fkt-icon name="information-circle" variant="micro" />
    <span>Micro</span>
</div>
```

```css title="icon-variants-example.component.scss"
:host {
    display: flex;
    align-items: flex-end;
    gap: var(--fkt-space-lg);
}

div {
    display: grid;
    justify-items: center;
    gap: var(--fkt-space-xs);
}

span {
    color: var(--fkt-color-neutral-700);
    font-size: var(--fkt-font-size-sm);
}
```

### Customization

- id: customization
- type: introduction

Styling and theming. Design tokens establish application or component defaults, while regular
`color` and `font-size` declarations are useful for one-off adjustments. Stroke width affects
stroked artwork such as the Outline catalog.

### Styling

- id: styling
- type: story
- component: IconCustomizationExampleComponent

Token-based and direct CSS customization. The SVG uses `currentColor` and `1em`, preserving the
normal CSS inheritance model instead of introducing separate color and pixel-size inputs.

Example component: `IconCustomizationExampleComponent`

```ts title="icon-customization-example.component.ts"
import { Component } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-icon-customization-example',
    imports: [FktIconComponent],
    templateUrl: './icon-customization-example.component.html',
    styleUrl: './icon-customization-example.component.scss',
})
export class IconCustomizationExampleComponent {}
```

```html title="icon-customization-example.component.html"
<div>
    <span class="token-icon">
        <fkt-icon name="sparkles" />
    </span>
    <span>Design tokens</span>
</div>

<div>
    <fkt-icon class="direct-icon" name="heart" />
    <span>Direct CSS</span>
</div>
```

```css title="icon-customization-example.component.scss"
:host {
    display: flex;
    align-items: flex-end;
    gap: var(--fkt-space-xl);
}

div {
    display: grid;
    justify-items: center;
    gap: var(--fkt-space-xs);
}

.token-icon {
    --fkt-icon-size-md: 2rem;
    --fkt-icon-color: var(--fkt-color-warning);
    --fkt-icon-stroke-width: 2;
}

.direct-icon {
    color: var(--fkt-color-danger);
    font-size: 2rem;
}

span {
    color: var(--fkt-color-neutral-700);
    font-size: var(--fkt-font-size-sm);
}
```

### CustomIcon

- id: custom-icon
- type: story
- component: IconCustomExampleComponent

An application-provided icon rendered through its variantless fallback. The catalog used by this
documentation is registered in the application configuration, not by the example component.

Define the SVG content in an application-owned catalog and use module augmentation to add its
keys to `FktIconName`:

```ts title="app/custom-icons.ts"
import { FktCustomIconCatalog } from 'frakton-ng/icon';

export const customIcons = {
    'github': {
        viewBox: '0 0 32 32',
        content: '<path fill="currentColor" d="..." />',
    },
    'discord': {
        viewBox: '0 0 32 32',
        content: '<path fill="currentColor" d="..." />',
    },
} as const satisfies FktCustomIconCatalog;

type CustomIcons = typeof customIcons;

declare module 'frakton-ng/icon' {
    interface FktCustomIcons extends CustomIcons {}
}
```

Register the catalog once in the application providers:

```ts title="app/app.config.ts"
import { provideFktIcons } from 'frakton-ng/icon';
import { customIcons } from './custom-icons';

export const appConfig = {
    providers: [provideFktIcons(customIcons)],
};
```

A plain definition is used for every requested variant. When artwork differs by variant, provide
a `variants` map and an optional `fallback`. SVG content is trusted and rendered without
sanitization, so catalogs must contain only static, application-owned markup.

Example component: `IconCustomExampleComponent`

```ts title="icon-custom-example.component.ts"
import { Component } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-icon-custom-example',
    imports: [FktIconComponent],
    templateUrl: './icon-custom-example.component.html',
    styleUrl: './icon-custom-example.component.scss',
})
export class IconCustomExampleComponent {}
```

```html title="icon-custom-example.component.html"
<div>
    <fkt-icon name="github" size="lg" variant="micro"/>
    <span>Github icon</span>
</div>

<div>
    <fkt-icon name="discord" size="lg" variant="micro"/>
    <span>Discord icon</span>
</div>
```

```css title="icon-custom-example.component.scss"
:host {
  display: flex;
  flex-direction: column;
  gap: var(--fkt-space-xs);
  color: var(--fkt-color-primary);
}

div {
  display: flex;
  align-items: center;
  gap: var(--fkt-space-xs);

  span {
    font-size: var(--fkt-font-size-sm);
    font-weight: var(--fkt-font-semibold);
  }
}

fkt-icon[name="discord"] {
  color: #565DF6FF;
}
```

## API Reference

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
