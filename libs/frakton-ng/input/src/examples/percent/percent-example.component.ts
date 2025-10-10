import { Component, computed, input, signal } from '@angular/core';
import { Control, form } from '@angular/forms/signals';
import { FktInputComponent } from 'frakton-ng/input';

@Component({
	selector: 'input-percent-example',
	imports: [FktInputComponent, Control],
	styleUrl: './percent-example.component.scss',
	templateUrl: './percent-example.component.html'
})
export class PercentExampleComponent {
	control = form(signal(''));
	label = input('Completion Rate');
	placeholder = input('Enter percentage');

	getFormattedValue = computed(() => {
		const value = this.control().value();
		if (!value || value === '') return '(empty)';

		const num = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
		return isNaN(num) ? value : `${num}%`;
	});
}
