import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-email-example',
	imports: [FktInputComponent],
	styleUrl: './email-example.component.scss',
	templateUrl: './email-example.component.html'
})
export class EmailExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Email Address');
	placeholder = input('Enter your email address');

	hasAtSymbol = computed(() => {
		const value = this.control().value();
		return value.includes('@');
	});
}
