import { Component, computed, input, model, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktCalendarDateConfigFn } from '../../fkt-calendar.types';

@Component({
	selector: 'fkt-calendar-year-selector',
	imports: [DatePipe],
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

	selectYear(selectedDate: Date) {
		this.currentDate.update(date => {
			const currentDate = new Date(date);
			currentDate.setFullYear(selectedDate.getFullYear());

			return currentDate;
		});

		this.back.emit();
	}
}
