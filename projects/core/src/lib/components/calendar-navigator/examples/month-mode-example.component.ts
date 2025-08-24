import { Component, input } from '@angular/core';
import { FktCalendarNavigatorComponent } from '../fkt-calendar-navigator.component';
import { FktCalendarNavigatorMode } from '../fkt-calendar-navigator.types';

@Component({
	selector: 'month-mode-example',
	template: `
		<fkt-calendar-navigator
			[mode]="mode()"
			[currentDate]="currentDate()"
		/>
	`,
	styles: `
		:host {
			display: block;
			margin-bottom: 1rem;
		}
	`,
	standalone: true,
	imports: [FktCalendarNavigatorComponent]
})
export class ExampleComponent {
	currentDate = input(new Date());
	mode = input<FktCalendarNavigatorMode>('month');
}
