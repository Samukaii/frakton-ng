import {
  AfterViewInit,
  Directive,
  DOCUMENT,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import {
  filterElementsWithTabIndex,
  getFocusableElementsSelectors,
} from 'frakton-ng/internal/utils';

@Directive({
  selector: '[fktFocusTrap]',
  host: {
    '(keydown)': 'handleTab($event)',
  },
})
export class FktFocusTrapDirective implements AfterViewInit {
  autoFocusOnOpen = input<boolean | string>(false);
  preventScroll = input(true);
  private element = inject(ElementRef).nativeElement as HTMLElement;
  private readonly document = inject(DOCUMENT);
  private restoreFocusElement: Element | null = null;

  private selectors = getFocusableElementsSelectors();

  public restoreFocus(): void {
    if (!this.restoreFocusElement) return;

    if (this.restoreFocusElement instanceof HTMLElement)
      this.restoreFocusElement.focus({ preventScroll: this.preventScroll() });
  }

  ngAfterViewInit() {
    this.restoreFocusElement = this.document.activeElement;
    const autoFocusOnOpen = this.autoFocusOnOpen();

    if (autoFocusOnOpen === false) return;

    if (typeof autoFocusOnOpen === 'string')
      this.focusElementBySelector(autoFocusOnOpen);
    else this.focusFirstElement();
  }

  focusFirstElement() {
    setTimeout(() => {
      const nodes = this.element.querySelectorAll(this.getSelectors());
      if (nodes.length)
        (nodes[0] as HTMLElement).focus({
          preventScroll: this.preventScroll(),
        });
    }, 100);
  }

  focusElementBySelector(selector: string) {
    setTimeout(() => {
      const element = this.element.querySelector(selector);

      if (!element) return;

      (element as HTMLElement).focus({
        preventScroll: this.preventScroll(),
      });
    }, 100);
  }

  protected handleTab(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;

    const nodes = filterElementsWithTabIndex(
      Array.from(
        this.element.querySelectorAll(this.getSelectors())
      ) as HTMLElement[]
    );
    if (!nodes.length) return;

    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (event.shiftKey && this.document.activeElement === first) {
      last.focus({ preventScroll: this.preventScroll() });
      event.preventDefault();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      first.focus({ preventScroll: this.preventScroll() });
      event.preventDefault();
    }
  }

  private getSelectors() {
    return this.selectors.join(', ');
  }
}
