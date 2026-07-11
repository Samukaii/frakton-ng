# Components/Actions/Button

## Metadata

- id: button
- type: story
- route: /docs/button
- title: Components/Actions/Button
- component: FktButtonComponent
- import: `import { FktButtonComponent } from 'frakton-ng/button';`

## Description

Native button component with an opinionated visual structure. The required label owns
the accessible name, while optional built-in icons, custom content, and loading indicator slots
support limited composition without replacing the button's primary semantics.

## Features

### Usage

- id: usage
- type: introduction

Native host usage. Apply `fktButton` directly to a `<button>` or `<a>` and provide its required
label. Events, focus, native attributes, directives, element references, and form or navigation
behavior stay on the actual interactive element.

### Basic

- id: basic
- type: story
- component: ButtonBasicExampleComponent

The appearances use the same native markup and semantic label. `type="button"` is applied by
default; consumers can use native attributes such as `name`, `value`, `form`, `autofocus`, and
`aria-describedby` without forwarding through a wrapper component.

Example component: `ButtonBasicExampleComponent`

```ts title="button-basic-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-button-basic-example',
    imports: [FktButtonComponent],
    templateUrl: './button-basic-example.component.html',
    styleUrl: './button-basic-example.component.scss',
})
export class ButtonBasicExampleComponent {}
```

```html title="button-basic-example.component.html"
<button fktButton label="Save changes"> </button>
<button fktButton label="Cancel" appearance="stroked"> </button>
<button fktButton label="Learn more" appearance="basic"> </button>
```

```css title="button-basic-example.component.scss"
:host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--fkt-space-sm);
}
```

### AnchorHosts

- id: anchor-hosts
- type: story
- component: ButtonAnchorsExampleComponent

Anchor hosts keep native link behavior while sharing the same button appearance and accessibility
contract. `type` and native `disabled` are never applied to anchors; disabled or loading anchors
receive `aria-disabled`, leave the tab order, and block activation.

Example component: `ButtonAnchorsExampleComponent`

```ts title="button-anchors-example.component.ts"
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-button-anchors-example',
    imports: [FktButtonComponent, RouterLink],
    templateUrl: './button-anchors-example.component.html',
    styleUrl: './button-anchors-example.component.scss',
})
export class ButtonAnchorsExampleComponent {}
```

```html title="button-anchors-example.component.html"
<a
    appearance="stroked"
    fktButton
    href="https://github.com/Samukaii/frakton-ng"
    icon="arrow-top-right-on-square"
    label="Open repository"
    rel="noopener noreferrer"
    target="_blank"
>
</a>

<a
    appearance="basic"
    fktButton
    label="Read installation guide"
    routerLink="/getting-started/installation"
    suffixIcon="chevron-right"
>
</a>

<a
    disabled
    fktButton
    href="/account/billing"
    label="Billing unavailable"
>
</a>
```

```css title="button-anchors-example.component.scss"
:host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--fkt-space-sm);
}
```

### Sizes

- id: sizes
- type: story
- component: ButtonSizesExampleComponent

Semantic sizes provide compact, default, and large control densities. Icon-only buttons use
fixed square dimensions from the same size scale so toolbar and table actions remain aligned.

Example component: `ButtonSizesExampleComponent`

```ts title="button-sizes-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-button-sizes-example',
    imports: [FktButtonComponent],
    templateUrl: './button-sizes-example.component.html',
    styleUrl: './button-sizes-example.component.scss',
})
export class ButtonSizesExampleComponent {}
```

```html title="button-sizes-example.component.html"
<div>
    <button fktButton label="Small" size="sm"> </button>
    <button fktButton label="Add item" size="sm" icon="plus" iconOnly></button>
</div>

<div>
    <button fktButton label="Medium" size="md"> </button>
    <button fktButton label="Add item" size="md" icon="plus" iconOnly></button>
</div>

<div>
    <button fktButton label="Large" size="lg"> </button>
    <button fktButton label="Add item" size="lg" icon="plus" iconOnly></button>
</div>
```

```css title="button-sizes-example.component.scss"
:host {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--fkt-space-lg);
}

div {
    display: flex;
    align-items: center;
    gap: var(--fkt-space-xs);
}
```

