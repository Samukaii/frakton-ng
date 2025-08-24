import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../fkt-input.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalValidators } from '../../../form/validators/signal-validators';

@Component({
	selector: 'input-login-form-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full max-w-md mx-auto space-y-6 p-6 border rounded-lg">
			<h3 class="text-xl font-semibold text-gray-900">Login Form</h3>

			<div class="space-y-4">
				<fkt-input
					[control]="emailControl()"
					label="Email Address"
					placeholder="Enter your email"
					type="email"
				/>

				<fkt-input
					[control]="passwordControl()"
					label="Password"
					placeholder="Enter your password"
					type="password"
				/>
			</div>

			<div class="flex flex-col space-y-3">
				<button
					[disabled]="!canLogin()"
					[class]="canLogin() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400'"
					class="w-full px-4 py-2 text-white rounded font-medium transition"
					(click)="onLogin()"
				>
					Log In
				</button>

				<div class="text-sm text-gray-600">
					<p>Form Status: {{ canLogin() ? '✓ Ready' : '✗ Incomplete' }}</p>
					<p class="text-xs mt-1">{{ getStatusMessage() }}</p>
				</div>
			</div>
		</div>
	`
})
export class LoginFormExampleComponent {
	emailControl = input(new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.email()
		]
	}));

	passwordControl = input(new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.minLength(6)
		]
	}));

	canLogin = computed(() => {
		return this.emailControl().valid() && this.passwordControl().valid();
	});

	getStatusMessage(): string {
		if (!this.emailControl().valid() && this.emailControl().touched()) {
			return 'Please enter a valid email address';
		}
		if (!this.passwordControl().valid() && this.passwordControl().touched()) {
			return 'Password must be at least 6 characters';
		}
		if (this.canLogin()) {
			return 'Ready to log in';
		}
		return 'Fill in both fields to continue';
	}

	onLogin(): void {
		if (this.canLogin()) {
			console.log('Login attempt:', {
				email: this.emailControl().value(),
				password: '[HIDDEN]'
			});
		}
	}
}
