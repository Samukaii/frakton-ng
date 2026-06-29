# Frakton NG

**Architecturally opinionated. Visually unlimited.**

[![npm version](https://img.shields.io/npm/v/frakton-ng?style=flat-square)](https://www.npmjs.com/package/frakton-ng)
![bundlephobia](https://badgen.net/bundlephobia/tree-shaking/frakton-ng)

> A signal-native Angular UI library built around accessible behavior, explicit
> state ownership, type-safe composition, and deep visual customization.

Frakton NG provides the architecture and interaction contracts required by
complex application components while keeping business state, data fetching,
and visual identity under application control.

Built for Angular 21 with standalone components, signals, Signal Forms,
Reactive Forms, and modern browser APIs.

> **Beta:** Frakton NG is actively evolving while its component model and
> design system are consolidated.

<img width="1421" height="953" alt="Frakton NG component examples" src="https://github.com/user-attachments/assets/a8761cc5-bef7-4129-b433-0a68f872fed8" />

## Why Frakton NG?

- **Signal-native:** Components are built with signal inputs, models, computed
  state, and modern Angular APIs.
- **Accessible behavior:** Runtime validation, keyboard interaction, focus
  management, semantic labels, and human-readable color descriptions.
- **Explicit state ownership:** Components emit user intent while application
  state remains controlled by the consumer.
- **Type-safe composition:** Dynamic components infer signal inputs, outputs,
  and models without requiring duplicated contracts.
- **Visually unlimited:** Global and component-level design tokens let products
  define their own visual language.
- **Zero dependencies:** No runtime dependencies outside the Angular ecosystem.
- **Package size:** Approximately 1.1 MiB unpacked.

## See it in action

[Explore the documentation and interactive demos →](https://fraktonng.com)

<img width="2266" height="1341" alt="Frakton NG interactive documentation" src="https://github.com/user-attachments/assets/edc62523-f557-4c99-934f-306346d3b174" />

## Installation

```bash
npm install frakton-ng
```

Add the global styles and one theme to your application:

```json
{
  "styles": [
    "node_modules/frakton-ng/assets/styles/styles.css",
    "node_modules/frakton-ng/assets/styles/themes/light.css"
  ]
}
```

Available themes:

- `light.css`
- `dark.css`
- Custom themes built with Frakton NG design tokens

## Your first component

```typescript
import {Component, signal} from '@angular/core';
import {FktButtonComponent} from 'frakton-ng/button';

@Component({
  selector: 'app-save-button',
  imports: [FktButtonComponent],
  template: `
    <fkt-button
      text="Save changes"
      icon="check"
      color="success"
      [loading]="saving()"
      (click)="save()"
    />
  `
})
export class SaveButtonComponent {
  protected readonly saving = signal(false);

  save() {
    // Save changes
  }
}
```

Components are distributed through secondary entrypoints, so applications
import only the features they use:

```typescript
import {FktButtonComponent} from 'frakton-ng/button';
import {FktTableComponent} from 'frakton-ng/table';
import {FktOverlayService} from 'frakton-ng/overlay';
```

## Architecture in practice

Frakton NG is opinionated about component behavior and state boundaries while
remaining flexible about product design.

### Native-first form composition

`FktFieldComponent` owns the visual shell, label, floating outline,
prefix/suffix slots, hints, required marker, disabled state, and error
presentation. The actual value remains on a native control.

```typescript
import {Component} from '@angular/core';
import {FktFieldComponent} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';

@Component({
  selector: 'app-name-field',
  imports: [FktFieldComponent, FktInputTextDirective],
  template: `
    <fkt-field label="Name">
      <input fktInputText placeholder="Enter a name">
    </fkt-field>
  `
})
export class NameFieldComponent {}
```

This preserves native attributes and browser behavior while providing the same
composition contract for Angular Signal Forms, Reactive Forms, projected
content, automatic validation messages, and application-owned
internationalization.

[Explore Field →](https://fraktonng.com/docs/field)

### Autocomplete for real application data

The autocomplete separates temporary search text from the form value. Rich
option objects can provide labels and metadata while forms store stable
primitive identifiers.

It supports:

- Primitive and object options
- Property or function-based value, label, and group resolution
- Hydrated values for edit screens before options are loaded
- Local and server-side search
- Minimum query length and built-in debouncing
- Multiple selection and free text
- Lazy fetching and infinite loading
- Virtualized option lists
- Type-safe item, group, header, footer, chip, and empty-state templates
- Signal Forms and Reactive Forms

Rendering can be replaced without giving up keyboard navigation, active
descendant management, selection behavior, or normalized form values.

[Explore Autocomplete →](https://fraktonng.com/docs/autocomplete)

### Server-friendly tables with consumer-owned state

The table provides type-safe column definitions and dynamic rendering without
owning application data.

Cell factories support plain text, registered component aliases, direct
component references, and inline templates:

```typescript
import {defineCells} from 'frakton-ng/table';
import {FktTagComponent} from 'frakton-ng/tag';

const cell = defineCells({
  tag: FktTagComponent
});
```

The table includes opt-in capabilities for:

- Sorting and custom filters
- Cross-page selection with a server-friendly select-all sentinel
- Expandable, pinned, and frozen rows
- Resizable and reorderable columns
- Persistent column, filter, and layout state
- CSV export
- Virtual scrolling
- Custom cell, header, and filter components

Sorting, filtering, pagination, persistence, and data fetching remain owned by
application signals. The table emits intent and renders the resulting data.

[Explore Table →](https://fraktonng.com/docs/table)

### Color as accessible information

The Color Picker supports HEX, RGB, HSL, transparency, precise keyboard
controls, localized semantic descriptions, and real-time format conversion.

```html
<fkt-color-picker
  label="Brand color"
  [(value)]="brandColor"
/>
```

Descriptions such as “vibrant blue”, “pale yellow-orange”, or “dark red” make
color selection easier to understand, communicate, and navigate with assistive
technologies.

[Explore Color Picker →](https://fraktonng.com/docs/color-picker)

### Type-safe dynamic composition

The Overlay service infers its data contract directly from component signal
inputs, outputs, and models.

```typescript
@Component({
  selector: 'app-user-editor',
  template: `...`
})
export class UserEditorComponent {
  userId = input.required<string>();
  save = output<User>();
}

const ref = overlay.open({
  component: UserEditorComponent,
  data: {
    userId: user.id,
    save: updatedUser => {
      updateUser(updatedUser);
      ref.close();
    }
  }
});
```

Overlay components remain regular Angular components and can be reused in
dialogs, positioned panels, or standalone layouts. The service provides
viewport-aware positioning, focus management, lifecycle control, and 16 anchor
positions.

[Explore Overlay →](https://fraktonng.com/docs/overlay)

## Visually unlimited

Frakton NG separates component behavior from product identity. Global semantic
tokens establish shared foundations, while component tokens provide focused
control over colors, spacing, typography, sizing, states, and layout.

```css
:root {
  --fkt-color-primary: #1d4ed8;
  --fkt-color-on-primary: #ffffff;
  --fkt-button-border-radius: 9999px;
}
```

There is no global CSS reset, so Frakton NG can coexist with existing styles
and other component libraries during gradual adoption.

## Accessibility-oriented APIs

Accessibility requirements are part of component contracts rather than only
documentation recommendations.

```html
<!-- Throws because an icon-only button requires an accessible label -->
<fkt-button icon="check" />

<!-- Valid -->
<fkt-button icon="check" ariaLabel="Save changes" />
```

Depending on the component, Frakton NG provides keyboard interaction, focus
management, semantic labels, accessible hidden labels, validation state, and
human-readable color descriptions.

## Documentation

The documentation is built with Angular and includes:

- Interactive component examples
- Live property controls
- Design-token playgrounds
- Copy-ready source examples
- API references
- Signal Forms and Reactive Forms examples
- Machine-readable documentation for search engines and AI systems

[Explore the documentation →](https://fraktonng.com)

## Contributing

Found a bug or want to propose a change?

Read [CONTRIBUTING.md](CONTRIBUTING.md) or
[open an issue](https://github.com/Samukaii/frakton-ng/issues).

## License

MIT © Samuel Alejandro
