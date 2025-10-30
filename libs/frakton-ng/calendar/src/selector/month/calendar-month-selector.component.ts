import { Component, input, model, output, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { allMonths } from '../../static/all-months';
import { FktCalendarDateConfigFn } from '../../fkt-calendar.types';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-calendar-month-selector',
  imports: [DatePipe, FktButtonComponent],
	templateUrl: './calendar-month-selector.component.html',
	styleUrl: './calendar-month-selector.component.scss',
})
export class CalendarMonthSelectorComponent {
	headerLess = input(false);
	currentDate = model(new Date());
	configFn = input<FktCalendarDateConfigFn>(() => ({}));
	back = output();
	yearClick = output();

	protected months = allMonths.map(month => {
		const date = new Date();
		date.setMonth(month.value);

		return date;
	});

	selectMonth(selectedDate: Date) {
		this.currentDate.update(date => {
			const currentDate = new Date(date);
			currentDate.setMonth(selectedDate.getMonth());

			return currentDate;
		});

		this.back.emit();
	}
}