### Composition

- id: composition
- type: introduction

Limited composition keeps the required label under component ownership while exposing built-in
icon inputs, custom visual content, and a loading-indicator slot. Visual content is decorative;
the required label remains the accessible name.

### IconsAndContent

- id: icons-and-content
- type: story
- component: ButtonCompositionExampleComponent

Use `icon`, `suffixIcon`, and `iconOnly` for common icon buttons. Use `[fktButtonContent]` when
the visual content is application-specific and should replace the visible label. Add `fill`
to let the projected content own the full button surface.

Example component: `ButtonCompositionExampleComponent`

```ts title="button-composition-example.component.ts"
import { Component } from '@angular/core';
import {
    FktButtonContentDirective,
    FktButtonComponent,
} from 'frakton-ng/button';

@Component({
    selector: 'app-button-composition-example',
    imports: [
        FktButtonComponent,
        FktButtonContentDirective,
    ],
    templateUrl: './button-composition-example.component.html',
    styleUrl: './button-composition-example.component.scss',
})
export class ButtonCompositionExampleComponent {}
```

```html title="button-composition-example.component.html"
<button
        appearance="basic"
        fktButton
        icon="bell"
        label="Notifications"
        suffixIcon="chevron-down">
</button>

<button color="danger" fktButton icon="trash" iconOnly label="Delete">
</button>

<button appearance="stroked" fktButton label="Open user profile">
    <span class="profile-chip" fill fktButtonContent>
        SA
    </span>
</button>
```

```css title="button-composition-example.component.scss"
:host {
  display: flex;
  align-items: center;
  gap: var(--fkt-space-md);
}

.profile-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  align-self: stretch;
  min-height: 2rem;
  aspect-ratio: 1;

  padding: 0 var(--fkt-space-xs);

  color: var(--fkt-color-on-primary);
  background: var(--fkt-color-primary);
  border-radius: var(--fkt-radius-xl);
  corner-shape: squircle;
  font-size: var(--fkt-font-size-xs);
  font-weight: var(--fkt-font-semibold);

  line-height: 1;
  box-sizing: border-box;
}
```

### Loading

- id: loading
- type: story
- component: ButtonLoadingExampleComponent

Loading inserts an indicator at the configured side. At `loadingPosition="start"` it replaces
`icon` when present; at `loadingPosition="end"` it replaces `suffixIcon` when present. It binds
`aria-busy="true"` and makes the effective disabled state `disabled || loading`. Project
`[fktButtonLoadingIndicator]` to replace the built-in spinner.

Example component: `ButtonLoadingExampleComponent`

```ts title="button-loading-example.component.ts"
import { Component } from '@angular/core';
import {
    FktButtonComponent,
    FktButtonLoadingIndicatorDirective,
} from 'frakton-ng/button';


@Component({
    selector: 'app-button-loading-example',
    imports: [
        FktButtonComponent,
        FktButtonLoadingIndicatorDirective,
    ],
    templateUrl: './button-loading-example.component.html',
    styleUrl: './button-loading-example.component.scss',
})
export class ButtonLoadingExampleComponent {}
```

```html title="button-loading-example.component.html"
<div>
    <button fktButton label="Start loading" icon="check" loading></button>

    <button fktButton label="End loading" suffixIcon="check" loading loadingPosition="end"></button>
</div>

<div>
    <button
        fktButton
        label="Start custom loading"
        loading
        loadingPosition="start"
    >
        <span class="dots" fktButtonLoadingIndicator>
            <span></span>
            <span></span>
            <span></span>
        </span>
    </button>

    <button fktButton label="End custom loading" loading loadingPosition="end">
        <span class="dots" fktButtonLoadingIndicator>
            <span></span>
            <span></span>
            <span></span>
        </span>
    </button>
</div>
```

