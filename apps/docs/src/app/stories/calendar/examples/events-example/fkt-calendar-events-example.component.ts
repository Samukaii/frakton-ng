import { Component, computed, input, model, signal } from '@angular/core';
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-calendar-events-example',
	imports: [FktCalendarComponent, FktButtonComponent],
	templateUrl: './fkt-calendar-events-example.component.html',
	styleUrl: './fkt-calendar-events-example.component.scss'
})
export class FktCalendarEventsExampleComponent {
	currentDate = model(new Date());
	borderless = input(false);
	eventDates = signal<string[]>([])

	clickHistory = computed(() => {
		const dates = this.eventDates();

		return dates.map(date => {
			return `${new Date().toLocaleTimeString()}: Clicked ${new Date(date).toLocaleDateString()}`
		})
	});

	eventDateConfig = computed<FktCalendarDateConfigFn>(() => {
		const history = this.eventDates();

		return (date) => {
			return {
				onClick: () => this.handleDateClick(date),
				classes: history.includes(date.toISOString()) ? ['has-events'] : []
			};
		}
	});

	private handleDateClick(date: Date): void {
		this.eventDates.update(eventDates => [...eventDates, date.toISOString()]);
	}

	clearHistory(): void {
		this.eventDates.set([]);
	}
}
