import {
  booleanAttribute,
  computed,
  Directive,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { ElementIdGeneratorService } from 'frakton-ng/internal/services';
import { deepEqual } from 'frakton-ng/internal/utils';
import {
  type FktPopoverAnimation,
  FktPopoverDismissEvent,
  type FktPopoverDismissOn,
  FktPopoverOverflowStrategy,
  FktPopoverPosition,
  FktPopoverPositionDirection,
  FktPopoverTrigger
} from '../../fkt-popover.types';

interface FktPopoverTriggerRef {
  contains(target: Node): boolean;
  focus(): void;
  getAnchorRect(): DOMRect;
  getAnchorDirection(): 'ltr' | 'rtl';
}

/**
 * @internal
 */
@Directive()
export class FktPopoverContextDirective {
  readonly open = model(false);
  readonly preferredPosition = input<FktPopoverPosition>('bottom-center');
  readonly preferredFallbackPositions = input<FktPopoverPosition[]>([]);
  readonly overflowStrategy = input<FktPopoverOverflowStrategy>('fit');
  readonly offset = input(8);
  readonly dismissOn = input<FktPopoverDismissOn>({});
  readonly animation = input<FktPopoverAnimation>('fade-slide');
  readonly positionDirection = input<FktPopoverPositionDirection>('auto');
  readonly returnFocus = input(false, { transform: booleanAttribute });

  readonly dismiss = output<FktPopoverDismissEvent>();
  readonly dismissOutsideClick = output<FktPopoverDismissEvent>({
    alias: 'dismiss.outsideClick',
  });
  readonly dismissEscape = output<FktPopoverDismissEvent>({
    alias: 'dismiss.escape',
  });
  readonly dismissScroll = output<FktPopoverDismissEvent>({
    alias: 'dismiss.scroll',
  });
  readonly dismissMouseLeave = output<FktPopoverDismissEvent>({
    alias: 'dismiss.mouseLeave',
  });
  readonly dismissFocusOut = output<FktPopoverDismissEvent>({
    alias: 'dismiss.focusOut',
  });

  readonly resolvedPosition = output<{
    position: FktPopoverPosition;
    direction: 'ltr' | 'rtl';
  }>();

  private readonly registeredTrigger = signal<FktPopoverTriggerRef | null>(null);

  readonly trigger = computed(() => {
    const trigger = this.registeredTrigger();

    if (!trigger) {
      throw new Error(
        'FktPopoverComponent requires exactly one descendant with fktPopoverTrigger.'
      );
    }

    return trigger;
  });

  readonly popoverId = signal(
    inject(ElementIdGeneratorService).next('fkt-popover')
  );

  readonly anchorSize = signal<{ width: number; height: number } | null>(
    null,
    {
      equal: deepEqual,
    }
  );
  readonly panelElement = signal<HTMLElement | null>(null);
  readonly triggerOn = signal<FktPopoverTrigger>('click');
  private automaticClosePending = false;

  dismissAutomatically(event: FktPopoverDismissEvent) {
    this.dismiss.emit(event);

    switch (event.reason) {
      case 'escape':
        this.dismissEscape.emit(event);
        break;
      case 'scroll':
        this.dismissScroll.emit(event);
        break;
      case 'focus-out':
        this.dismissFocusOut.emit(event);
        break;
      case 'mouse-leave':
        this.dismissMouseLeave.emit(event);
        break;
      case 'outside-click':
        this.dismissOutsideClick.emit(event);
        break;
    }

    this.automaticClosePending = true;
    this.open.set(false);
  }

  consumeAutomaticClose() {
    const wasAutomatic = this.automaticClosePending;

    this.automaticClosePending = false;

    return wasAutomatic;
  }

  clearAutomaticClose() {
    this.automaticClosePending = false;
  }

  restoreTriggerFocus() {
    this.trigger().focus();
  }

  setAnchorSize(size: { width: number; height: number }) {
    this.anchorSize.set(size);
  }

  registerTrigger(trigger: FktPopoverTriggerRef) {
    const registeredTrigger = this.registeredTrigger();

    if (registeredTrigger && registeredTrigger !== trigger) {
      throw new Error(
        'FktPopoverComponent currently supports exactly one fktPopoverTrigger.'
      );
    }

    this.registeredTrigger.set(trigger);
  }

  unregisterTrigger(trigger: FktPopoverTriggerRef) {
    if (this.registeredTrigger() !== trigger) return;

    this.registeredTrigger.set(null);
    this.anchorSize.set(null);
  }
}
