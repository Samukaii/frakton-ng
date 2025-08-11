import { Component, input, linkedSignal, output } from '@angular/core';
import { FktCalendarComponent } from '../../calendar/fkt-calendar.component';
import { FktCalendarDateConfigFn } from '../../calendar';

@Component({
	selector: 'fkt-date-picker-modal',
	imports: [FktCalendarComponent],
	templateUrl: './fkt-date-picker-modal.component.html',
	styleUrl: './fkt-date-picker-modal.component.scss',
})
export class FktDatePickerModalComponent {
	currentDate = input<Date>(new Date());
	select = output<Date>();

	protected internalCurrentDate = linkedSignal(this.currentDate);

	protected dateConfigFn: FktCalendarDateConfigFn = date => {
		return {
			onClick: () => {
				this.internalCurrentDate.set(date);
				this.select.emit(date);
			},
		};
	};
}
