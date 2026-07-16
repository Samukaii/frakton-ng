# Components/Overlays/Popover

## Metadata

- id: popover
- type: story
- route: /docs/popover
- title: Components/Overlays/Popover
- component: FktPopoverComponent
- import: `import { FktPopoverComponent } from 'frakton-ng/popover';`

## Description

Low-level primitive for custom contextual surfaces that do not fit a specialized Frakton NG component.

## Features

### Usage

- id: usage
- type: introduction

Popover is a low-level primitive for custom contextual surfaces that do not fit a specialized
Frakton NG component. Prefer Tooltip, Dialog, Select, Autocomplete, and other dedicated components
when their interaction pattern matches the use case.

It renders content in the browser top layer without moving it to a global overlay container, so
tokens, inherited classes, scoped styles, and animation classes keep flowing through the normal
cascade. Popover owns disclosure and placement mechanics, but it does not assign menu, tooltip,
dialog, or listbox semantics to arbitrary content.

Apply `fktPopoverTrigger` to the interactive control that owns the surface. Frakton synchronizes
`aria-expanded` and `aria-controls`; custom patterns remain responsible for the panel role and
name, `aria-haspopup` when applicable, internal keyboard behavior, and additional focus management.

### Basic

- id: basic
- type: story
- component: PopoverBasicExampleComponent

The default trigger interaction opens on click, closes on outside click or Escape, and uses
`bottom-center` placement. The trigger remains the real interactive element and the content
template becomes the native popover panel. Apply `fktPopoverTrigger` to a keyboard-accessible
interactive element; the directive does not turn passive elements into controls.

Example component: `PopoverBasicExampleComponent`

```ts title="popover-basic-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-basic-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-basic-example.component.html',
  styleUrl: './popover-basic-example.component.scss',
})
export class PopoverBasicExampleComponent {}
```

```html title="popover-basic-example.component.html"
<fkt-popover>
  <button fktButton fktPopoverTrigger label="Open popover">
  </button>

  <ng-template fktPopoverContent>
    <div class="content">
      <strong>Basic popover</strong>
      <p>Popover content rendered from a trigger-based template.</p>
    </div>
  </ng-template>
</fkt-popover>
```

```css title="popover-basic-example.component.scss"
:host {
  display: flex;
  align-items: center;
}

.content {
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  gap: var(--fkt-space-inset-2xs);
  font-size: var(--fkt-font-size-sm);

  strong {
    font-size: var(--fkt-font-size-md);
  }

  p {
    margin: 0;
  }
}
```

### HoverAndFocus

- id: hover-and-focus
- type: story
- component: PopoverHoverExampleComponent

Use `triggerOn="hover"` on the trigger for lightweight pointer and keyboard preview interactions.
Focus can move into the panel, and pointer movement between trigger and panel is protected by a
safe area. Prefer click for persistent, touch-first, or complex interactive flows.

Example component: `PopoverHoverExampleComponent`

```ts title="popover-hover-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-hover-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-hover-example.component.html',
  styleUrl: './popover-hover-example.component.scss',
})
export class PopoverHoverExampleComponent {}
```

```html title="popover-hover-example.component.html"
<fkt-popover preferredPosition="top-center">
  <button
    fktButton
    fktPopoverTrigger
    label="Hover or focus"
    triggerOn="hover"
  >
  </button>

  <ng-template fktPopoverContent>
    <div class="content">
      <strong>Accessible hover</strong>
      <p>
        The same trigger opens on mouse hover and keyboard focus, then
        closes when pointer and focus leave both trigger and panel.
      </p>
      <button appearance="basic" fktButton label="Focusable action">
      </button>
    </div>
  </ng-template>
</fkt-popover>
```

```css title="popover-hover-example.component.scss"
.content {
  display: grid;
  gap: var(--fkt-space-sm);
  max-width: 16rem;

  p {
    margin: 0;
  }
}
```

### Forms

- id: forms
- type: story
- component: PopoverFormExampleComponent

Popover content is just Angular template content, so compact forms can live inside the panel
without a special API.

Example component: `PopoverFormExampleComponent`

```ts title="popover-form-example.component.ts"
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { Component, signal, viewChild } from '@angular/core';
import {
  email,
  form,
  FormField,
  FormRoot,
  required,
} from '@angular/forms/signals';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

interface Payload {
  name: string;
  email: string;
  updates: boolean;
}

@Component({
  selector: 'app-popover-form-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktFieldComponent,
    FktInputTextDirective,
    FktCheckboxComponent,
    FormField,
    FormRoot,
    CodeOutputComponent,
  ],
  templateUrl: './popover-form-example.component.html',
  styleUrl: './popover-form-example.component.scss',
})
export class PopoverFormExampleComponent {
  protected readonly open = signal(false);
  protected readonly submitted = signal<Payload | null>(null);
  private readonly popover = viewChild.required(FktPopoverComponent);

  private payload = signal<Payload>({
    name: 'Ada Lovelace',
    email: 'adalovelace@email.com',
    updates: false,
  });

  protected readonly form = form(
    this.payload,
    (schema) => {
      required(schema.name);
      required(schema.email);
      email(schema.email);
    },
    {
      submission: {
        action: async (form) => {
          this.submitted.set(form().value());
          this.open.set(false);
          this.popover().restoreTriggerFocus();
        },
      },
    }
  );
}
```

