import {
  afterRenderEffect,
  Directive,
  ElementRef,
  inject,
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
export class FktPopoverTriggerDirective {
  private readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly context = inject(FktPopoverContextDirective);

  private readonly triggerResizeObserver = afterRenderEffect((onCleanup) => {
    this.updateSize();

    const ResizeObserverCtor =
      this.element.ownerDocument.defaultView?.ResizeObserver;

    if (!ResizeObserverCtor) return;

    const resizeObserver = new ResizeObserverCtor(() => this.updateSize());

    resizeObserver.observe(this.element);

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

  getRect() {
    return this.element.getBoundingClientRect();
  }

  private updateSize() {
    const {width, height} = this.getRect();

    this.context.setTriggerSize({width, height});
  }
}
