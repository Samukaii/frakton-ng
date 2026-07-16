import { computed, Directive, input, model, output, signal } from '@angular/core';
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
  getRect(): DOMRect;
  getDirection(): 'ltr' | 'rtl';
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

  readonly dismiss = output<FktPopoverDismissEvent>();
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

  private static nextPopoverId = 0;
  readonly panelId = `fkt-popover-${FktPopoverContextDirective.nextPopoverId++}`;

  readonly triggerSize = signal<{ width: number; height: number } | null>(
    null,
    {
      equal: deepEqual,
    }
  );
  readonly panelElement = signal<HTMLElement | null>(null);
  readonly triggerOn = signal<FktPopoverTrigger>('click');

  dismissAutomatically(event: FktPopoverDismissEvent) {
    this.dismiss.emit(event);
    this.open.set(false);
  }

  restoreTriggerFocus() {
    this.trigger().focus();
  }

  setTriggerSize(size: { width: number; height: number }) {
    this.triggerSize.set(size);
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
    this.triggerSize.set(null);
  }
}