```html title="popover-form-example.component.html"
<fkt-popover
  [(open)]="open"
  [preferredFallbackPositions]="['top-start', 'bottom-end']"
  preferredPosition="bottom-start"
>
  <button
    fktButton
    fktPopoverTrigger
    label="Edit contact"
    suffixIcon="pencil-square">
  </button>

  <ng-template fktPopoverContent>
    <form
      [formRoot]="form"
      class="contact-form"
    >
      <fkt-field label="Name">
        <input [formField]="form.name" fktInputText/>
      </fkt-field>

      <fkt-field label="Email">
        <input [formField]="form.email" fktInputText type="email"/>
      </fkt-field>

      <fkt-checkbox
        [formField]="form.updates"
        label="Receive product updates"
      />

      <button
        fktButton
        label="Save"
        type="submit">
      </button>
    </form>
  </ng-template>
</fkt-popover>

@if (submitted(); as value) {
  <app-code-output [value]="value"/>
}
```

```css title="popover-form-example.component.scss"
:host {
  display: grid;
  gap: var(--fkt-space-sm);
  align-items: start;
  justify-items: start;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: var(--fkt-space-xs);
  gap: var(--fkt-space-sm);
  width: 300px;

  fkt-field, fkt-checkbox {
    width: 100%;
  }
}

pre {
  margin: 0;
  padding: var(--fkt-space-sm);
  color: var(--fkt-color-accent);
  background: var(--fkt-color-primary);
  border-radius: var(--fkt-radius-lg);
}

app-code-output {
  width: 100%;
}
```

### Positioning

- id: positioning
- type: introduction

Configure where the panel appears relative to the trigger and how it reacts when the requested
placement does not fit.

### Positions

- id: positions
- type: story
- component: PopoverPositionsExampleComponent

Positions describe where the panel sits around the trigger. `top` and `bottom` are block sides;
`start` and `end` are inline sides. Corner positions use the `*-corner` suffix.

Example component: `PopoverPositionsExampleComponent`

```ts title="popover-positions-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverPosition,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-positions-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-positions-example.component.html',
  styleUrl: './popover-positions-example.component.scss',
})
export class PopoverPositionsExampleComponent {
  protected readonly groups: {
    label: string;
    positions: {
      label: string;
      description: string;
      position: FktPopoverPosition;
    }[];
  }[] = [
    {
      label: 'Top',
      positions: [
        {
          label: 'Top start',
          position: 'top-start',
          description:
            'The panel is placed above the trigger and starts aligned with the trigger start edge.',
        },
        {
          label: 'Top center',
          position: 'top-center',
          description:
            'The panel is placed above the trigger and centered horizontally.',
        },
        {
          label: 'Top end',
          position: 'top-end',
          description:
            'The panel is placed above the trigger and ends aligned with the trigger end edge.',
        },
      ],
    },
    {
      label: 'Bottom',
      positions: [
        {
          label: 'Bottom start',
          position: 'bottom-start',
          description:
            'The panel is placed below the trigger and starts aligned with the trigger start edge.',
        },
        {
          label: 'Bottom center',
          position: 'bottom-center',
          description:
            'The panel is placed below the trigger and centered horizontally.',
        },
        {
          label: 'Bottom end',
          position: 'bottom-end',
          description:
            'The panel is placed below the trigger and ends aligned with the trigger end edge.',
        },
      ],
    },
    {
      label: 'Start',
      positions: [
        {
          label: 'Start top',
          position: 'start-top',
          description:
            'The panel is placed on the trigger start side and top aligned with the trigger.',
        },
        {
          label: 'Start center',
          position: 'start-center',
          description:
            'The panel is placed on the trigger start side and centered vertically.',
        },
        {
          label: 'Start bottom',
          position: 'start-bottom',
          description:
            'The panel is placed on the trigger start side and bottom aligned with the trigger.',
        },
      ],
    },
    {
      label: 'End',
      positions: [
        {
          label: 'End top',
          position: 'end-top',
          description:
            'The panel is placed on the trigger end side and top aligned with the trigger.',
        },
        {
          label: 'End center',
          position: 'end-center',
          description:
            'The panel is placed on the trigger end side and centered vertically.',
        },
        {
          label: 'End bottom',
          position: 'end-bottom',
          description:
            'The panel is placed on the trigger end side and bottom aligned with the trigger.',
        },
      ],
    },
    {
      label: 'Corners',
      positions: [
        {
          label: 'Top start corner',
          position: 'top-start-corner',
          description:
            'The panel is placed around the trigger top-start corner.',
        },
        {
          label: 'Top end corner',
          position: 'top-end-corner',
          description:
            'The panel is placed around the trigger top-end corner.',
        },
        {
          label: 'Bottom start corner',
          position: 'bottom-start-corner',
          description:
            'The panel is placed around the trigger bottom-start corner.',
        },
        {
          label: 'Bottom end corner',
          position: 'bottom-end-corner',
          description:
            'The panel is placed around the trigger bottom-end corner.',
        },
      ],
    },
  ];
}
```

