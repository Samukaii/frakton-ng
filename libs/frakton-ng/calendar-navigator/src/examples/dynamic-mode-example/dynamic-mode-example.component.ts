import { Component, input, linkedSignal } from '@angular/core';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';
import { DatePipe } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktBadgeComponent } from 'frakton-ng/badge';

@Component({
	selector: 'dynamic-mode-example',
	templateUrl: './dynamic-mode-example.component.html',
	styleUrl: './dynamic-mode-example.component.scss',
	imports: [FktCalendarNavigatorComponent, DatePipe, FktButtonComponent, FktBadgeComponent]
})
export class ExampleComponent {
	protected currentDate = input(new Date());
	protected mode = input<FktCalendarNavigatorMode>('month');

	protected internalMode = linkedSignal(this.mode);
	protected internalDate = linkedSignal(this.currentDate);

	protected toggleMode() {
		this.internalMode.update(currentMode => currentMode === 'month' ? 'year' : 'month');
	}

	protected goToToday() {
		this.internalDate.set(new Date());
	}
}
