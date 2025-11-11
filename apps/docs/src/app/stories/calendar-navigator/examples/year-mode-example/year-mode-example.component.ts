import { Component, input } from '@angular/core';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';

@Component({
	selector: 'year-mode-example',
	templateUrl: './year-mode-example.component.html',
	styleUrl: './year-mode-example.component.scss',
	imports: [FktCalendarNavigatorComponent]
})
export class YearModeExampleComponent {
	currentDate = input(new Date());
	mode = input<FktCalendarNavigatorMode>('month');
}
