import { Component, input, model, signal } from '@angular/core';
import { CalendarDateSelectorComponent } from './selector/date/calendar-date-selector.component';
import { CalendarMonthSelectorComponent } from './selector/month/calendar-month-selector.component';
import { CalendarYearSelectorComponent } from './selector/year/calendar-year-selector.component';
import { CalendarYearHeaderComponent } from './header/year/calendar-year-header.component';
import { CalendarMonthHeaderComponent } from './header/month/calendar-month-header.component';
import { CalendarMultiYearHeaderComponent } from './header/multi-year-header/calendar-multi-year-header.component';
import { FktCalendarDateConfigFn, FktCalendarStep } from './fkt-calendar.types';

@Component({
	selector: 'fkt-calendar',
	imports: [
		CalendarDateSelectorComponent,
		CalendarMonthSelectorComponent,
		CalendarYearSelectorComponent,
		CalendarYearHeaderComponent,
		CalendarMonthHeaderComponent,
		CalendarMultiYearHeaderComponent,
	],
	templateUrl: './fkt-calendar.component.html',
	styleUrl: './fkt-calendar.component.scss',
	host: {
		'[class.with-border]': '!borderless()',
	},
})
export class FktCalendarComponent {
	configFn = input<FktCalendarDateConfigFn>(() => ({}));
	currentDate = model(new Date());
	borderless = input(false);

	protected step = signal<FktCalendarStep>('date');
	private lastStep = this.step();

	protected selectStep(step: FktCalendarStep) {
		this.lastStep = this.step();
		this.step.set(step);
	}

	protected goBackToLastStep() {
		if (this.lastStep === 'year') this.selectStep('date');
		else this.selectStep(this.lastStep);
	}
}
