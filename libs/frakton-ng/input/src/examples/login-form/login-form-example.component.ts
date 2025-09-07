import { Component, computed, inject } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormBuilder, SignalValidators } from 'frakton-ng/forms';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFormComponent } from 'frakton-ng/form';

@Component({
	selector: 'input-login-form-example',
	standalone: true,
	imports: [FktInputComponent, FktButtonComponent, FktFormComponent],
	styleUrl: './login-form-example.component.scss',
	template: `
		<div class="container">
			<h3>Login Form</h3>

			<fkt-form [form]="form">
				<div class="container__form">
					<fkt-input
						[control]="form.controls.email"
						label="Email Address"
						placeholder="Enter your email"
						type="email"
					/>

					<fkt-input
						[control]="form.controls.password"
						label="Password"
						placeholder="Enter your password"
						type="password"
					/>
				</div>
			</fkt-form>

			<div class="container__actions">
				<fkt-button
					[disabled]="form.invalid()"
					text="Log In"
					(click)="onLogin()"
				>
				</fkt-button>

				<div class="container__status">
					<p>Form Status: {{ form.valid() ? '✓ Ready' : '✗ Incomplete' }}</p>
					<p class="container__status-message">{{ getStatusMessage() }}</p>
				</div>
			</div>
		</div>
	`
})
export class LoginFormExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		email: ['', [
			SignalValidators.required(),
			SignalValidators.email()
		]],
		password: ['', [
			SignalValidators.required(),
			SignalValidators.minLength(6)
		]]
	})

	getStatusMessage = computed(() => {
		if (!this.form.controls.email.valid() && this.form.controls.email.touched()) {
			return 'Please enter a valid email address';
		}
		if (!this.form.controls.password.valid() && this.form.controls.password.touched()) {
			return 'Password must be at least 6 characters';
		}
		if (this.form.valid()) {
			return 'Ready to log in';
		}
		return 'Fill in both fields to continue';
	})

	onLogin(): void {
		if (this.form.valid()) return;

		console.log('Login attempt:', this.form.value());
	}
}
