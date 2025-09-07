import { Component, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';
import { SignalFormBuilder } from 'frakton-ng/forms';

@Component({
	selector: 'form-integration-example',
	template: `
		<div class="navigator">
			<fkt-calendar-navigator
				[mode]="mode()"
				[currentDate]="currentDate()"
			/>
		</div>
		<div class="info">
			Selected: {{ dateForm.controls.selectedDate.value() | date:'fullDate' }}
		</div>
	`,
	styleUrl: './form-integration-example.component.scss',
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
