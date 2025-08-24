import { Component, input } from '@angular/core';
import { FktInputComponent } from '../fkt-input.component';
import { SignalFormControl } from '../../../form/signal-form-control';

@Component({
	selector: 'input-password-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="password"
			/>

			<div class="text-sm text-gray-600">
				<p>Password length: {{ control().value()?.length || 0 }} characters</p>
				<p>Has value: {{ control().value() ? '✓' : '✗' }}</p>
				<p class="text-xs text-gray-500">Click the eye icon to toggle password visibility</p>
			</div>
		</div>
	`
})
export class PasswordExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Password');
	placeholder = input('Enter your password');
}
