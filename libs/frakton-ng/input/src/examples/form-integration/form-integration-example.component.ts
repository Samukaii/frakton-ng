import { Component, computed, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FktInputComponent } from '../../../index';
import { SignalFormBuilder, SignalValidators } from 'frakton-ng/forms';
import { FktFormComponent } from 'frakton-ng/form';


@Component({
	selector: 'input-form-integration-example',
	standalone: true,
	imports: [FktInputComponent, JsonPipe, FktFormComponent],
	styleUrl: './form-integration-example.component.scss',
	template: `
		<div class="container">
			<h3>User Profile Form</h3>

			<fkt-form [form]="form">
				<div class="container__form">
					<fkt-input
						[control]="form.controls.name"
						label="Full Name"
						placeholder="Enter your full name"
						type="text"
					/>

					<fkt-input
						[control]="form.controls.email"
						label="Email Address"
						placeholder="Enter your email"
						type="email"
					/>

					<fkt-input
						[control]="form.controls.age"
						label="Age"
						placeholder="Enter your age"
						type="number"
					/>
				</div>
			</fkt-form>

			<div class="container__info-container">
				<h4>Form Status</h4>
				<div class="container__info">
					<p [class]="formValidClass()">Form Valid: {{ form.valid() ? '✓' : '✗' }}</p>
					<p class="container__info-text">Form Data:</p>
					<pre class="container__info-form-value prismjs">{{ form.value() | json }}</pre>
				</div>
			</div>
		</div>
	`
})
export class FormIntegrationExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: ['', SignalValidators.required()],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		age: [null as unknown as number, [SignalValidators.required(), SignalValidators.min(18), SignalValidators.max(100)]],
	})

	formValidClass = computed(() => {
		return this.form.valid() ? 'container__info--valid' : 'container__info--invalid';
	});
}
