import { Component, input } from '@angular/core';
import { FktInputComponent } from '../fkt-input.component';
import { SignalFormControl } from '../../../form/signal-form-control';

@Component({
	selector: 'input-percent-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				transformer="percent"
				type="text"
			/>

			<div class="text-sm text-gray-600">
				<p>Raw value: {{ control().value() || '(empty)' }}</p>
				<p>Formatted display: {{ getFormattedValue() }}</p>
				<p class="text-xs text-gray-500">Automatically formats as percentage (e.g., 45.5%)</p>
			</div>
		</div>
	`
})
export class PercentExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Completion Rate');
	placeholder = input('Enter percentage');

	getFormattedValue(): string {
		const value = this.control().value();
		if (!value || value === '') return '(empty)';
		
		// Simple percentage formatting for display
		const num = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
		return isNaN(num) ? value : `${num}%`;
	}
}
