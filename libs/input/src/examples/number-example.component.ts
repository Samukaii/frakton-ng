import { Component, input } from '@angular/core';
import { FktInputComponent } from '@frakton-ng/input';
import { SignalFormControl } from '@frakton-ng/forms';

@Component({
	selector: 'input-number-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="number"
			/>

			<div class="text-sm text-gray-600">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
				<p>Is numeric: {{ isNumeric() ? '✓' : '✗' }}</p>
				<p class="text-xs text-gray-500">This input accepts only numeric values</p>
			</div>
		</div>
	`
})
export class NumberExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Age');
	placeholder = input('Enter your age');

	isNumeric(): boolean {
		const value = this.control().value();
		return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));
	}
}
