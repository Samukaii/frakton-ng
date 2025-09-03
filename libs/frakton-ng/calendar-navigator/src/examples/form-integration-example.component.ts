import { Component, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';
import { SignalFormBuilder } from 'frakton-ng/forms';

@Component({
	selector: 'form-integration-example',
	template: `
		<div class="border-b pb-2 mb-2 border-gray-200">
			<fkt-calendar-navigator
				[mode]="mode()"
				[currentDate]="currentDate()"
			/>
		</div>
		<div class="text-gray-600 text-center font-semibold">
			Selected: {{ dateForm.controls.selectedDate.value() | date:'fullDate' }}
		</div>
	`,
	styles: `
		:host {
			display: block;
			margin-bottom: 1rem;
		}
	`,
	standalone: true,
	imports: [FktCalendarNavigatorComponent, DatePipe]
})
export class ExampleComponent {
	currentDate = input(new Date());
	mode = input<FktCalendarNavigatorMode>('month');

	private fb = inject(SignalFormBuilder);

	protected dateForm = this.fb.group({
		selectedDate: [new Date()]
	});

	updateFormDate = effect(() => {
		this.dateForm.patchValue({
			selectedDate: this.currentDate()
		});
	});
}
