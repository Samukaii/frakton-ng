import { Component, computed, input, model, output, signal, viewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktCalendarDateConfigFn } from '../../fkt-calendar.types';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-calendar-year-selector',
  imports: [DatePipe, FktButtonComponent],
	templateUrl: './calendar-year-selector.component.html',
	styleUrl: './calendar-year-selector.component.scss',
})
export class CalendarYearSelectorComponent {
	headerLess = input(false);
	currentDate = model(new Date());
	configFn = input<FktCalendarDateConfigFn>(() => ({}));
	back = output();

	years = computed(() => {
		const currentDate = this.currentDate();
		const currentYear = currentDate.getFullYear();

		const start = currentYear - (currentYear % 10);
		const end = start + 10;

		const allYears: Date[] = [];

		for (let year = start; year <= end; year++) {
			const date = new Date();
			date.setFullYear(year);

			allYears.push(date);
		}

		return allYears;
	});

	private colCount = 3;

	focusedIndex = signal(0);

	protected monthButtons = viewChildren(FktButtonComponent);

	protected get selectedIndex() {
		return this.currentDate().getMonth();
	}

	selectYear(selectedDate: Date) {
		this.currentDate.update(date => {
			const currentDate = new Date(date);
			currentDate.setFullYear(selectedDate.getFullYear());

			return currentDate;
		});

		this.back.emit();
	}

	protected onGridKeydown(event: KeyboardEvent) {
		const total = this.years().length;
		let nextIndex = this.focusedIndex();

		switch (event.key) {
			case 'ArrowLeft':
				nextIndex = (this.focusedIndex() % this.colCount === 0)
					? Math.min(total - 1, this.focusedIndex() + this.colCount - 1)
					: this.focusedIndex() - 1;
				break;
			case 'ArrowRight':
				nextIndex = (this.focusedIndex() % this.colCount === this.colCount - 1 || this.focusedIndex() === total - 1)
					? this.focusedIndex() - (this.colCount - 1) >= 0 ? this.focusedIndex() - (this.colCount - 1) : 0
					: this.focusedIndex() + 1;
				if (nextIndex >= total) nextIndex = this.focusedIndex() - (this.colCount - 1);
				break;
			case 'ArrowUp':
				nextIndex = this.focusedIndex() - this.colCount;
				if (nextIndex < 0) {
					const lastRow = Math.floor((total - 1) / this.colCount) * this.colCount;
					const col = this.focusedIndex() % this.colCount;
					nextIndex = lastRow + col;
					if (nextIndex >= total) nextIndex = total - 1;
				}
				break;
			case 'ArrowDown':
				nextIndex = this.focusedIndex() + this.colCount;
				if (nextIndex >= total) {
					nextIndex = this.focusedIndex() % this.colCount;
				}
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = total - 1;
				break;
			case 'Enter':
			case ' ':
			case 'Spacebar':
				this.selectYear(this.years()[this.focusedIndex()]);
				event.preventDefault();
				return;
			default:
				return;
		}

		this.focusedIndex.set(nextIndex);
		setTimeout(() => {
			const buttons = this.monthButtons();
			buttons[nextIndex]?.focus();
		}, 0);
	}
}