```html title="popover-positions-example.component.html"
@for (group of groups; track group.label) {
  <div class="group">
    <strong>{{ group.label }}</strong>
    <div class="positions">
      @for (position of group.positions; track position) {
        <fkt-popover
          [preferredPosition]="position.position"
          [preferredFallbackPositions]="['bottom-center', 'top-center']"
        >
          <button
            [label]="position.label"
            fktButton
            fktPopoverTrigger>
          </button>

          <ng-template fktPopoverContent>
            <div class="placement">
              <strong>{{ position.label }}</strong>
              <span>{{ position.description }}</span>
            </div>
          </ng-template>
        </fkt-popover>
      }
    </div>
  </div>
}
```

```css title="popover-positions-example.component.scss"
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fkt-space-md);
}

.positions {
  display: flex;
  gap: var(--fkt-space-sm);
}

.group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fkt-space-xs);
}

.placement {
  display: grid;
  gap: var(--fkt-space-2xs);
  max-width: 12rem;
  font-size: var(--fkt-font-size-sm);

  span {
    color: var(--fkt-text-muted-color);
  }
}
```

### RtlPositioning

- id: rtl-positioning
- type: story
- component: PopoverRtlExampleComponent

Logical `start` and `end` positions follow the trigger direction by default. Use
`positionDirection="ltr"` or `positionDirection="rtl"` when geometry should be fixed
independently from the content direction.

Example component: `PopoverRtlExampleComponent`

```ts title="popover-rtl-example.component.ts"
import { Component, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';
import { FktSelectComponent } from 'frakton-ng/select';

@Component({
  selector: 'app-popover-rtl-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktSelectComponent,
  ],
  templateUrl: './popover-rtl-example.component.html',
  styleUrl: './popover-rtl-example.component.scss',
})
export class PopoverRtlExampleComponent {
  protected readonly directions = [
    { value: 'ltr', label: 'LTR' },
    { value: 'rtl', label: 'RTL' },
  ];

  protected direction = signal('rtl');
}
```

```html title="popover-rtl-example.component.html"
<fkt-select [(value)]="direction" [options]="directions" label="Content direction" labelKey="label" valueKey="value"/>

<div [dir]="direction()" class="container">
  <section class="example-group">
    <div class="example-group__description">
      <strong>Automatic content direction ({{ direction() === 'rtl' ? 'RTL' : 'LTR' }})</strong>
      <span>
      The positioning follows the selected direction. With <code>positionDirection="auto"</code>,
      <code>end-center</code> resolves from the trigger direction.
    </span>
    </div>

    <fkt-popover preferredPosition="end-center">
      <button
        appearance="stroked"
        fktButton
        fktPopoverTrigger
        label="فتح التفاصيل"
        suffixIcon="chevron-down"
      ></button>

      <ng-template fktPopoverContent>
        <div class="panel">
          <strong>موضع تلقائي</strong>
          <p>
            The content and trigger share the selected direction, so logical end follows the same flow.
          </p>
        </div>
      </ng-template>
    </fkt-popover>
  </section>

  <section class="example-group">
    <div class="example-group__description">
      <strong>Fixed LTR positioning with {{ direction() === 'rtl' ? 'RTL' : 'LTR' }} content</strong>
      <span>
      The content follows the selected direction, but <code>positionDirection="ltr"</code>
      keeps <code>end-center</code> resolved as LTR geometry.
    </span>
    </div>

    <fkt-popover positionDirection="ltr" preferredPosition="end-center">
      <button
        appearance="stroked"
        fktButton
        fktPopoverTrigger
        label="فتح التفاصيل"
        suffixIcon="chevron-down"
      ></button>

      <ng-template fktPopoverContent>
        <div class="panel">
          <strong>محتوى RTL</strong>
          <p>
            Direction can be fixed for geometry without changing the content direction inside the panel.
          </p>
        </div>
      </ng-template>
    </fkt-popover>
  </section>
</div>
```

```css title="popover-rtl-example.component.scss"
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  gap: var(--fkt-space-md);
}

fkt-select {
  width: 200px;
  margin-bottom: var(--fkt-space-md);
}

.example-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: flex-end;
  gap: var(--fkt-space-sm);
  padding: var(--fkt-space-md);
  border: 1px dashed var(--fkt-color-neutral-400);
  border-radius: var(--fkt-radius-lg);

  &__description {
    max-width: 24rem;
    display: flex;
    flex-direction: column;
    gap: var(--fkt-space-2xs);
    font-size: var(--fkt-font-size-sm);
    line-height: 1.4;

    span {
      color: var(--fkt-text-muted-color);
    }
  }
}

code {
  color: var(--fkt-color-danger);
  font-family: monospace;
  font-size: var(--fkt-font-size-xs);
}

.panel {
  max-width: 18rem;
  display: grid;
  gap: var(--fkt-space-2xs);
  font-size: var(--fkt-font-size-sm);
  line-height: 1.4;

  p {
    margin: 0;
    color: var(--fkt-text-muted-color);
  }
}
```

