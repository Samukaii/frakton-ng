import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-percent-example',
	imports: [FktInputComponent],
	styleUrl: './percent-example.component.scss',
	templateUrl: './percent-example.component.html'
})
export class PercentExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Completion Rate');
	placeholder = input('Enter percentage');

	getFormattedValue = computed(() => {
		const value = this.control().value();
		if (!value || value === '') return '(empty)';

		const num = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
		return isNaN(num) ? value : `${num}%`;
	});
}
