import { Component, input, model } from '@angular/core';
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';

@Component({
	selector: 'fkt-calendar-disabled-dates-example',
	imports: [FktCalendarComponent],
	templateUrl: './fkt-calendar-disabled-dates-example.component.html',
	styleUrl: './fkt-calendar-disabled-dates-example.component.scss'
})
export class FktCalendarDisabledDatesExampleComponent {
	currentDate = model(new Date());
	borderless = input(false);

	disabledDateConfig: FktCalendarDateConfigFn = (date: Date) => {
		const today = new Date();
		const isPast = date < today;
		const isWeekend = date.getDay() === 0 || date.getDay() === 6;
		const isBlackedOut = this.isBlackedOutDate(date);

		const isDisabled = isPast || isWeekend || isBlackedOut;

		return {
			classes: [
				...(isPast ? ['past-date'] : []),
				...(isWeekend ? ['weekend-disabled'] : []),
				...(isBlackedOut ? ['blacked-out'] : []),
				...(isDisabled ? ['disabled'] : [])
			],
			onClick: isDisabled ? undefined : () => {
				console.log('Date selected:', date);
			}
		};
	};

	private isBlackedOutDate(date: Date): boolean {
		// Example: Block out specific date ranges (e.g., maintenance periods)
		const month = date.getMonth();
		const day = date.getDate();

		// Block December 24-26 (holiday period)
		if (month === 11 && day >= 24 && day <= 26) {
			return true;
		}

		// Block every 15th of the month (maintenance day)
		if (day === 15) {
			return true;
		}

		return false;
	}
}