### Reposition

- id: reposition
- type: story
- component: PopoverRepositionExampleComponent

Use `overflowStrategy="keep-position"` when the preferred placement should be preserved, and call
`repositionTo('fit')` when content or layout changes after the popover is open. Programmatic
repositioning persists the resolved placement as the active preference.

Example component: `PopoverRepositionExampleComponent`

```ts title="popover-reposition-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-reposition-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-reposition-example.component.html',
  styleUrl: './popover-reposition-example.component.scss',
})
export class PopoverRepositionExampleComponent {}
```

```html title="popover-reposition-example.component.html"
<div class="stage">
  <fkt-popover #popover overflowStrategy="keep-position" preferredPosition="end-top">
    <button appearance="stroked" fktButton fktPopoverTrigger label="Open fixed position">
    </button>

    <ng-template fktPopoverContent>
      <div class="content">
        <strong>Manual reposition</strong>
        <p>
          Overflow strategy is keeping the requested placement, so the preferred position is preserved
          even if it overflows. </p>

        <div class="actions">
          <button (click)="popover.repositionTo('fit')" appearance="stroked" fktButton label="Fit"
                  type="button">
          </button>

          <button (click)="popover.repositionTo('end-center')" appearance="basic" fktButton
                  label="Move to end" type="button">
          </button>
        </div>
      </div>
    </ng-template>
  </fkt-popover>
</div>
```

```css title="popover-reposition-example.component.scss"
:host {
  display: block;
  --fkt-popover-width: 18rem;
}

.stage {
  display: flex;
  justify-content: flex-end;
  min-height: 10rem;
  padding: var(--fkt-space-sm);
  border: 1px dashed var(--fkt-color-border);
  border-radius: var(--fkt-radius-lg);
}

.content {
  display: grid;
  gap: var(--fkt-space-sm);
  font-size: var(--fkt-font-size-sm);

  p {
    margin: 0;
    line-height: 1.4;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fkt-space-xs);
}
```

### TriggerRelativeSizing

- id: trigger-relative-sizing
- type: story
- component: PopoverTriggerWidthExampleComponent

Use `--fkt-popover-trigger-width` with panel sizing tokens when the panel should derive its
width from the trigger. This keeps sizing in CSS instead of adding one-off width inputs.

Example component: `PopoverTriggerWidthExampleComponent`

```ts title="popover-trigger-width-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-trigger-width-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-trigger-width-example.component.html',
  styleUrl: './popover-trigger-width-example.component.scss',
})
export class PopoverTriggerWidthExampleComponent {
  protected readonly examples = [
    {
      label: 'Half width',
      className: 'half-width',
      description: 'The panel uses half of the trigger width.',
      token:
        '--fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 0.5);',
    },
    {
      label: 'Same width',
      className: 'same-width',
      description: 'The panel width matches the trigger width.',
      token: '--fkt-popover-width: var(--fkt-popover-trigger-width);',
    },
    {
      label: 'Double width',
      className: 'double-width',
      description: 'The panel uses twice the trigger width.',
      token: '--fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 2);',
    },
  ];
}
```

```html title="popover-trigger-width-example.component.html"
@for (example of examples; track example.label) {
  <fkt-popover
    [class]="example.className"
    preferredPosition="bottom-start"
  >
    <button
      [label]="example.label"
      appearance="stroked"
      class="wide-trigger"
      fktButton
      fktPopoverTrigger
      suffixIcon="chevron-down"
    ></button>

    <ng-template fktPopoverContent>
      <div class="sized-panel">
        <strong>{{ example.label }}</strong>
        <span>{{ example.description }}</span>
        <code>{{ example.token }}</code>
      </div>
    </ng-template>
  </fkt-popover>
}
```

```css title="popover-trigger-width-example.component.scss"
:host {
  display: grid;
  justify-items: start;
  gap: var(--fkt-space-sm);
  align-items: center;
}

code {
  color: var(--fkt-color-danger);
  font-weight: var(--fkt-font-semibold);
  font-family: monospace;
  padding: var(--fkt-space-4xs);
  border: solid 1px var(--fkt-color-neutral-300);
  border-radius: var(--fkt-radius-sm);
  font-size: var(--fkt-font-size-xs);
  width: fit-content;
}

.half-width {
  --fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 0.5);
}

.same-width {
  --fkt-popover-width: var(--fkt-popover-trigger-width);
}

.double-width {
  --fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 2);
}

.wide-trigger {
  min-width: 24rem;
}

.sized-panel {
  display: grid;
  gap: var(--fkt-space-2xs);
  font-size: var(--fkt-font-size-sm);
  line-height: 1.4;

  span {
    color: var(--fkt-text-muted-color);
  }
}
```

### DismissBehavior

- id: dismiss-behavior
- type: story
- component: PopoverDismissExampleComponent

