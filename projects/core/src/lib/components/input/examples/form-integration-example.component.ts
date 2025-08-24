import { Component, input, computed } from '@angular/core';
import { FktInputComponent } from '../fkt-input.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalValidators } from '../../../form/validators/signal-validators';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'input-form-integration-example',
	standalone: true,
	imports: [FktInputComponent, JsonPipe],
	template: `
		<div class="w-full space-y-6">
			<h3 class="text-lg font-medium text-gray-900">User Profile Form</h3>
			
			<div class="space-y-4">
				<fkt-input
					[control]="nameControl()"
					label="Full Name"
					placeholder="Enter your full name"
					type="text"
				/>

				<fkt-input
					[control]="emailControl()"
					label="Email Address"
					placeholder="Enter your email"
					type="email"
				/>

				<fkt-input
					[control]="ageControl()"
					label="Age"
					placeholder="Enter your age"
					type="number"
				/>
			</div>

			<div class="border-t pt-4">
				<h4 class="text-md font-medium text-gray-800 mb-2">Form Status</h4>
				<div class="text-sm space-y-1">
					<p [class]="formValidClass()">Form Valid: {{ isFormValid() ? '✓' : '✗' }}</p>
					<p class="text-gray-600">Form Data:</p>
					<pre class="bg-gray-100 p-2 rounded text-xs">{{ getFormData() | json }}</pre>
				</div>
			</div>
		</div>
	`
})
export class FormIntegrationExampleComponent {
	nameControl = input(new SignalFormControl('', {
		validators: [SignalValidators.required()]
	}));
	
	emailControl = input(new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.email()
		]
	}));
	
	ageControl = input(new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.min(18),
			SignalValidators.max(100)
		]
	}));

	isFormValid = computed(() => {
		return this.nameControl().valid() && 
			   this.emailControl().valid() && 
			   this.ageControl().valid();
	});

	formValidClass = computed(() => {
		return this.isFormValid() ? 'text-green-600' : 'text-red-600';
	});

	getFormData() {
		return {
			name: this.nameControl().value(),
			email: this.emailControl().value(),
			age: this.ageControl().value()
		};
	}
}
