import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';
import { getFocusableElementsSelectors } from 'frakton-ng/internal/utils';
import { filterElementsWithTabIndex } from '../../internal/utils/filter-elements-with-tab-index';

@Directive({
	selector: '[fktFocusTrap]',
	host: {
		'(keydown)': 'handleTab($event)'
	}
})
export class FktFocusTrapDirective implements AfterViewInit {
	preventScroll = input(true);
	private element = inject(ElementRef).nativeElement as HTMLElement;

	private selectors = getFocusableElementsSelectors();

	protected handleTab(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const nodes = filterElementsWithTabIndex(Array.from(this.element.querySelectorAll(this.getSelectors())) as HTMLElement[]);
		if (!nodes.length) return;

		const first = nodes[0];
		const last = nodes[nodes.length - 1];

		if (event.shiftKey && document.activeElement === first) {
			last.focus({preventScroll: this.preventScroll()});
			event.preventDefault();
		} else if (!event.shiftKey && document.activeElement === last) {
			first.focus({preventScroll: this.preventScroll()});
			event.preventDefault();
		}
	}

	private getSelectors() {
		return this.selectors.join(', ')
	}

	ngAfterViewInit() {
		setTimeout(() => {
			const nodes = this.element.querySelectorAll(this.getSelectors());
			if (nodes.length) (nodes[0] as HTMLElement).focus({preventScroll: this.preventScroll()});
		}, 100);
	}
}
