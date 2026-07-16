import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  ElementRef,
  inject,
  untracked,
  viewChild,
} from '@angular/core';
import {
  documentEventListenerEffect,
  MarkUsed,
} from 'frakton-ng/internal/utils';
import { FktPopoverContentDirective } from './directives/fkt-popover-content.directive';
import {
  FktPopoverDismissOn,
  FktPopoverRepositionTarget,
} from './fkt-popover.types';
import { FktPopoverContextDirective } from './internal/directives/fkt-popover-context.directive';
import { FktPopoverPositioningDirective } from './internal/directives/fkt-popover-positioning.directive';

const DEFAULT_DISMISS_ON: Required<FktPopoverDismissOn> = {
  outsideClick: true,
  escape: true,
  scroll: false,
};

@Component({
  selector: 'fkt-popover',
  exportAs: 'fktPopover',
  templateUrl: './fkt-popover.component.html',
  styleUrl: './fkt-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    FktPopoverPositioningDirective,
    {
      directive: FktPopoverContextDirective,
      inputs: [
        'open',
        'preferredPosition',
        'preferredFallbackPositions',
        'overflowStrategy',
        'offset',
        'animation',
        'dismissOn',
        'positionDirection',
      ],
      outputs: ['openChange', 'dismiss', 'resolvedPosition'],
    },
  ],
  host: {
    '[attr.data-fkt-position]': 'positioning.appliedPosition()?.name ?? null',
    '[attr.data-fkt-position-direction]':
      'positioning.appliedPosition()?.direction ?? null',
    '[style.--fkt-popover-trigger-width]': 'triggerSizeInPixels().width',
    '[style.--fkt-popover-trigger-height]': 'triggerSizeInPixels().height',
  },
  imports: [NgTemplateOutlet],
})
export class FktPopoverComponent {
  protected readonly content = contentChild.required(
    FktPopoverContentDirective
  );

  protected readonly panel =
    viewChild.required<ElementRef<HTMLElement>>('panel');
  protected readonly context = inject(FktPopoverContextDirective);
  protected readonly positioning = inject(FktPopoverPositioningDirective);

  readonly triggerSizeInPixels = computed(() => {
    const triggerRect = this.context.triggerSize();

    if (!triggerRect)
      return {
        width: null,
        height: null,
      };

    return {
      width: `${triggerRect.width}px`,
      height: `${triggerRect.height}px`,
    };
  });

  protected readonly animationClass = computed(() => {
    const animation = this.context.animation();

    if (animation === 'none') return null;
    if (animation === 'fade-slide') {
      return 'fkt-popover-animation-fade-slide';
    }

    return animation;
  });

  protected readonly panelClasses = computed(() =>
    ['fkt-popover__content', this.animationClass()]
      .filter((className): className is string => !!className)
      .join(' ')
  );

  protected readonly mergedDismissOn = computed(() => ({
    ...DEFAULT_DISMISS_ON,
    ...this.context.dismissOn(),
  }));

  @MarkUsed()
  protected readonly outsideClickDismiss = documentEventListenerEffect({
    key: 'mousedown',
    enabled: this.context.open,
    listener: (event) => {
      if (!this.mergedDismissOn().outsideClick) return;
      if (!(event.target instanceof HTMLElement)) return;
      if (this.containsEventTarget(event.target)) return;

      this.context.dismissAutomatically({
        reason: 'outside-click',
        sourceEvent: event,
      });
    },
  });

  @MarkUsed()
  protected readonly escapeDismiss = documentEventListenerEffect({
    key: 'keydown',
    enabled: this.context.open,
    listener: (event) => {
      if (!this.mergedDismissOn().escape) return;
      if (event.key !== 'Escape') return;

      event.stopPropagation();
      this.context.dismissAutomatically({
        reason: 'escape',
        sourceEvent: event,
      });
      this.context.restoreTriggerFocus();
    },
  });

  @MarkUsed()
  protected readonly scrollDismiss = documentEventListenerEffect({
    key: 'scroll',
    enabled: this.context.open,
    options: { capture: true },
    listener: (event) => {
      if (!this.mergedDismissOn().scroll) return;
      if (
        event.target instanceof Node &&
        this.containsEventTarget(event.target)
      ) {
        return;
      }

      this.context.dismissAutomatically({
        reason: 'scroll',
        sourceEvent: event,
      });
    },
  });

  private readonly syncPanelElement = afterRenderEffect((onCleanup) => {
    this.context.panelElement.set(this.panel().nativeElement);

    onCleanup(() => {
      this.context.panelElement.set(null);
    });
  });

  protected readonly syncNativePopoverState = afterRenderEffect((onCleanup) => {
    const isOpen = this.context.open();

    untracked(() => {
      if (isOpen) {
        this.showPopover();
        this.positioning.updatePosition();
      } else this.hidePopover();
    });

    onCleanup(() => {
      this.hidePopover();
    });
  });

  restoreTriggerFocus() {
    this.context.restoreTriggerFocus();
  }

  repositionTo(target: FktPopoverRepositionTarget) {
    if (target === 'fit') {
      this.positioning.applyPositioningOverride({ strategy: 'fit' });
      return;
    }

    this.positioning.applyPositioningOverride({
      strategy: 'exact',
      position: target,
    });
  }

  protected handleHoverMouseLeave(event: MouseEvent) {
    if (this.context.triggerOn() !== 'hover') return;
    if (this.isMovingWithinPopover(event.relatedTarget)) return;

    this.context.dismissAutomatically({
      reason: 'mouse-leave',
      sourceEvent: event,
    });
  }

  protected handleHoverFocusOut(event: FocusEvent) {
    if (this.context.triggerOn() !== 'hover') return;
    if (this.isMovingWithinPopover(event.relatedTarget)) return;

    this.context.dismissAutomatically({
      reason: 'focus-out',
      sourceEvent: event,
    });
  }

  private containsEventTarget(target: Node) {
    const panel = this.panel().nativeElement;

    return this.context.trigger().contains(target) || panel.contains(target);
  }

  private isMovingWithinPopover(target: EventTarget | null) {
    return target instanceof Node && this.containsEventTarget(target);
  }

  private showPopover() {
    const panel = this.panel().nativeElement;

    if (panel.matches(':popover-open')) return;

    panel.showPopover();
  }

  private hidePopover() {
    const panel = this.panel().nativeElement;

    if (!panel.matches(':popover-open')) return;

    panel.hidePopover();
  }
}
