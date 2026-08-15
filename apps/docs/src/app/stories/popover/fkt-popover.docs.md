## API Reference

<arg-types></arg-types>

`fkt-popover` is a low-level primitive for custom contextual surfaces that do not fit a specialized Frakton NG component. It manages visibility, trigger interaction, placement, automatic dismiss behavior, and optional focus restoration.

Prefer dedicated components such as Tooltip, Dialog, Select, and Autocomplete when their interaction pattern matches the use case. Those components can provide semantics and keyboard behavior that an arbitrary popover cannot infer.

Use `fktPopoverTrigger` on the interactive control that owns the surface and `fktPopoverContent` on the element that represents its content.

The example below uses disclosure semantics because the trigger only shows and hides contextual content. These ARIA bindings belong to that interaction pattern; they are not universal Popover requirements.

```angular2html

<fkt-popover #popover>
	<button
		[attr.aria-controls]="popover.popoverId()"
		[attr.aria-expanded]="popover.isOpen()"
		fktButton
		fktPopoverTrigger
		label="Open popover"
	></button>

	<div [id]="popover.popoverId()" fktPopoverContent>Popover content</div>
</fkt-popover>
```

## Native surface

The panel uses the browser Popover API. It participates in the top layer above ordinary stacking contexts, is not portaled to a global overlay container, and supports native CSS states such as `:popover-open`, `@starting-style`, and discrete transitions for `display` and `overlay`.

Frakton NG owns trigger-based positioning because native popover does not solve trigger placement by itself.

## Structure constraints

`fkt-popover` expects one descendant `fktPopoverTrigger` and one `fktPopoverContent` element. Nesting establishes one-to-one ownership without implying support for shared or multiple triggers. Missing trigger or content is a configuration error. Conditionally rendered content must exist before the popover opens.

## Semantics

Popover guarantees the mechanics it owns: native top-layer rendering, positioning, collision handling, trigger interaction, automatic dismiss reasons, hover safe area, and explicit focus restoration.

Popover does not infer `role`, `aria-expanded`, `aria-controls`, `aria-haspopup`, an accessible name, keyboard navigation, focus trapping, or modality. Those decisions depend on whether the surface is a preview, dialog, combobox popup, menu, tooltip, or another widget. Prefer the dedicated Frakton NG component whenever one matches the interaction. For a custom pattern, apply the complete semantic, keyboard, and focus contract required by that pattern.

`popoverId()` exposes a generated identifier associated with the Popover instance without assigning it to any element. It can remain unused when the chosen pattern does not need an explicit relationship. When one is required, apply it to the actual semantic target. This removes ID generation and synchronization without assuming that the root marked with `fktPopoverContent` always owns the relationship.

```angular2html
<fkt-popover #popover>
	<button
		[attr.aria-controls]="popover.popoverId()"
		[attr.aria-expanded]="popover.isOpen()"
		aria-haspopup="dialog"
		fktPopoverTrigger
	>
		Open settings
	</button>

	<section
		[id]="popover.popoverId()"
		aria-label="Settings"
		fktPopoverContent
		role="dialog"
	>
		...
	</section>
</fkt-popover>
```

### Common accessibility patterns

- Informational previews normally do not need dialog semantics or a focus trap. Ensure essential information is available through the appropriate accessible relationship or elsewhere in the interface.
- Non-modal interactive surfaces may use `role="dialog"` with an accessible name when dialog semantics fit, without claiming modality or trapping focus automatically.
- Dialog surfaces require an accessible name and an intentional focus, keyboard, dismissal, and focus-return policy. [`fktFocusTrap`](/docs/focus-trap/features) can contain Tab and Shift+Tab when appropriate, but it does not make background content inert or declare a dialog modal. Use the dedicated Dialog component when the complete modal contract is required. Specialized widgets such as Date Picker may implement their own popup contract internally.
- Menus, tooltips, listboxes, comboboxes, and other composite widgets require their own ARIA and keyboard patterns. Use the specialized Frakton component instead of rebuilding one from Popover when available.

## Trigger behavior

Apply `fktPopoverTrigger` to the interactive control that owns the popover. It owns trigger interaction and is the destination used by `restoreTriggerFocus()`.

The directive does not infer whether an element is interactive and does not add a role, `tabindex`, or keyboard activation to passive elements. Use a native interactive element when possible. Custom controls must provide their own correct semantics and keyboard behavior.

`triggerOn="hover"` also opens on focus. The popover remains open while pointer or focus stays inside the trigger or panel. For pointer interaction, a safe area spans the trigger, panel, and the gap between them, with the configured `offset` used as tolerance. This lets the pointer cross the gap without closing the panel; leaving that area closes it normally. Prefer click for persistent, touch-first, or complex interactive flows.

`triggerOn="manual"` disables only the activation performed by the directive. Use the trigger's own event handler or `[(open)]` for state changes. The directive must remain on the real interactive control so ownership and focus restoration remain unambiguous.

`triggerDisabled` disables trigger interaction only. It does not close an open panel and does not prevent external `open` updates.

There is no global disabled state. Use `triggerDisabled` for trigger-driven interaction and control `open` externally when the whole flow should be unavailable.

