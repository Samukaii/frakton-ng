import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';

@Component({
	selector: 'select-validation-example',
	templateUrl: './validation-example.component.html',
	styleUrl: './validation-example.component.scss',
	imports: [FktSelectComponent]
})
export class ValidationExampleComponent {
	control = new SignalFormControl('', {
		validators: [SignalValidators.required()]
	});
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
}