Automatic dismiss can be configured independently from state. `dismiss` reports the automatic
reason, while content actions close by updating the `open` state. Partial `dismissOn` objects
merge with the defaults, so omitted options keep their default behavior. Focus restoration is
explicit: Escape returns focus to the trigger, and content actions can call
`restoreTriggerFocus()` when returning keyboard users to the trigger is the desired flow.

Example component: `PopoverDismissExampleComponent`

```ts title="popover-dismiss-example.component.ts"
import { Component, signal } from '@angular/core';
import { CodeOutputComponent } from 'apps/docs/src/app/components/code-output/code-output.component';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverDismissEvent,
  FktPopoverDismissReason,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-dismiss-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    CodeOutputComponent,
  ],
  templateUrl: './popover-dismiss-example.component.html',
  styleUrl: './popover-dismiss-example.component.scss',
})
export class PopoverDismissExampleComponent {
  protected readonly lastDismissReason = signal<FktPopoverDismissReason | null>(
    null
  );
  protected isOpen = signal(false);

  protected trackDismiss(event: FktPopoverDismissEvent) {
    this.lastDismissReason.set(event.reason);
  }
}
```

```html title="popover-dismiss-example.component.html"
<fkt-popover
  #popover="fktPopover"
  (dismiss)="trackDismiss($event)"
  [(open)]="isOpen"
  [dismissOn]="{
        outsideClick: true,
        escape: true,
        scroll: true
    }"
  preferredPosition="top-start"
>
  <button
    fktButton
    fktPopoverTrigger
    label="Open dismiss example">
  </button>

  <ng-template fktPopoverContent>
    <div class="content">
      <strong>Dismiss behavior</strong>
      <pre class="description">
        Outside click, Escape and scroll dismiss this popover.

        Partial <code>dismissOn</code> values merge with the defaults.

        Try to scroll, type ESC or click outside
      </pre>
      <button
        (click)="isOpen.set(false); popover.restoreTriggerFocus()"
        fktButton
        label="Close and restore focus">
      </button>
    </div>
  </ng-template>
</fkt-popover>

<app-code-output [value]="{dismissReason: lastDismissReason() ?? 'none'}"/>
```

```css title="popover-dismiss-example.component.scss"
:host {
  display: grid;
  gap: var(--fkt-space-sm);
  justify-items: start;
}

.content {
  display: grid;
  gap: var(--fkt-space-sm);
  max-width: 18rem;
  font-size: var(--fkt-font-size-sm);

  p {
    margin: 0;
    line-height: 1.4;
  }
}

strong {
  font-size: var(--fkt-font-size-md);
}

code {
  color: var(--fkt-color-danger);
  font-weight: var(--fkt-font-semibold);
  font-family: monospace;
  padding: var(--fkt-space-4xs);
  border: solid 1px var(--fkt-color-neutral-300);
  border-radius: var(--fkt-radius-sm);
  font-size: var(--fkt-font-size-xs);
  width: fit-content;
}

.description {
  white-space: pre-line;
  margin: 0;
}

.status {
  font-size: var(--fkt-font-size-sm);
}

app-code-output {
  width: 100%;
}
```

### State

- id: state
- type: introduction

Bind `[(open)]` when a parent component should observe or change the popover state directly.

### ProgrammaticState

- id: programmatic-state
- type: story
- component: PopoverControlledExampleComponent

Bind `[(open)]` when the parent should observe or update the state. Use `triggerOn="manual"` when
the trigger's own handler or parent state should control activation. The directive still belongs on
the real interactive control and continues to provide `aria-expanded`, `aria-controls`, and the
positioning reference. This is not a separate controlled mode; trigger and dismiss behavior remain
configured independently.

Example component: `PopoverControlledExampleComponent`

```ts title="popover-controlled-example.component.ts"
import { Component, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-controlled-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-controlled-example.component.html',
  styleUrl: './popover-controlled-example.component.scss',
})
export class PopoverControlledExampleComponent {
  protected readonly open = signal(false);
}
```

```html title="popover-controlled-example.component.html"
<div class="actions">
  <fkt-popover
    [(open)]="open"
    [dismissOn]="{ outsideClick: false }"
    preferredPosition="bottom-start"
  >
    <button
      (click)="open.set(true)"
      appearance="stroked"
      fktButton
      fktPopoverTrigger
      label="Open manually"
      triggerOn="manual"
    ></button>

    <ng-template fktPopoverContent>
      <div class="content">
        <strong>Programmatic state</strong>
        <span>
          The parent owns the open signal. Manual mode leaves activation to the
          trigger handler while Frakton keeps ARIA state and positioning
          connected to that same control.
        </span>
      </div>
    </ng-template>
  </fkt-popover>

  <button
    (click)="open.set(false)"
    appearance="basic"
    fktButton
    label="Close from outside">
  </button>
</div>
```

```css title="popover-controlled-example.component.scss"
:host {
  display: grid;
  align-items: start;
  justify-items: start;
  gap: var(--fkt-space-sm);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fkt-space-xs);
}

.content {
  display: grid;
  gap: var(--fkt-space-2xs);
  max-width: 16rem;
}
```

