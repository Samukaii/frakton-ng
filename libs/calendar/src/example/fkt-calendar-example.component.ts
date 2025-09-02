import { Component, input, model } from '@angular/core';
import { FktCalendarComponent, FktCalendarDateConfigFn } from '@frakton-ng/calendar';

@Component({
	selector: 'fkt-calendar-example',
	imports: [
		FktCalendarComponent
	],
	templateUrl: './fkt-calendar-example.component.html',
	styleUrl: './fkt-calendar-example.component.scss'
})
export class FktCalendarExampleComponent {
	configFn = input<FktCalendarDateConfigFn>(() => ({}));
	currentDate = model(new Date());
	borderless = input(false);
}
