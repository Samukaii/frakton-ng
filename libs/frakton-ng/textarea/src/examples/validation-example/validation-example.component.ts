import { Component, computed, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-validation-example',
	imports: [FktTextareaComponent],
	templateUrl: './validation-example.component.html',
	styleUrl: './validation-example.component.scss'
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
