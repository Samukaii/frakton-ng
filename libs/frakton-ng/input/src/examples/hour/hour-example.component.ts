import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-hour-example',
	imports: [FktInputComponent],
	styleUrl: './hour-example.component.scss',
	templateUrl: './hour-example.component.html'
})
export class HourExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Work Duration');
	placeholder = input('Enter time duration');

	getFormattedValue = computed(() => {
		const value = this.control().value();
		if (!value || value === '') return '(empty)';

		const num = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
		if (isNaN(num)) return value;

		const hours = Math.floor(num);
		const minutes = Math.round((num - hours) * 60);

		if (hours === 0 && minutes === 0) return '0h';
		if (minutes === 0) return `${hours}h`;
		if (hours === 0) return `${minutes}m`;

		return `${hours}h ${minutes}m`;
	});
}