```css title="button-loading-example.component.scss"
:host {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fkt-space-sm);
  flex-direction: column;

  & > div {
    display: flex;
    gap: var(--fkt-space-sm);
  }
}

.dots {
  letter-spacing: 0.08em;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: flex-end;
  height: 100%;

  span {
    width: 4px;
    height: 4px;
    background-color: currentColor;
    transform: translateY(-1px);
    border-radius: 50%;
    animation: float 0.4s infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
}

@keyframes float {
  to {
    transform: translateY(-8px);
  }
}
```

### Appearance

- id: appearance
- type: introduction

Appearance combines visual treatment, shape, color, and size without changing button semantics. Semantic
colors follow the design system, while custom CSS colors compute a contrasting content color.

### TextVariants

- id: text-variants
- type: story
- component: TextVariantsExampleComponent

Appearances and semantic colors across the supported shapes.

Example component: `TextVariantsExampleComponent`

```ts title="text-variants-example.component.ts"
import { Component } from '@angular/core';
import {
    FktButtonColor,
    FktButtonAppearance,
    fktButtonAppearances,
    fktButtonColors,
    FktButtonComponent,
    FktButtonShape,
    fktButtonShapes,
} from 'frakton-ng/button';
import { capitalize } from '@/utils/capitalize';

interface ButtonVariant {
    title: string;
    value: FktButtonShape;
    appearances: {
        title: string;
        value: FktButtonAppearance;
        colors: {
            title: string;
            value: FktButtonColor;
        }[];
    }[];
}

@Component({
    selector: 'fkt-text-variants-example',
    imports: [FktButtonComponent],
    templateUrl: './text-variants-example.component.html',
    styleUrl: './text-variants-example.component.scss',
})
export class TextVariantsExampleComponent {
    private buttonShapes = fktButtonShapes.filter(
        (shape) => shape !== 'default'
    );

    private buttonAppearances = fktButtonAppearances.filter(
        (appearance) => appearance !== 'default'
    );

    private buttonColors = fktButtonColors.filter(
        (shape) => shape !== 'default'
    );

    protected shapes: ButtonVariant[] = this.buttonShapes.map((value) => ({
        title: capitalize(value),
        value,
        appearances: this.buttonAppearances.map((value) => ({
            title: capitalize(value),
            value,
            colors: this.buttonColors.map((value) => ({
                title: capitalize(value),
                value,
            })),
        })),
    }));
}
```

```html title="text-variants-example.component.html"
@for (shape of shapes; track shape.value) {
    <table>
        <thead>
            <tr>
                <th colspan="7">
                    {{ shape.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            @for (appearance of shape.appearances; track appearance.value) {
                <tr>
                    <td class="appearance">
                        {{ appearance.title }}
                    </td>

                    @for (color of appearance.colors; track color.value) {
                        <td>
                            <button [color]="color.value" [appearance]="appearance.value" [label]="color.title" [shape]="shape.value" fktButton>
                            </button>
                        </td>
                    }
                </tr>
            }
        </tbody>
    </table>
}
```

```css title="text-variants-example.component.scss"
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fkt-space-md);
  width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 900px;

  td, th {
    padding: var(--fkt-space-xs);
    text-align: center;
    border: solid 1px var(--fkt-color-neutral-300);

    &.appearance {
      font-weight: var(--fkt-font-semibold);
      text-align: right;
      font-size: var(--fkt-font-size-sm);
    }
  }
}
```

### IconVariants

- id: icon-variants
- type: story
- component: IconVariantsExampleComponent

Icon-only buttons use the same appearance, shape, and color contracts as labeled buttons. Their
required label is exposed through `aria-label`.

Example component: `IconVariantsExampleComponent`

