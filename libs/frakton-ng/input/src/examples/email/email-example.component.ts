import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-email-example',
	standalone: true,
	imports: [FktInputComponent],
	styleUrl: './email-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="email"
			/>

			<div class="container__info">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
				<p>Has &#64; symbol: {{ hasAtSymbol() ? '✓' : '✗' }}</p>
				<p class="container__text">This input is optimized for email addresses</p>
			</div>
		</div>
	`
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
