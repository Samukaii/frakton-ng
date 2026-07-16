import { contentChild, Directive, input, model, output, signal } from '@angular/core';
import { deepEqual } from 'frakton-ng/internal/utils';
import { FktPopoverTriggerDirective } from '../../directives/fkt-popover-trigger.directive';
import {
  type FktPopoverAnimation,
  FktPopoverDismissEvent,
  type FktPopoverDismissOn,
  FktPopoverOverflowStrategy,
  FktPopoverPosition,
  FktPopoverPositionDirection,
  FktPopoverTrigger
} from '../../fkt-popover.types';

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

  readonly trigger = contentChild.required(FktPopoverTriggerDirective);

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
}
