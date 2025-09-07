import { Component, inject, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormBuilder, SignalFormGroupValue, SignalValidators } from 'frakton-ng/forms';
import { JsonPipe } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFormComponent } from 'frakton-ng/form';

@Component({
	selector: 'textarea-form-integration-example',
	imports: [FktTextareaComponent, FktInputComponent, JsonPipe, FktButtonComponent, FktFormComponent],
	templateUrl: './form-integration-example.component.html',
	styleUrl: './form-integration-example.component.scss'
})
export class FormIntegrationExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: ['', SignalValidators.required()],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		message: ['', [
			SignalValidators.required(),
			SignalValidators.minLength(10),
			SignalValidators.maxLength(1000)
		]],
		additionalInfo: ''
	});

	submittedData = signal<SignalFormGroupValue<typeof this.form> | null>(null);

	handleSubmit() {
		if (this.form.valid()) {
			const formData = {
				...this.form.value(),
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
		this.form.reset();
		this.form.markAllAsUntouched();
		this.submittedData.set(null);
	}
}
