import { Component, input } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-hour-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				transformer="hour"
				type="text"
			/>

			<div class="text-sm text-gray-600">
				<p>Raw value: {{ control().value() || '(empty)' }}</p>
				<p>Formatted display: {{ getFormattedValue() }}</p>
				<p class="text-xs text-gray-500">Automatically formats as time duration (e.g., 8h 30m)</p>
			</div>
		</div>
	`
})
export class HourExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Work Duration');
	placeholder = input('Enter time duration');

	getFormattedValue(): string {
		const value = this.control().value();
		if (!value || value === '') return '(empty)';

		// Simple hour formatting for display
		const num = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
		if (isNaN(num)) return value;

		const hours = Math.floor(num);
		const minutes = Math.round((num - hours) * 60);

		if (hours === 0 && minutes === 0) return '0h';
		if (minutes === 0) return `${hours}h`;
		if (hours === 0) return `${minutes}m`;

		return `${hours}h ${minutes}m`;
	}
}
