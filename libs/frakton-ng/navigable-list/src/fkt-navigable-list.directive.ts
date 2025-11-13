import { AfterViewInit, Directive, effect, ElementRef, inject, input, model, output, signal } from '@angular/core';
import { clampNumber, MarkUsed } from 'frakton-ng/internal/utils';


@Directive({
	selector: '[fktNavigableList]',
	host: {
		'(keydown)': 'handleKeyDown($event)'
	}
})
export class FktNavigableListDirective implements AfterViewInit {
	currentIndex = model<number | null>(null);
	childSelector = input.required<string>();
	select = output<number>();
	orientation = input<'vertical' | 'horizontal'>("vertical");
	private elements = signal<HTMLElement[]>([]);
	private element = inject(ElementRef).nativeElement as HTMLElement;

	protected handleKeyDown(event: KeyboardEvent) {
		const orientation = this.orientation();

		switch (event.key) {
			case 'ArrowDown':
				if(orientation !== "vertical") break;
				event.preventDefault();
				this.currentIndex.update(index => clampNumber((index ?? -1) + 1, 0, this.elements().length - 1));
				break;
			case 'ArrowUp':
				if(orientation !== "vertical") break;
				event.preventDefault();
				this.currentIndex.update(index => clampNumber((index ?? 1) - 1, 0, this.elements().length - 1));
				break;
			case 'ArrowLeft':
				if(orientation !== "horizontal") break;
				event.preventDefault();
				this.currentIndex.update(index => clampNumber((index ?? 1) - 1, 0, this.elements().length - 1));
				break;
			case 'ArrowRight':
				if(orientation !== "horizontal") break;
				event.preventDefault();
				this.currentIndex.update(index => clampNumber((index ?? -1) + 1, 0, this.elements().length - 1));
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				this.select.emit(this.currentIndex() ?? 0);
				break;
			case 'Home':
				this.currentIndex.set(0);
				event.preventDefault();
				break;
			case 'End':
				this.currentIndex.set(this.elements().length - 1);
				event.preventDefault();
				break;
		}
	}

	@MarkUsed()
	protected updateCurrentIndex = effect(() => {
		const currentIndex = this.currentIndex();
		const elements = this.elements();

		elements.forEach((element, index) => {
			if(currentIndex === null && index === 0) {
				element.setAttribute('tabindex', '0');
				element.setAttribute('aria-selected', 'true');
				return;
			}

			if (index === currentIndex) {
				element.setAttribute('tabindex', '0');
				element.setAttribute('aria-selected', 'true');

				element.focus();

				return;
			}
			element.setAttribute('aria-selected', 'false');
			element.setAttribute('tabindex', '-1');
		})
	});


	ngAfterViewInit() {
		setTimeout(() => {
			this.elements.set(Array.from(this.element.querySelectorAll(this.childSelector())))
		})
	}
}
