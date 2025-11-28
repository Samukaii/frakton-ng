## Key Features

- Single- or multi-select toggle group with optional deselection support
- Icon, label, and icon-only presentations per option via `hideLabel`
- Shape variants (rounded, rect, flat) and size scale (xs–xl) to match any layout
- Form-friendly: implements `ControlValueAccessor` and signal-based `FormValueControl`
- Native button semantics with automatic `aria-label` from option labels
- Disabled state that locks the entire group for consistent UX
- Signal-driven rendering for responsive, performant updates
- Works with design tokens for spacing, sizing, and icon alignment

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
export type FktButtonGroupShape = 'rounded' | 'rect' | 'flat';
export type FktButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FktButtonGroupOption {
    id: string;
    label: string;
    hideLabel?: boolean;
    icon?: FktIconName;
}
```

## Accessibility

- Uses native `<button>` elements for built-in keyboard and focus handling
- `aria-label` mirrors the option `label`, keeping icon-only states screen-reader friendly
- `disabled` prevents focus and interaction, matching native button behavior
- Pair `touched` with form validation to announce errors after interaction
- Preserve meaningful labels even when visually hidden with `hideLabel`

## Usage

- Single-select is ideal for mutually exclusive modes (e.g., list vs. grid); enable `multiple` for tag-like filters
- Bind `value` to a `string` or `string[]` depending on selection mode; set `deselectable` to let users clear choices
- Choose shapes and sizes that align with nearby controls to avoid visual jumps
- Keep icons consistent across options; hide labels only when space is tight and the icon meaning is clear