### Customization

- id: customization
- type: introduction

Customize the panel surface and motion with CSS tokens and native popover animation selectors.

### DesignTokens

- id: design-tokens
- type: story
- component: PopoverTokensExampleComponent

The panel has a light default appearance and exposes styling hooks through CSS tokens instead of
TypeScript style props.

Example component: `PopoverTokensExampleComponent`

```ts title="popover-tokens-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-tokens-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-tokens-example.component.html',
  styleUrl: './popover-tokens-example.component.scss',
})
export class PopoverTokensExampleComponent {}
```

```html title="popover-tokens-example.component.html"
<fkt-popover animation="app-popover-scale" preferredPosition="end-top">
  <button fktButton fktPopoverTrigger label="Token styled">
  </button>

  <ng-template fktPopoverContent>
    <div class="content">
      <strong>Scoped tokens</strong>
      <span>The panel appearance comes from CSS variables.</span>
    </div>
  </ng-template>
</fkt-popover>
```

```css title="popover-tokens-example.component.scss"
:host {
  display: inline-flex;
  border-radius: var(--fkt-radius-lg);

  --fkt-popover-padding: 1rem;
  --fkt-popover-border-radius: 1.25rem;
  --fkt-popover-background-color: var(--fkt-color-primary);
  --fkt-popover-text-color: var(--fkt-color-neutral-100);
  --fkt-popover-box-shadow: var(--fkt-shadow-xl);
}

.content {
  display: grid;
  gap: var(--fkt-space-2xs);
  max-width: 14rem;
}
```

### Animations

- id: animations
- type: story
- component: PopoverAnimationsExampleComponent

Motion is class-based because the panel is a native popover. Use the built-in `fade-slide`,
disable it with `none`, or pass custom classes and animate with browser-native tools such as
`:popover-open`, `@starting-style`, `allow-discrete`, and transitions for `display` or `overlay`.
Keep animation classes local with `fkt-popover ::ng-deep .my-animation-class`, or put shared
animation classes in `styles.css` when they are reused across the app.

Example component: `PopoverAnimationsExampleComponent`

```ts title="popover-animations-example.component.ts"
import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-animations-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-animations-example.component.html',
  styleUrl: './popover-animations-example.component.scss',
})
export class PopoverAnimationsExampleComponent {}
```

```html title="popover-animations-example.component.html"
<div class="animations">
  <fkt-popover preferredPosition="bottom-start">
    <button
      fktButton
      fktPopoverTrigger
      label="Default motion"
    ></button>

    <ng-template fktPopoverContent>
      <p>Uses the built-in <code>fade-slide</code> animation.</p>
    </ng-template>
  </fkt-popover>

  <fkt-popover
    animation="custom-coming-from-outside"
    preferredPosition="bottom-start"
  >
    <button
      fktButton
      fktPopoverTrigger
      label="Custom motion 1"
    ></button>

    <ng-template fktPopoverContent>
      <p>Uses a consumer-owned class for transition and starting style.</p>
    </ng-template>
  </fkt-popover>

  <fkt-popover
    animation="custom-scale-y"
    preferredPosition="bottom-start"
  >
    <button
      fktButton
      fktPopoverTrigger
      label="Custom motion 2"
    ></button>

    <ng-template fktPopoverContent>
      <p>Uses a consumer-owned class for transition and starting style.</p>
    </ng-template>
  </fkt-popover>

  <fkt-popover
    animation="none"
    preferredPosition="bottom-start"
  >
    <button
      fktButton
      fktPopoverTrigger
      label="No motion"
    ></button>

    <ng-template fktPopoverContent>
      <p>Disables the built-in animation class.</p>
    </ng-template>
  </fkt-popover>
</div>
```

```css title="popover-animations-example.component.scss"
:host {
  display: block;
}

.animations {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fkt-space-sm);
}

p {
  max-width: 14rem;
  margin: 0;
  font-size: var(--fkt-font-size-sm);
  line-height: 1.4;
}

fkt-popover ::ng-deep .custom-coming-from-outside {
  opacity: 0;
  transform: translateX(0);
  transform-origin: top left;

  transition: opacity 300ms ease-in-out,
  transform 600ms cubic-bezier(0.25, 1, 0.5, 1),
  display 600ms allow-discrete,
  overlay 600ms allow-discrete;

  &:popover-open {
    opacity: 1;
    transform: translateX(0);

    @starting-style {
      opacity: 0;
      transform: translateX(-100vw);
    }
  }
}

fkt-popover ::ng-deep .custom-scale-y {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top left;

  transition: opacity 300ms ease-in-out,
  transform 600ms cubic-bezier(0.25, 1, 0.5, 1),
  display 600ms allow-discrete,
  overlay 600ms allow-discrete;

  &:popover-open {
    opacity: 1;
    transform: scaleY(1);

    transition: opacity 180ms ease-out,
    transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
    display 500ms allow-discrete,
    overlay 500ms allow-discrete;

    @starting-style {
      opacity: 0;
      transform: scaleY(0);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  fkt-popover ::ng-deep .custom-coming-from-outside,
  fkt-popover ::ng-deep .custom-scale-y {
    transform: none;
    transition: opacity 1ms linear,
    display 1ms allow-discrete,
    overlay 1ms allow-discrete;

    &:popover-open {
      transform: none;
    }
  }
}
```

