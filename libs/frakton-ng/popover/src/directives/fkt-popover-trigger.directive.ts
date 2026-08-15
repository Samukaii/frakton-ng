import {
  afterRenderEffect,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
} from '@angular/core';
import { FktPopoverContextDirective } from '../internal/directives/fkt-popover-context.directive';
import { FktPopoverTriggerInteractionDirective } from '../internal/directives/fkt-popover-trigger-interaction.directive';

@Directive({
  selector: '[fktPopoverTrigger]',
  hostDirectives: [
    {
      directive: FktPopoverTriggerInteractionDirective,
      inputs: ['triggerOn', 'triggerDisabled'],
    },
  ],
  host: {
    '[attr.data-fkt-popover-trigger]': '""',
  },
})
export class FktPopoverTriggerDirective implements OnDestroy {
  private readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly context = inject(FktPopoverContextDirective);

  readonly anchor = input<HTMLElement | null>(null);

  constructor() {
    this.context.registerTrigger(this);
  }

  ngOnDestroy() {
    this.context.unregisterTrigger(this);
  }

  private readonly anchorResizeObserver = afterRenderEffect((onCleanup) => {
    const anchor = this.anchorElement;

    this.updateAnchorSize();

    const ResizeObserverCtor =
      this.element.ownerDocument.defaultView?.ResizeObserver;

    if (!ResizeObserverCtor) return;

    const resizeObserver = new ResizeObserverCtor(() =>
      this.updateAnchorSize()
    );

    resizeObserver.observe(anchor);

    onCleanup(() => {
      resizeObserver.disconnect();
    });
  });

  contains(target: Node) {
    return this.element.contains(target);
  }

  focus() {
    const triggerElement = this.element;

    queueMicrotask(() => {
      triggerElement.focus();
    });
  }

  getAnchorRect() {
    return this.anchorElement.getBoundingClientRect();
  }

  getAnchorDirection() {
    const anchor = this.anchorElement;

    return anchor.ownerDocument.defaultView?.getComputedStyle(anchor).direction ===
      'rtl'
      ? 'rtl'
      : 'ltr';
  }

  private get anchorElement() {
    return this.anchor() ?? this.element;
  }

  private updateAnchorSize() {
    const { width, height } = this.getAnchorRect();

    this.context.setAnchorSize({ width, height });
  }
}
