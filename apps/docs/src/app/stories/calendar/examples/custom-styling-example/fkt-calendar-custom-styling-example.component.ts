import { Component, input, model } from '@angular/core';
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';

@Component({
	selector: 'fkt-calendar-custom-styling-example',
	imports: [FktCalendarComponent],
	templateUrl: './fkt-calendar-custom-styling-example.component.html',
	styleUrl: './fkt-calendar-custom-styling-example.component.scss',
})
export class FktCalendarCustomStylingExampleComponent {
	currentDate = model(new Date("2025-12-25T12:00:00.000Z"));
	borderless = input(false);

	customDateConfig: FktCalendarDateConfigFn = (date: Date) => {
		const today = new Date();
		const isWeekend = date.getDay() === 0 || date.getDay() === 6;
		const isHoliday = this.isHoliday(date);
		const isPast = date < today;

		return {
			classes: [
				...(isWeekend ? ['weekend'] : []),
				...(isHoliday ? ['holiday'] : []),
				...(isPast ? ['past'] : [])
			],
			isToday: this.isSameDay(date, today)
		};
	};

	private isHoliday(date: Date): boolean {
		// Example holidays (Christmas, New Year)
		const month = date.getMonth();
		const day = date.getDate();
		return (month === 11 && day === 25) || (month === 0 && day === 1);
	}

	private isSameDay(date1: Date, date2: Date): boolean {
		return date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear();
	}
}
