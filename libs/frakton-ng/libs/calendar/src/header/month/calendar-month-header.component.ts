import { Component, model, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktNavigatorComponent } from '@frakton-ng/navigator';

@Component({
	selector: 'fkt-calendar-month-header',
	imports: [DatePipe, FktNavigatorComponent],
	templateUrl: './calendar-month-header.component.html',
	styleUrl: './calendar-month-header.component.scss',
})
export class CalendarMonthHeaderComponent {
	currentDate = model(new Date());
	yearClick = output();
	monthClick = output();

	protected previous() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setMonth(copy.getMonth() - 1);

			return copy;
		});
	}

	protected next() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setMonth(copy.getMonth() + 1);

			return copy;
		});
	}
}
