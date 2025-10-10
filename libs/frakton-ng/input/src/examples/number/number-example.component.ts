import { Component, computed, input, signal } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktIconComponent } from 'frakton-ng/icon';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'input-number-example',
	imports: [FktInputComponent, FktIconComponent, Control],
	styleUrl: './number-example.component.scss',
	templateUrl: './number-example.component.html'
})
export class NumberExampleComponent {
	control = form(signal(''));
	label = input('Age');
	placeholder = input('Enter your age');

	isNumeric = computed(() => {
		const value = this.control().value();
		return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));
	})
}
