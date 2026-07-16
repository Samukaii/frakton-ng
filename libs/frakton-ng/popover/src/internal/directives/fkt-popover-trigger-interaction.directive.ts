import { afterRenderEffect, booleanAttribute, Directive, ElementRef, inject, input, OnDestroy } from '@angular/core';
import { mergeAreas } from 'frakton-ng/internal/utils';
import { FktPopoverTrigger } from '../../fkt-popover.types';
import { FktPopoverContextDirective } from './fkt-popover-context.directive';

/**
 * @internal
 */
@Directive({
  host: {
    '[attr.aria-disabled]': 'triggerDisabled() ? "true" : null',
    '[attr.aria-expanded]': 'context.open()',
    '[attr.aria-controls]': 'context.panelId',
    '(click)': 'handleClick()',
    '(mouseenter)': 'handleMouseEnter()',
    '(focusin)': 'handleFocusIn()',
    '(mouseleave)': 'handleMouseLeave($event)',
    '(focusout)': 'handleFocusOut($event)',
  },
})
export class FktPopoverTriggerInteractionDirective implements OnDestroy {
  readonly triggerOn = input<FktPopoverTrigger>('click');
  readonly triggerDisabled = input(false, {
    transform: booleanAttribute,
  });

  protected readonly context = inject(FktPopoverContextDirective);
  private readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  private stopTrackingPointerUntilHoverSafeAreaLeave: (() => void) | null =
    null;

  private readonly syncTriggerMode = afterRenderEffect(() => {
    this.context.triggerOn.set(this.triggerOn());
  });

  ngOnDestroy() {
    this.stopTrackingPointer();
  }

  protected handleClick() {
    if (!this.shouldHandleTriggerMode('click')) return;

    this.context.open.update((open) => !open);
  }

  protected handleMouseEnter() {
    if (!this.shouldHandleTriggerMode('hover')) return;

    this.context.open.set(true);
  }

  protected handleFocusIn() {
    if (!this.shouldHandleTriggerMode('hover')) return;

    this.context.open.set(true);
  }

  protected handleMouseLeave(event: MouseEvent) {
    if (!this.shouldHandleTriggerMode('hover')) return;

    this.handleHoverMouseLeave(event);
  }

  protected handleFocusOut(event: FocusEvent) {
    if (!this.shouldHandleTriggerMode('hover')) return;
    if (this.isMovingWithinPopover(event.relatedTarget)) return;

    this.context.dismissAutomatically({
      reason: 'focus-out',
      sourceEvent: event,
    });
  }

  private shouldHandleTriggerMode(triggerOn: 'click' | 'hover') {
    return !this.triggerDisabled() && this.triggerOn() === triggerOn;
  }

  private handleHoverMouseLeave(event: MouseEvent) {
    if (this.isPointerInsideHoverSafeArea(event)) {
      this.trackPointerUntilHoverSafeAreaLeave();
      return;
    }

    if (this.isMovingWithinPopover(event.relatedTarget)) return;

    this.context.dismissAutomatically({
      reason: 'mouse-leave',
      sourceEvent: event,
    });
  }

  private isMovingWithinPopover(target: EventTarget | null) {
    if (!(target instanceof Node)) return false;

    return (
      this.element.contains(target) ||
      !!this.context.panelElement()?.contains(target)
    );
  }

  private isPointerInsideHoverSafeArea(event: MouseEvent) {
    const triggerRect = this.element.getBoundingClientRect();
    const panelElement = this.context.panelElement();

    if (!panelElement) return false;

    const panelRect = panelElement.getBoundingClientRect();

    const { isInside } = mergeAreas({
      rects: [triggerRect, panelRect],
      tolerance: this.context.offset(),
    });

    return isInside({ x: event.clientX, y: event.clientY });
  }

  private trackPointerUntilHoverSafeAreaLeave() {
    this.stopTrackingPointer();

    const handlePointerMove = (event: MouseEvent) => {
      if (!this.context.open()) {
        this.stopTrackingPointer();
        return;
      }

      if (this.isPointerInsideHoverSafeArea(event)) return;

      this.stopTrackingPointer();
      this.context.dismissAutomatically({
        reason: 'mouse-leave',
        sourceEvent: event,
      });
    };

    this.element.ownerDocument.addEventListener('mousemove', handlePointerMove);

    this.stopTrackingPointerUntilHoverSafeAreaLeave = () => {
      this.element.ownerDocument.removeEventListener(
        'mousemove',
        handlePointerMove
      );
      this.stopTrackingPointerUntilHoverSafeAreaLeave = null;
    };
  }

  private stopTrackingPointer() {
    this.stopTrackingPointerUntilHoverSafeAreaLeave?.();
  }
}
