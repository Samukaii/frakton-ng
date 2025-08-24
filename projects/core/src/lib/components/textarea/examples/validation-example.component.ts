import { Component, computed, input } from '@angular/core';
import { FktTextareaComponent } from '../fkt-textarea.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalValidators } from '../../../form/validators/signal-validators';

@Component({
	selector: 'textarea-validation-example',
	standalone: true,
	imports: [FktTextareaComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-textarea
				[control]="control"
				[label]="label()"
				[placeholder]="placeholder()"
			/>

			<div class="space-y-2">
				<div class="text-sm">
					<span class="font-medium">Status:</span>
					<span [class.text-green-600]="control.valid()"
					      [class.text-red-600]="control.invalid() && control.touched()">
						{{ control.valid() ? 'Valid' : 'Invalid' }}
					</span>
				</div>

				<div class="text-sm text-gray-600">
					<p>Character count: {{ characterCount() }}/{{ maxLength() }}</p>
					<p>Required minimum: {{ minLength() }} characters</p>
				</div>

				@if (control.errors() && control.touched()) {
					<div class="text-sm text-red-600">
						@if (control.errors()?.['required']) {
							<p>This field is required</p>
						}
						@if (control.errors()?.['minlength']) {
							<p>Minimum {{ minLength() }} characters required (current: {{ characterCount() }})</p>
						}
						@if (control.errors()?.['maxlength']) {
							<p>Maximum {{ maxLength() }} characters allowed (current: {{ characterCount() }})</p>
						}
					</div>
				}
			</div>
		</div>
	`
})
export class ValidationExampleComponent {
	minLength = input(20);
	maxLength = input(500);
	label = input('Bio');
	placeholder = input('Tell us about yourself...');

	control = new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.minLength(this.minLength()),
			SignalValidators.maxLength(this.maxLength())
		]
	});

	characterCount = computed(() => {
		return this.control.value()?.length || 0;
	});
}
