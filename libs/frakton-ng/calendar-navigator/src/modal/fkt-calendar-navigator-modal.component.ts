import { Component, input, linkedSignal, output } from '@angular/core';
import { MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';
import {
	CalendarDateSelectorComponent,
	CalendarMonthSelectorComponent,
	CalendarMultiYearHeaderComponent,
	CalendarYearSelectorComponent,
	FktCalendarStep
} from 'frakton-ng/calendar';

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
