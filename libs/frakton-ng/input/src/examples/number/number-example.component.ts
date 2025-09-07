import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-number-example',
	imports: [FktInputComponent, FktIconComponent],
	styleUrl: './number-example.component.scss',
	templateUrl: './number-example.component.html'
})
export class NumberExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Age');
	placeholder = input('Enter your age');

	isNumeric = computed(() => {
		const value = this.control().value();
		return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));
	})
}
