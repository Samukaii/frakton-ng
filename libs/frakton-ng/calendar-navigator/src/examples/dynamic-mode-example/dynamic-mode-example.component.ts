import { Component, input, linkedSignal } from '@angular/core';
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';
import { DatePipe } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktBadgeComponent } from 'frakton-ng/badge';

@Component({
	selector: 'dynamic-mode-example',
	template: `
		<div class="container">
			<fkt-calendar-navigator
				[mode]="internalMode()"
				[currentDate]="internalDate()"
			/>

			<div class="container__info">
				<div>
					<fkt-badge
						text="Mode: {{internalMode()}}"
						color="blue">

					</fkt-badge>
				</div>

				<strong class="container__info-selected">
					Selected: {{ internalDate() | date:'fullDate' }}
				</strong>
			</div>

			<div class="container__actions">
				<fkt-button
					(click)="goToToday()"
					text="Today"
				>
				</fkt-button>

				<fkt-button
					(click)="toggleMode()"
					theme="stroked"
					text="Switch to {{ internalMode() === 'month' ? 'Year' : 'Month' }} mode"
				>
				</fkt-button>
			</div>
		</div>
	`,
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