## API Reference

## API Reference

<arg-types></arg-types>

`fkt-popover` is a low-level primitive for custom contextual surfaces that do not fit a specialized Frakton NG component. It manages disclosure, placement, automatic dismiss behavior, and optional focus restoration.

Prefer dedicated components such as Tooltip, Dialog, Select, and Autocomplete when their interaction pattern matches the use case. Those components can provide semantics and keyboard behavior that an arbitrary popover cannot infer.

Use `fktPopoverTrigger` on the trigger element and `fktPopoverContent` on an `ng-template` that contains the panel content.

```angular2html

<fkt-popover>
	<button fktButton fktPopoverTrigger label="Open popover"></button>

	<ng-template fktPopoverContent>
		<p>Popover content</p>
	</ng-template>
</fkt-popover>
```

## Native surface

The panel uses the browser Popover API. It participates in the top layer, is not portaled to a global overlay container, and supports native CSS states such as `:popover-open`, `@starting-style`, and discrete transitions for `display` and `overlay`.

Frakton NG owns trigger-based positioning because native popover does not solve trigger placement by itself.

## Structure constraints

`fkt-popover` expects one `fktPopoverTrigger` and one `fktPopoverContent`. Missing trigger or content is a configuration error. If either is conditionally rendered, ensure it exists before opening the popover.

## Semantics

Popover guarantees the mechanics it owns: it keeps `aria-expanded` and `aria-controls` synchronized on the trigger, supports focus as the keyboard equivalent of hover, dismisses with Escape by default, and provides explicit trigger focus restoration.

The panel does not assign a semantic role or accessible name. Popover also does not infer `aria-haspopup`, implement keyboard navigation inside projected content, trap focus, or turn arbitrary markup into a menu, listbox, dialog, tooltip, or other composite widget. When those semantics are required, prefer the dedicated Frakton NG component. For a custom pattern, provide the panel role, accessible name, `aria-haspopup` value, internal keyboard behavior, and focus management required by the chosen pattern.

## Trigger behavior

Apply `fktPopoverTrigger` to the interactive control that owns the popover. The trigger receives `aria-expanded` and `aria-controls` and also acts as the positioning reference.

The directive does not infer whether an element is interactive and does not add a role, `tabindex`, or keyboard activation to passive elements. Use a native interactive element when possible. Custom controls must provide their own correct semantics and keyboard behavior.

`triggerOn="hover"` also opens on focus. The popover remains open while pointer or focus stays inside the trigger or panel, and pointer movement across the offset gap is protected by a safe area. Prefer click for persistent, touch-first, or complex interactive flows.

`triggerOn="manual"` disables only the activation performed by the directive. Use the trigger's own event handler or `[(open)]` for state changes. The directive must remain on the real interactive control: it still owns `aria-expanded`, `aria-controls`, and the positioning reference in manual mode.

`triggerDisabled` disables trigger interaction only. It does not close an open panel and does not prevent external `open` updates.

There is no global disabled state. Use `triggerDisabled` for trigger-driven interaction and control `open` externally when the whole flow should be unavailable.

## Dismiss behavior

`dismissOn` configures automatic dismiss triggers. Partial values are merged with the default dismiss configuration, so omitted options keep their default behavior.

```angular2html

<fkt-popover
	[dismissOn]="{
    outsideClick: false
  }"
>
	...
</fkt-popover>
```

`dismiss` emits only for automatic dismiss events. Programmatic state changes through `[(open)]` are not emitted as dismiss events.

By default, scrolling repositions the panel instead of dismissing it. When `dismissOn.scroll` is enabled, external scroll dismisses the popover. Scroll events from inside the trigger or panel are ignored, so scrollable content inside the popover remains usable.

## Restoring trigger focus

Close the popover by updating `open`. When the same action should return keyboard focus to the trigger, call `restoreTriggerFocus()` after changing state.

```angular2html

<fkt-popover #popover="fktPopover" [(open)]="open">
	...

	<button
		fktButton
		label="Apply"
		(click)="open.set(false); popover.restoreTriggerFocus()"
	></button>
</fkt-popover>
```

Escape restores focus to the trigger by default. Outside click, scroll, mouse leave, focus out, and programmatic state changes do not restore focus automatically.

## Positioning

`preferredPosition` is the declarative preferred placement. `preferredFallbackPositions` adds preferred alternatives before the automatic fit search tries other placements.

With `overflowStrategy="fit"`, the popover may resolve to a different placement when the preferred placement does not fit. It tries the declared position, then preferred fallbacks, then an internal fit strategy. `preferredFallbackPositions` only affects this automatic strategy. With `overflowStrategy="keep-position"`, the requested placement is preserved even when it overflows.

