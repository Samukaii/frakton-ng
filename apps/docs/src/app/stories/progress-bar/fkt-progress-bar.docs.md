# Progress Bar

A versatile progress bar component for displaying loading and completion status with flexible sizing, variants, and accessible value announcements.

## Features

- **Sizes**: Small, medium, and large heights
- **Color control**: Semantic colors or custom hex values
- **Variants**: Default fill, striped, or animated stripes
- **Shapes**: Rounded or square corners
- **Labeling**: Optional labels above the bar and value text inside or outside
- **Formatting**: Custom formatter for value display
- **Accessibility**: Full ARIA progress semantics with value text

## Basic Usage

```html
<!-- Basic progress bar -->
<fkt-progress-bar [value]="75" />

<!-- With label and value -->
<fkt-progress-bar
  [value]="85"
  label="Upload Progress"
  [showLabel]="true"
  [showValue]="true"
/>

<!-- Striped warning state -->
<fkt-progress-bar
  [value]="45"
  color="warning"
  variant="striped"
  [showValue]="true"
/>
```

## API Reference

### Inputs

| Name        | Type                                  | Default    | Description                                                                            |
|-------------|---------------------------------------|------------|----------------------------------------------------------------------------------------|
| value       | number                                | 0          | Current progress value (clamped between 0 and `max`).                                  |
| max         | number                                | 100        | Maximum value representing completion; values above this render as 100%.               |
| size        | FktProgressBarSize                    | 'md'       | Vertical size of the track.                                                            |
| color       | FktColor                              | 'primary'  | Semantic color or custom hex (`#RGB`, `#RRGGBB`, `#RRGGBBAA`).                         |
| variant     | FktProgressBarVariant                 | 'default'  | Visual style of the fill (`default`, `striped`, or `animated`).                        |
| shape       | FktProgressBarShape                   | 'rounded'  | Corner style for the track and fill.                                                   |
| label       | string                                | ''         | Optional label text shown above when `showLabel` is true.                              |
| showLabel   | boolean                               | false      | Whether to render the label row above the track.                                       |
| showValue   | boolean                               | false      | Whether to render the value text (inside the bar when no label is shown).              |
| formatValue | `(value: number, max: number) => string` | undefined | Custom formatter for the value text. Receives the clamped value and normalized max.    |
| ariaLabel   | string                                | undefined  | Overrides the computed `aria-label` for screen readers.                                |

### Types

```typescript
import {
  FktProgressBarSize,
  FktProgressBarShape,
  FktProgressBarVariant
} from 'frakton-ng/progress-bar';
import { FktColor } from 'frakton-ng/core';

type FktProgressBarSize = 'sm' | 'md' | 'lg';
type FktProgressBarShape = 'rounded' | 'square';
type FktProgressBarVariant = 'default' | 'striped' | 'animated';
```

### Formatting Values

```typescript
<fkt-progress-bar
  [value]="34"
  [max]="60"
  [showValue]="true"
  [formatValue]="(value, max) => `${value}/${max} files`"
/>
```

## Design Tokens

Key tokens are extracted automatically and can be overridden per instance:

- Heights: `--fkt-progress-bar-height-sm`, `--fkt-progress-bar-height-md`, `--fkt-progress-bar-height-lg`
- Track and fill: `--fkt-progress-bar-track-color`, `--fkt-progress-bar-[color]-color`
- Corners and typography: `--fkt-progress-bar-border-radius`, `--fkt-progress-bar-font-size`

```css
fkt-progress-bar {
  --fkt-progress-bar-height-lg: 1.75rem;
  --fkt-progress-bar-track-color: var(--fkt-color-neutral-100);
  --fkt-progress-bar-text-color: #0f172a;
}
```

## Usage Patterns

- **File transfers**: Display upload or download progress with labels and values.
- **Task completion**: Show progress across checklists or onboarding steps.
- **Dashboard metrics**: Represent goal attainment with semantic colors and stripes for in-progress items.
- **Form wizards**: Pair with page titles to communicate step completion.

## Accessibility

- Uses `role="progressbar"` with `aria-valuenow`, `aria-valuemax`, and `aria-valuetext`.
- Provide `ariaLabel` or `label` when the context is not obvious.
- Percentage text is announced even when hidden visually via `showValue`.
- Semantic colors maintain contrast; prefer text labels for ambiguous states.

## Best Practices

### Do
- Keep `max` aligned with real completion criteria and clamp values accordingly.
- Use labels when multiple progress bars appear together.
- Use the animated variant for active/in-flight operations only.
- Provide custom formatters for non-percentage units (files, steps, time).

### Don't
- Use progress bars for indefinite loading—prefer spinners.
- Animate finished states; switch back to the default variant when complete.
- Rely on color alone to convey meaning; pair with text when possible.
