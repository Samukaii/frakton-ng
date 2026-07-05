import { Component, model, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktNavigatorComponent } from 'frakton-ng/navigator';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';

@Component({
	selector: 'fkt-calendar-year-header',
  imports: [DatePipe, FktNavigatorComponent, FktButtonLegacyComponent],
	templateUrl: './calendar-year-header.component.html',
	styleUrl: './calendar-year-header.component.scss',
})
export class CalendarYearHeaderComponent {
	currentDate = model(new Date());
	yearClick = output();

	protected previous() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setFullYear(copy.getFullYear() - 1);

			return copy;
		});
	}

	protected next() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setFullYear(copy.getFullYear() + 1);

			return copy;
		});
	}
}
