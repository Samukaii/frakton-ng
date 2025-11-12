import { Component, input, model } from '@angular/core';
import { FktCalendarComponent } from 'frakton-ng/calendar';

@Component({
	selector: 'fkt-calendar-basic-example',
	imports: [FktCalendarComponent],
	templateUrl: './fkt-calendar-basic-example.component.html',
	styleUrl: './fkt-calendar-basic-example.component.scss'
})
export class FktCalendarBasicExampleComponent {
	currentDate = model(new Date());
	borderless = input(false);
}