```ts title="icon-variants-example.component.ts"
import { Component } from '@angular/core';
import {
    FktButtonColor,
    FktButtonAppearance,
    fktButtonAppearances,
    fktButtonColors,
    FktButtonComponent,
    FktButtonShape,
    fktButtonShapes,
} from 'frakton-ng/button';
import { capitalize } from '@/utils/capitalize';

interface ButtonVariant {
    title: string;
    value: FktButtonShape;
    appearances: {
        title: string;
        value: FktButtonAppearance;
        colors: {
            title: string;
            value: FktButtonColor;
        }[];
    }[];
}

@Component({
    selector: 'fkt-icon-variants-example',
    imports: [FktButtonComponent],
    templateUrl: './icon-variants-example.component.html',
    styleUrl: './icon-variants-example.component.scss',
})
export class IconVariantsExampleComponent {
    private buttonShapes = fktButtonShapes.filter(
        (shape) => shape !== 'default'
    );

    private buttonAppearances = fktButtonAppearances.filter(
        (appearance) => appearance !== 'default'
    );

    private buttonColors = fktButtonColors.filter(
        (shape) => shape !== 'default'
    );

    protected shapes: ButtonVariant[] = this.buttonShapes.map((value) => ({
        title: capitalize(value),
        value,
        appearances: this.buttonAppearances.map((value) => ({
            title: capitalize(value),
            value,
            colors: this.buttonColors.map((value) => ({
                title: capitalize(value),
                value,
            })),
        })),
    }));
}
```

```html title="icon-variants-example.component.html"
@for (shape of shapes; track shape.value) {
<table>
    <thead>
        <tr>
            <th colspan="7">
                {{ shape.title }}
            </th>
        </tr>
    </thead>
    <tbody>
        @for (appearance of shape.appearances; track appearance.value) {
        <tr>
            <td class="appearance">
                {{ appearance.title }}
            </td>

            @for (color of appearance.colors; track color.value) {
            <td>
                <button
                    [appearance]="appearance.value"
                    [color]="color.value"
                    [label]="'Add ' + color.title"
                    [shape]="shape.value"
                    fktButton
                    icon="hand-thumb-up"
                    iconOnly
                ></button>
            </td>
            }
        </tr>
        }
    </tbody>
</table>
}
```

```css title="icon-variants-example.component.scss"
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fkt-space-md);
  width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 700px;

  td, th {
    padding: var(--fkt-space-xs);
    text-align: center;
    border: solid 1px var(--fkt-color-neutral-300);

    &.appearance {
      font-weight: var(--fkt-font-semibold);
      text-align: right;
      font-size: var(--fkt-font-size-sm);
    }
  }
}
```

### CustomColors

- id: custom-colors
- type: story
- component: ButtonCustomColorsExampleComponent

Any CSS color value is supported for application-specific actions. With
`labelColor="auto"`, the component derives black or white from the resolved color; pass
`labelColor` when the application needs an explicit override.

Example component: `ButtonCustomColorsExampleComponent`

```ts title="button-custom-colors-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-button-custom-colors-example',
    imports: [FktButtonComponent],
    templateUrl: './button-custom-colors-example.component.html',
    styleUrl: './button-custom-colors-example.component.scss',
})
export class ButtonCustomColorsExampleComponent {}
```

```html title="button-custom-colors-example.component.html"
<button fktButton label="Named CSS color" color="red">

</button>

<button
    fktButton
    label="CSS custom property"
    color="var(--example-brand-color)"
>

</button>

<button
    fktButton
    label="Explicit text color"
    color="hsl(43 96% 56%)"
    labelColor="#422006"
>

</button>
```

```css title="button-custom-colors-example.component.scss"
:host {
    --example-brand-color: oklch(55% 0.24 292);

    display: flex;
    flex-wrap: wrap;
    gap: var(--fkt-space-sm);
}
```

## API Reference

## Configuration Options

<arg-types></arg-types>

## Native Host

`FktButtonComponent` uses native interactive hosts: `button[fktButton]` for
actions and `a[fktButton]` for navigation. Native attributes, events, focus,
tooltips, analytics directives, and element references belong directly to the
interactive element.

```html
<button
  fktButton
  label="Save"
  name="intent"
  value="save"
  type="submit"
/>
```

The default button `type` is `button` to avoid accidental form submission.
`type` is applied only to `<button>` hosts.

Use an anchor host when the interaction navigates:

```html
<a
  fktButton
  href="https://github.com/Samukaii/frakton-ng"
  label="Open repository"
  icon="arrow-top-right-on-square"
  rel="noopener noreferrer"
  target="_blank"
/>
```

Angular router links use the same host:

```html
<a
  fktButton
  routerLink="/getting-started/installation"
  label="Read installation guide"
  suffixIcon="chevron-right"
/>
```

