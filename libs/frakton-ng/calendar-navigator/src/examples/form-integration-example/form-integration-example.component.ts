import { Component, input, linkedSignal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';
import { form } from '@angular/forms/signals';

@Component({
	selector: 'form-integration-example',
	templateUrl: './form-integration-example.component.html',
	styleUrl: './form-integration-example.component.scss',
	imports: [FktCalendarNavigatorComponent, DatePipe]
})
export class ExampleComponent {
	currentDate = input(new Date());
	mode = input<FktCalendarNavigatorMode>('month');

	private value = linkedSignal(() => {
		return {
			selectedDate: this.currentDate()
		}
	})

	protected dateForm = form(this.value)
}
