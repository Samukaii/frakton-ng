import { Component, input, signal } from '@angular/core';
import { FktCheckboxComponent } from '../../fkt-checkbox.component';
import { Control, form, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
	selector: 'fkt-checkbox-validation-example',
	imports: [
		FktCheckboxComponent,
		Control,
		FktFieldErrorComponent
	],
	templateUrl: './fkt-checkbox-validation-example.component.html',
	styleUrl: './fkt-checkbox-validation-example.component.scss'
})
export class FktCheckboxValidationExampleComponent {
	protected data = signal({
		termsAccepted: false,
		newsletterSubscription: false
	});

	protected form = form(this.data, path => {
		required(path.termsAccepted, {message: "You must accept the terms and conditions to continue"});
	});
}
