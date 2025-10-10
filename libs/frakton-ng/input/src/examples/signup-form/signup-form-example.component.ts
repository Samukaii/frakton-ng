import { Component, signal } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktButtonComponent } from 'frakton-ng/button';
import { Control, email, form, required, validate } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
	selector: 'input-signup-form-example',
	imports: [FktInputComponent, FktButtonComponent, Control, FktFieldErrorComponent],
	styleUrl: './signup-form-example.component.scss',
	templateUrl: './signup-form-example.component.html'
})
export class SignupFormExampleComponent {
	protected data = signal({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	});

	protected form = form(this.data, path => {
		required(path.name, {message: "Field is required"});

		required(path.email, {message: "Field is required"});
		email(path.email, {message: "E-mail invalid"});

		required(path.password, {message: "Field is required"});

		required(path.passwordConfirmation, {message: "Field is required"});
		validate(path.passwordConfirmation, context => {
			if(context.value() === context.valueOf(path.password))
				return;

			return {
				kind: "password_mismatch",
				field: null as never,
				message: "Passwords do not match"
			}
		})
	})

	onLogin(): void {
		if (this.form().valid()) return;

		console.log('Login attempt:', this.form().value());
	}
}
