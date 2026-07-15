## API Reference

<arg-types></arg-types>

`fkt-popover` renders contextual content attached to a trigger. It manages disclosure, placement, automatic dismiss behavior, and optional focus restoration.

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

The panel does not assign a semantic role by default. Popover provides surface behavior, not composite-widget accessibility. Use it for contextual surfaces such as previews, compact forms, and small action panels. Use dedicated components, or provide the appropriate role and keyboard behavior yourself, when building menus, listboxes, dialogs, tooltips, or other composite widgets.

## Trigger behavior

The trigger receives `aria-expanded` and `aria-controls`. It also acts as the positioning reference.

`triggerOn="hover"` also opens on focus. The popover remains open while pointer or focus stays inside the trigger or panel, and pointer movement across the offset gap is protected by a safe area. Prefer click for persistent, touch-first, or complex interactive flows.

`triggerOn="manual"` disables trigger-driven opening. In that mode, use `[(open)]` for state changes while the trigger remains the positioning reference.

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

`position` is the declarative preferred placement. `preferredFallbackPositions` adds preferred alternatives before the automatic fit search tries other placements.

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

`start`, `center`, and `end` are side-alignment slots around the trigger. They are direct geometry positions, not aliases for corner positions. Corner placements such as `top-left`, `top-right`, `bottom-left`, and `bottom-right` are separate positions around trigger corners.

The current placement is exposed as `data-fkt-placement` on the panel for placement-specific styling and through `positionChange` for Angular state.

## Position update lifecycle

The popover repositions while open on document scroll, window resize, and trigger resize.

Panel content size is consumer-owned. Prefer fixed or constrained panel dimensions for dynamic content, and let the content scroll inside the panel when it can grow. If an intentional content layout change should re-evaluate placement, call `reposition('fit')` to run the automatic fit search and persist the resolved placement as the active preference.

Automatic collision handling updates the active placement while the panel is open without changing the active preference. Programmatic repositioning updates the active preference to the resolved placement. Neither writes back to the `position` input; when the `position` input changes, the active placement is recalculated from the new input value.

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
reposition(target
:
FktPopoverRepositionTarget
):
void;
restoreTriggerFocus()
:
void;
```

`reposition` recalculates placement while the panel is open and persists the resolved placement as the active preference. Pass `'fit'` to resolve through the fit search. Pass a concrete position to use that placement directly. The method does not write back to the `position` input.

`restoreTriggerFocus` moves focus back to the trigger. Use it after state-driven closes when returning focus to the trigger is the desired flow.

## Public types

```ts
type FktPopoverPosition =
	| 'top-start'
	| 'top-center'
	| 'top-end'
	| 'top-left'
	| 'top-right'
	| 'bottom-start'
	| 'bottom-center'
	| 'bottom-end'
	| 'bottom-left'
	| 'bottom-right'
	| 'left-start'
	| 'left-center'
	| 'left-end'
	| 'right-start'
	| 'right-center'
	| 'right-end';

type FktPopoverTrigger = 'click' | 'hover' | 'manual';

type FktPopoverAnimation =
	| 'fade-slide'
	| 'none'
	| (string & {});

type FktPopoverOverflowStrategy = 'fit' | 'keep-position';

type FktPopoverRepositionTarget =
	| FktPopoverPosition
	| 'fit';

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