```angular2html

<fkt-popover
	preferredPosition="bottom-start"
	[preferredFallbackPositions]="['top-start', 'bottom-end']"
	overflowStrategy="fit"
>
	...
</fkt-popover>
```

Positions use logical sides. `top` and `bottom` are block sides. `start` and `end` are inline sides. `center`, `top`, and `bottom` align the panel along the selected side. Corner placements such as `top-start-corner`, `top-end-corner`, `bottom-start-corner`, and `bottom-end-corner` are separate positions around trigger corners.

The current placement is exposed as `data-fkt-position` and `data-fkt-position-direction` on the host and panel for placement-specific styling, and through `resolvedPosition` for Angular state.

`positionDirection` controls how logical `start` and `end` positions are resolved. The default `auto` value reads the trigger computed direction. Use `ltr` or `rtl` to force the positioning direction for a specific popover.

## Position update lifecycle

The popover repositions while open on document scroll, window resize, and trigger resize.

Panel content size is consumer-owned. Prefer fixed or constrained panel dimensions for dynamic content, and let the content scroll inside the panel when it can grow. If an intentional content layout change should re-evaluate placement, call `repositionTo('fit')` to run the automatic fit search and persist the resolved placement as the active preference.

Automatic collision handling updates the active placement while the panel is open without changing the active preference. Programmatic repositioning updates the active preference to the resolved placement. Neither writes back to the `preferredPosition` input; when the `preferredPosition` input changes, the active placement is recalculated from the new input value.

## Content lifecycle

The content template is instantiated with the popover component and remains mounted while the popover exists. Opening and closing use the native Popover API and do not destroy Angular content. Internal component state, form state, subscriptions, and DOM state inside the content are preserved between openings.

Because content remains mounted, expensive content should be conditionally instantiated by the consumer when needed.

## Sizing and styling

The host exposes `--fkt-popover-trigger-width` and `--fkt-popover-trigger-height`. Combine those variables with sizing tokens for proportional panel sizes.

```css
.popover-demo {
	--fkt-popover-width: var(--fkt-popover-trigger-width);
	--fkt-popover-max-height: 24rem;
}
```

Use the content template for internal layout. The panel itself is customized through tokens for structural surface decisions such as size, background, border, radius, shadow, and padding.

## Animations

Motion is class-based. Use the built-in `fade-slide`, disable animation with `none`, or pass custom classes. Custom values are appended to the panel class list, so a value such as `"app-popover-motion app-popover-danger"` applies both classes.

```angular2html

<fkt-popover animation="app-menu-motion">
	...
</fkt-popover>
```

Custom animation classes can use native popover selectors and transitions. Use `::ng-deep` for local animation classes. Use global styles when the animation is shared across the app.

The built-in animation respects `prefers-reduced-motion`; custom animations should do the same when they include meaningful movement.

```css
:host ::ng-deep .app-menu-motion {
	opacity: 0;
	transform: scale(0.96);
	transition: opacity 160ms ease-out,
	transform 160ms ease-out,
	display 160ms allow-discrete,
	overlay 160ms allow-discrete;
}

:host ::ng-deep .app-menu-motion:popover-open {
	opacity: 1;
	transform: scale(1);
}
```

```css
/* styles.css */
.app-menu-motion {
	opacity: 0;
	transform: scale(0.96);
}
```

## Methods

```ts
class FktPopoverComponent {
  repositionTo(target: FktPopoverRepositionTarget): void;

  restoreTriggerFocus(): void;
}
```

`repositionTo` recalculates placement while the panel is open and persists the resolved placement as the active preference. Pass `'fit'` to resolve through the fit search. Pass a concrete position to use that placement directly. The method does not write back to the `preferredPosition` input.

`restoreTriggerFocus` moves focus back to the trigger. Use it after state-driven closes when returning focus to the trigger is the desired flow.

## Public types

```ts
type FktPopoverPosition =
	| 'top-start'
	| 'top-center'
	| 'top-end'
	| 'top-start-corner'
	| 'top-end-corner'
	| 'bottom-start'
	| 'bottom-center'
	| 'bottom-end'
	| 'bottom-start-corner'
	| 'bottom-end-corner'
	| 'start-top'
	| 'start-center'
	| 'start-bottom'
	| 'end-top'
	| 'end-center'
	| 'end-bottom';

type FktPopoverTrigger = 'click' | 'hover' | 'manual';

type FktPopoverAnimation =
	| 'fade-slide'
	| 'none'
	| (string & {});

type FktPopoverOverflowStrategy = 'fit' | 'keep-position';

type FktPopoverRepositionTarget =
	| FktPopoverPosition
	| 'fit';

type FktPopoverPositionDirection = 'auto' | 'ltr' | 'rtl';

interface FktPopoverDismissOn {
	outsideClick?: boolean;
	escape?: boolean;
	scroll?: boolean;
}

type FktPopoverDismissReason =
	| 'outside-click'
	| 'escape'
	| 'scroll'
	| 'mouse-leave'
	| 'focus-out';

interface FktPopoverDismissEvent {
	reason: FktPopoverDismissReason;
	sourceEvent?: Event;
}
```
