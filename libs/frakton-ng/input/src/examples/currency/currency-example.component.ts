import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-currency-example',
	imports: [FktInputComponent],
	styleUrl: './currency-example.component.scss',
	templateUrl: './currency-example.component.html'
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