By default, positioning uses the trigger as its geometric anchor. Bind `anchor` when the surface should be positioned relative to a different `HTMLElement`. The anchor has no interaction or accessibility semantics; it only supplies geometry.

```angular2html
<div #anchor>Position relative to this element</div>

<fkt-popover>
	<button [anchor]="anchor" fktPopoverTrigger>Open</button>
	<div fktPopoverContent>Content</div>
</fkt-popover>
```

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

Reason-specific aliases provide filtered outputs without a guard or `switch`: `dismiss.escape`, `dismiss.outsideClick`, `dismiss.scroll`, `dismiss.mouseLeave`, and `dismiss.focusOut`. Each emits the same `FktPopoverDismissEvent` as `dismiss`.

```angular2html
<fkt-popover
	(dismiss.escape)="handleEscape($event)"
	(dismiss.outsideClick)="handleOutsideClick($event)"
>
	...
</fkt-popover>
```

By default, scrolling repositions the panel instead of dismissing it. When `dismissOn.scroll` is enabled, external scroll dismisses the popover. Scroll events from inside the trigger or panel are ignored, so scrollable content inside the popover remains usable.

## Restoring trigger focus

Close the popover by updating `open`. Add `returnFocus` when every programmatic transition from open to closed should return keyboard focus to the trigger.

```angular2html

<fkt-popover [(open)]="open" returnFocus>
	...

	<button
		fktButton
		label="Apply"
		(click)="open.set(false)"
	></button>
</fkt-popover>
```

`returnFocus` affects state-driven closure only. Automatic dismiss reasons keep their own focus policy, so outside click, scroll, mouse leave, and focus out do not steal focus from their destination. Escape restores focus when focus remains inside the panel being hidden. Use `restoreTriggerFocus()` for an individual flow instead of enabling the policy for every programmatic close.

## Positioning

`preferredPosition` is the declarative preferred placement relative to the resolved anchor. `preferredFallbackPositions` adds preferred alternatives before the automatic fit search tries other placements.

With `overflowStrategy="fit"`, the popover may resolve to a different placement when the preferred placement does not fit. It first tries the declared position and each `preferredFallbackPositions` entry in the provided order. It then tries natural alternatives: other alignments on the same side, the opposite side while preserving alignment when possible, and finally the remaining placements. The first placement without overflow is selected; if every placement overflows, the one with the smallest overflow is used. `preferredFallbackPositions` only affects this automatic strategy.

With `overflowStrategy="keep-position"`, the requested placement is preserved even when it overflows.

```angular2html

<fkt-popover
	preferredPosition="bottom-start"
	[preferredFallbackPositions]="['top-start', 'bottom-end']"
	overflowStrategy="fit"
>
	...
</fkt-popover>
```

Positions use logical sides. `top` and `bottom` are block sides. `start` and `end` are inline sides. `center`, `top`, and `bottom` align the panel along the selected side. Corner placements such as `top-start-corner`, `top-end-corner`, `bottom-start-corner`, and `bottom-end-corner` are separate positions around anchor corners.

The current placement is exposed as `data-fkt-position` and `data-fkt-position-direction` on the host and panel for placement-specific styling, and through `resolvedPosition` for Angular state.

`positionDirection` controls how logical `start` and `end` positions are resolved. The default `auto` value reads the resolved anchor computed direction. Use `ltr` or `rtl` to force the positioning direction for a specific popover.

## Position update lifecycle

The popover repositions while open on document scroll, window resize, and resolved anchor resize.

Panel content size is consumer-owned. Prefer fixed or constrained panel dimensions for dynamic content, and let the content scroll inside the panel when it can grow. If an intentional content layout change should re-evaluate placement, call `repositionTo('fit')` to run the automatic fit search and persist the resolved placement as the active preference.

Automatic collision handling updates the active placement while the panel is open without changing the active preference. Programmatic repositioning updates the active preference to the resolved placement. Neither writes back to the `preferredPosition` input; when the `preferredPosition` input changes, the active placement is recalculated from the new input value.

## Content lifecycle

The element marked with `fktPopoverContent` is projected directly into the native panel and must exist before the popover opens. Opening and closing use the native Popover API and do not destroy Angular content. Internal component state, form state, subscriptions, and DOM state inside the content are preserved between openings.

For expensive content, keep the element marked with `fktPopoverContent` mounted and conditionally instantiate its children when needed.

## Sizing and styling

The host exposes `--fkt-popover-anchor-width` and `--fkt-popover-anchor-height`. Without an explicit anchor these values describe the trigger. Combine them with sizing tokens for proportional panel sizes.

```css
.popover-demo {
	--fkt-popover-width: var(--fkt-popover-anchor-width);
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

## Methods

```ts
class FktPopoverComponent {
  repositionTo(target: FktPopoverRepositionTarget): void;

  restoreTriggerFocus(): void;
}
```

`repositionTo` recalculates placement while the panel is open and persists the resolved placement as the active preference. Pass `'fit'` to resolve through the fit search. Pass a concrete position to use that placement directly. The method does not write back to the `preferredPosition` input.

`restoreTriggerFocus` moves focus back to the trigger for a single consumer-controlled flow. Use `returnFocus` when every state-driven close should do so.

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
