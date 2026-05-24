## Key Features

- Binary on/off control with smooth slide animation
- `role="switch"` with `aria-checked` for correct screen reader semantics
- Keyboard activation via Space and Enter
- Optional visible label with `hideLabel` for icon-only or inline layouts
- Form-friendly: implements `ControlValueAccessor` and signal-based `FormValueControl`
- Disabled state prevents interaction and communicates via `aria-disabled`
- Works with design tokens for sizing and color

## Configuration Options

<arg-types></arg-types>

## Accessibility

- Uses `role="switch"` so screen readers announce on/off state correctly
- `aria-checked` reflects the current value reactively
- `aria-disabled` signals non-interactive state without removing focus from the DOM (tabindex is still -1 when disabled)
- `aria-errormessage` forwards the first validation error message to assistive technologies
- Label is visually rendered when `hideLabel` is false; `aria-label` provides the accessible name regardless

## Usage

- Use for single boolean preferences (notifications, dark mode, feature flags)
- For terms acceptance or required agreements, combine with `fkt-field-error` and a required validator
- Pair `touched` with `invalid` in input-driven mode to only show errors after user interaction
- In reactive forms, use `Validators.requiredTrue` to enforce that the toggle must be enabled
