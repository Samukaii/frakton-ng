import { Component, input, OnInit } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'textarea-disabled-example',
	imports: [FktTextareaComponent, FktButtonComponent],
	templateUrl: './disabled-example.component.html',
	styleUrl: './disabled-example.component.scss'
})
export class DisabledExampleComponent implements OnInit {
	label = input('Terms and Conditions');
	placeholder = input('Content will appear here...');
	initialDisabled = input(true);

	control = new SignalFormControl(`
This is a sample legal text that cannot be edited by the user.
By using our service, you agree to these terms and conditions. This text field is disabled to prevent modifications to the legal agreement.
The disabled state is useful for displaying read-only content while maintaining the form field structure.`.trim()
	);

	ngOnInit() {
		this.control.disable();
	}

	toggleDisabled() {
		if (this.control.disabled()) {
			this.control.enable();
		} else {
			this.control.disable();
		}
	}
}
