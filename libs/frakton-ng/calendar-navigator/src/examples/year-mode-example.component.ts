import { Component, input } from '@angular/core';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';

@Component({
	selector: 'year-mode-example',
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
