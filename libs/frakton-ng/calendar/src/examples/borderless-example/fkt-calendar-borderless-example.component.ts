import { Component, input, model } from '@angular/core';
import { FktCalendarComponent } from 'frakton-ng/calendar';

@Component({
	selector: 'fkt-calendar-borderless-example',
	imports: [FktCalendarComponent],
	templateUrl: './fkt-calendar-borderless-example.component.html',
	styleUrl: './fkt-calendar-borderless-example.component.scss'
})
export class FktCalendarBorderlessExampleComponent {
	currentDate = model(new Date());
	borderless = input(true)
}
