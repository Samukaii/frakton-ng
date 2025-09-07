import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-percent-example',
	imports: [FktInputComponent],
	styleUrl: './percent-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				transformer="percent"
				type="text"
			/>

			<div class="container__info">
				<p>Raw value: {{ control().value() || '(empty)' }}</p>
				<p>Formatted display: {{ getFormattedValue() }}</p>
				<p class="container__text">Automatically formats as percentage (e.g., 45.5%)</p>
			</div>
		</div>
	`
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
