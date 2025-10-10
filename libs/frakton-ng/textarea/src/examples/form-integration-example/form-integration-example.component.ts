import { Component, signal } from '@angular/core';
import { Control, email, form, maxLength, minLength, required } from '@angular/forms/signals';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { FktInputComponent } from 'frakton-ng/input';
import { JsonPipe } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { Generic } from 'frakton-ng/internal/types';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
	selector: 'textarea-form-integration-example',
	imports: [FktTextareaComponent, FktInputComponent, JsonPipe, FktButtonComponent, Control, FktFieldErrorComponent],
	templateUrl: './form-integration-example.component.html',
	styleUrl: './form-integration-example.component.scss'
})
export class FormIntegrationExampleComponent {
	protected data = signal({
		name: '',
		email: '',
		message: '',
		additionalInfo: ''
	});

	protected form = form(this.data, path => {
		required(path.name, {message: "Field is required"});

		required(path.email, {message: "Field is required"});
		email(path.email, {message: "Email is invalid"});

		required(path.message, {message: "Field is required"});
		minLength(path.message, 10,  {message: "Min length is 10"});
		maxLength(path.message, 1000,  {message: "Max length is 1000"});
	});

	submittedData = signal<Generic | null>(null);

	handleSubmit() {
		if (this.form().valid()) {
			const formData = {
				...this.form().value(),
				submittedAt: new Date().toISOString()
			};

			this.submittedData.set(formData);

			console.log('Form submitted:', formData);

			setTimeout(() => {
				this.resetForm();
				this.submittedData.set(null);
			}, 3000);
		}
	}

	resetForm() {
		this.form().reset();
		this.form().value.set({
			name: '',
			email: '',
			message: '',
			additionalInfo: ''
		});
		this.submittedData.set(null);
	}
}
