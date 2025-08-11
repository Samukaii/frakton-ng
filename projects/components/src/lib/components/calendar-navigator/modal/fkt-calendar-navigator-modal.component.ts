import { Component, input, linkedSignal, output } from '@angular/core';
import { CalendarMonthSelectorComponent } from '../../calendar/selector/month/calendar-month-selector.component';
import { CalendarDateSelectorComponent } from '../../calendar/selector/date/calendar-date-selector.component';
import { CalendarYearSelectorComponent } from '../../calendar/selector/year/calendar-year-selector.component';
import { MarkUsed } from '../../../utils/mark-used';
import { outsideClickEffect } from '../../../utils/outside-click-effect';
import {
	CalendarMultiYearHeaderComponent
} from '../../calendar/header/multi-year-header/calendar-multi-year-header.component';
import { FktCalendarStep } from '../../calendar';

@Component({
	selector: 'fkt-calendar-navigator-modal',
	imports: [
		CalendarMonthSelectorComponent,
		CalendarDateSelectorComponent,
		CalendarYearSelectorComponent,
		CalendarMultiYearHeaderComponent,
	],
	templateUrl: './fkt-calendar-navigator-modal.component.html',
	styleUrl: './fkt-calendar-navigator-modal.component.scss',
})
export class FktCalendarNavigatorModalComponent {
	step = input<FktCalendarStep>('date');
	currentDate = input<Date>(new Date());
	close = output();
	select = output<Date>();

	internalDate = linkedSignal(this.currentDate);

	@MarkUsed()
	protected autoClose = outsideClickEffect(() => {
		this.close.emit();
	});

	selectDate($event: Date) {
		this.select.emit($event);
	}
}
