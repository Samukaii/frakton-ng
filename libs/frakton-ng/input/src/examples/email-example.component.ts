import { Component, input } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-email-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="email"
			/>

			<div class="text-sm text-gray-600">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
				<p>Has &#64; symbol: {{ hasAtSymbol() ? '✓' : '✗' }}</p>
				<p class="text-xs text-gray-500">This input is optimized for email addresses</p>
			</div>
		</div>
	`
})
export class EmailExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Email Address');
	placeholder = input('Enter your email address');

	hasAtSymbol(): boolean {
		const value = this.control().value();
		return value.includes('@');
	}
}
