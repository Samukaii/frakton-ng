import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-currency-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				transformer="currency"
				type="text"
			/>

			<div class="text-sm text-gray-600">
				<p>Raw value: {{ control().value() || '(empty)' }}</p>
				<p>Formatted display: {{ formattedValue() }}</p>
				<p class="text-xs text-gray-500">Automatically formats as currency (e.g., $1,234.56)</p>
			</div>
		</div>
	`
})
export class CurrencyExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Product Price');
	placeholder = input('0.00');

	formattedValue = computed(() => {
		const value = this.control().viewValue();
		if (!value || value === '') return '(empty)';

		return value;
	});
}
