import { Component, input } from '@angular/core';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';

@Component({
	selector: 'month-mode-example',
	templateUrl: './month-mode-example.component.html',
	styleUrl: './month-mode-example.component.scss',
	imports: [FktCalendarNavigatorComponent]
})
export class ExampleComponent {
	currentDate = input(new Date());
	mode = input<FktCalendarNavigatorMode>('month');
}
