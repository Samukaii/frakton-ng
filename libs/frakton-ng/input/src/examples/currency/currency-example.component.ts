import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-currency-example',
	standalone: true,
	imports: [FktInputComponent],
	styleUrl: './currency-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				transformer="currency"
				type="text"
			/>

			<div class="container__info">
				<p>Raw value: {{ control().value() || '(empty)' }}</p>
				<p>Formatted display: {{ formattedValue() }}</p>
				<p class="container__text">Automatically formats as currency (e.g., $1,234.56)</p>
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