Anchors do not support the native `disabled` attribute. When an anchor button is
`disabled` or `loading`, the component binds `aria-disabled="true"`, removes it
from the tab order with `tabindex="-1"`, and blocks activation. Native buttons
receive the actual `disabled` attribute instead.

Most visual inputs accept `default` as their API default. `default` keeps the
markup stable while allowing the styling layer to resolve the application's
preferred appearance, shape, size, and color.

## Styling Hooks

The component exposes stable styling hooks instead of variant-specific design
tokens. Consumers configure the button through public inputs; the host reflects
the resolved visual axes as generated `data-fkt-*` attributes for CSS queries
and selectors.

```html
<button
  fktButton
  label="Delete"
  color="danger"
  appearance="stroked"
  shape="sharp"
  size="sm"
/>
```

The reflected attributes are output-only styling hooks generated by
`FktButtonComponent`; do not set them manually in application markup. Use them
only as selectors when a variation needs different values for the same public
design tokens:

```css
button[fktButton][data-fkt-color='danger'] {
  --fkt-button-color: var(--app-danger);
  --fkt-button-text-color: white;
}

[fktButton][data-fkt-size='sm'] {
  --fkt-button-padding: 0.25rem 0.75rem;
  --fkt-button-font-size: 0.75rem;
}
```

Arbitrary CSS colors are exposed as `data-fkt-color="custom"` and the raw color
is applied through an internal bridge variable. Semantic colors continue to
default to the global `--fkt-color-*` tokens.

Anchor hosts remove browser underline by default through
`--fkt-button-text-decoration`. Set the token when a link-styled button should
keep or restore text decoration:

```css
a[fktButton] {
  --fkt-button-text-decoration: underline;
}
```

## Icons and Custom Content

The component covers common icon usage with built-in icon inputs:

```html
<button fktButton label="Save" icon="check"/>

<button fktButton label="Open details" suffixIcon="arrow-top-right-on-square"/>

<button fktButton label="Delete" icon="trash" iconOnly/>
```

`iconOnly` renders only the built-in icon visually and exposes the required
`label` through the native `aria-label`.

For application-specific visual content, project a single main content block
with `fktButtonContent`. The projected content replaces the visible label, while
`label` remains the accessible name.

```html
<button fktButton label="Open Samuel profile">
  <app-user-chip fktButtonContent/>
</button>
```

Use `fill` when the custom content should own the entire visual surface of the
button. This removes the button padding and lets the projected content define
its own spacing.

```html
<button fktButton label="Open Samuel profile">
  <app-user-card fktButtonContent fill/>
</button>
```

## Label and Accessibility

`label` is required and is the only semantic label source. By default it is
rendered visibly. When `iconOnly` or `fktButtonContent` is used, the visual
label is not rendered and the same value is bound to the native `aria-label`.
Built-in icons, custom content, and loading-indicator content are decorative and
hidden from the accessibility tree.

## Loading

Loading preserves the normal content while inserting an indicator on the
configured side. With `loadingPosition="start"` the indicator
replaces `icon` when present; otherwise it is inserted before the main content.
With `loadingPosition="end"` it replaces `suffixIcon` when present; otherwise it
is inserted after the main content. It also binds `aria-busy="true"` and
prevents activation. Native buttons receive `disabled`; anchors receive
`aria-disabled="true"` and `tabindex="-1"`. A projected
`fktButtonLoadingIndicator` replaces the default spinner.

```html
<button fktButton label="Save" icon="check" loading/>
```

## Configuration-driven Actions

`FktButtonAction` describes actions rendered from configuration, including
`FktButtonsList`, dialog actions, table actions, and empty states.

```ts
import { FktButtonAction } from 'frakton-ng/button';

const saveAction: FktButtonAction<FormModel> = {
  identifier: 'save',
  label: 'Save',
  icon: 'check',
  iconPosition: 'left',
  color: 'primary',
  click: (form) => save(form),
};
```

`icon` and `iconPosition` are conveniences for configuration renderers.
Direct button usage uses `icon`, `suffixIcon`, `iconOnly`, and
`fktButtonContent` instead.
