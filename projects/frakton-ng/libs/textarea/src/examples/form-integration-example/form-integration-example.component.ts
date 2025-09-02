import { Component, inject, signal } from '@angular/core';
import { FktTextareaComponent } from '@frakton-ng/textarea';
import { FktInputComponent } from '@frakton-ng/input';
import { SignalFormBuilder, SignalValidators } from '@frakton-ng/forms';
import { JsonPipe } from '@angular/common';
import { FktButtonComponent } from '@frakton-ng/button';

@Component({
	selector: 'textarea-form-integration-example',
	standalone: true,
	imports: [FktTextareaComponent, FktInputComponent, JsonPipe, FktButtonComponent],
	template: `
		<div class="w-full space-y-4">
			<h3 class="text-lg font-semibold">Contact Form</h3>

			<form (submit)="handleSubmit($event)" class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<fkt-input
						[control]="form.controls.name"
						[label]="'Name'"
						[placeholder]="'Your name'"
						[type]="'text'"
					/>

					<fkt-input
						[control]="form.controls.email"
						[label]="'Email'"
						[placeholder]="'your@email.com'"
						[type]="'email'"
					/>
				</div>

				<fkt-textarea
					[control]="form.controls.message"
					[label]="'Message'"
					[placeholder]="'Please describe your inquiry in detail...'"
				/>

				<fkt-textarea
					[control]="form.controls.additionalInfo"
					[label]="'Additional Information (Optional)'"
					[placeholder]="'Any other details you would like to share...'"
				/>

				<div class="flex justify-between items-center">
					<div class="text-sm text-gray-600">
						<span [class.text-green-600]="form.valid()">
							{{ form.valid() ? '✓ Form is valid' : 'Please fill all required fields' }}
						</span>
					</div>

					<div class="flex gap-2">
						<fkt-button
							(click)="resetForm()"
							text="Reset"
							theme="stroked"
						>
						</fkt-button>
						<fkt-button
							type="submit"
							text="Submit"
							[disabled]="!form.valid()"
						>
						</fkt-button>
					</div>
				</div>
			</form>

			@if (submittedData()) {
				<div class="mt-4 p-4 bg-green-50 border border-green-200 rounded">
					<h4 class="font-medium text-green-800">Form Submitted Successfully!</h4>
					<pre class="mt-2 text-sm text-gray-700">{{ submittedData() | json }}</pre>
				</div>
			}
		</div>
	`,
	styleUrl: './form-integration-example.component.scss'
})
export class FormIntegrationExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: ['', [SignalValidators.required()]],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		message: ['', [
			SignalValidators.required(),
			SignalValidators.minLength(10),
			SignalValidators.maxLength(1000)
		]],
		additionalInfo: ''
	});

	submittedData = signal<any>(null);

	handleSubmit(event: Event) {
		event.preventDefault();

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
		this.submittedData.set(null);
	}
}
