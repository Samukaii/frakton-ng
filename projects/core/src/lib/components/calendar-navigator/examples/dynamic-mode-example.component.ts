import { Component, input, linkedSignal } from '@angular/core';
import { FktCalendarNavigatorComponent } from '../fkt-calendar-navigator.component';
import { DatePipe } from '@angular/common';
import { FktButtonComponent } from '../../button';
import { FktBadgeComponent } from '../../badge';
import { FktCalendarNavigatorMode } from '../fkt-calendar-navigator.types';

@Component({
	selector: 'dynamic-mode-example',
	template: `
		<div class="space-y-4">
			<fkt-calendar-navigator
				[mode]="internalMode()"
				[currentDate]="internalDate()"
			/>

			<div class="flex c-w-full justify-between items-center mt-2 pt-2 border-t border-gray-200 text-gray-600">
				<div class="justify-start">
					<fkt-badge
						text="Mode: {{internalMode()}}"
						color="blue">

					</fkt-badge>
				</div>

				<strong class="text-gray-600 text-center font-semibold">
					Selected: {{ internalDate() | date:'fullDate' }}
				</strong>

				<div class="flex justify-end gap-2">
					<fkt-button
						(click)="toggleMode()"
						theme="stroked"
						text="Switch to {{ internalMode() === 'month' ? 'Year' : 'Month' }} mode"
					>

					</fkt-button>

					<fkt-button
						(click)="goToToday()"
						text="Today"
					>
					</fkt-button>
				</div>
			</div>
		</div>
	`,
	styles: `
		:host {
			display: block;
			margin-bottom: 1rem;
		}
	`,
	standalone: true,
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
