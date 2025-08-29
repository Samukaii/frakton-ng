import { Component, computed, input, model, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToClassPipe } from '../../../../pipes';
import { compareDates } from '../../../../utils';
import { FktCalendarDateConfig, FktCalendarDateConfigFn } from '../../fkt-calendar.types';

@Component({
	selector: 'fkt-calendar-date-selector',
	imports: [DatePipe, ToClassPipe],
	templateUrl: './calendar-date-selector.component.html',
	styleUrl: './calendar-date-selector.component.scss',
})
export class CalendarDateSelectorComponent {
	headerLess = input(false);
	currentDate = model(new Date());
	configFn = input<FktCalendarDateConfigFn>(() => ({}));
	afterSelect = output();
	yearClick = output();
	monthClick = output();

	protected monthPeriod = computed(() => {
		const currentDate = this.currentDate();

		const startDate = new Date();
		startDate.setHours(0, 0, 0, 0);
		startDate.setMonth(currentDate.getMonth());
		startDate.setDate(1);

		const endDate = new Date();
		endDate.setHours(23, 59, 59, 59);
		endDate.setMonth(currentDate.getMonth() + 1);
		endDate.setDate(0);

		return { startDate, endDate, daysCount: endDate.getDate() };
	});

	protected weekdays = computed(() => {
		const weekdaysCount = 6;

		const weekDays: string[] = [];

		for (let weekday = 0; weekday <= weekdaysCount; weekday++) {
			const now = new Date();
			now.setDate(now.getDate() + now.getDay() + weekday);

			weekDays.push(now.toISOString());
		}

		return weekDays;
	});

	protected days = computed(() => {
		const { daysCount } = this.monthPeriod();
		const today = new Date();

		const list: FktCalendarDateConfig[] = [];

		for (let day = 1; day <= daysCount; day++) {
			const date = new Date(this.currentDate());
			date.setDate(day);
			const isCurrentDate = compareDates(date, this.currentDate()) === 'equal';
			const isToday = compareDates(date, today) === 'equal';

			if (day === 1) {
				const weekdays = date.getDay();

				for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
					const prevMonthDate = new Date(date);
					prevMonthDate.setDate(prevMonthDate.getDate() - weekDay);

					list.unshift({
						date: prevMonthDate.toISOString(),
						classes: ['calendar__date--out-of-range'],
						isCurrentDate: false,
						isToday,
					});
				}
			}

			const { classes = [], onClick } = this.configFn()(date);

			list.push({
				date: date.toISOString(),
				onClick,
				classes,
				isCurrentDate,
				isToday,
			});

			if (day === daysCount) {
				const weekdays = 6 - date.getDay();

				for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
					const nextMonthDate = new Date(date);
					nextMonthDate.setDate(nextMonthDate.getDate() + weekDay);
					list.push({
						date: nextMonthDate.toISOString(),
						classes: ['calendar__date--out-of-range'],
						isCurrentDate: false,
						isToday,
					});
				}
			}
		}

		return list;
	});
}
