import { Component, computed, model } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'fkt-calendar-multi-year-header',
	imports: [FktNavigatorComponent],
	templateUrl: './calendar-multi-year-header.component.html',
	styleUrl: './calendar-multi-year-header.component.scss',
})
export class CalendarMultiYearHeaderComponent {
	currentDate = model(new Date());

	currentDecade = computed(() => {
		const currentDate = this.currentDate();
		const currentYear = currentDate.getFullYear();

		const start = currentYear - (currentYear % 10);
		const end = start + 10;

		return `${start} - ${end}`;
	});

	protected previous() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setFullYear(copy.getFullYear() - 10);

			return copy;
		});
	}

	protected next() {
		this.currentDate.update(date => {
			const copy = new Date(date);
			copy.setFullYear(copy.getFullYear() + 10);

			return copy;
		});
	}
}
