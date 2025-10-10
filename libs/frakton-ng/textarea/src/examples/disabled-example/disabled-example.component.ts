import { Component, input, linkedSignal, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { FktButtonComponent } from 'frakton-ng/button';
import { Control, disabled, form } from '@angular/forms/signals';

@Component({
	selector: 'textarea-disabled-example',
	imports: [FktTextareaComponent, FktButtonComponent, Control],
	templateUrl: './disabled-example.component.html',
	styleUrl: './disabled-example.component.scss'
})
export class DisabledExampleComponent {
	label = input('Terms and Conditions');
	placeholder = input('Content will appear here...');
	initialDisabled = input(true);

	disabled = linkedSignal(this.initialDisabled);

	private value = signal(`
This is a sample legal text that cannot be edited by the user.
By using our service, you agree to these terms and conditions. This text field is disabled to prevent modifications to the legal agreement.
The disabled state is useful for displaying read-only content while maintaining the form field structure.`.trim()
	);

	protected control = form(this.value, path => {
		disabled(path, () => this.disabled());
	})

	protected toggleDisabled() {
		this.disabled.update(disabled => !disabled);
	}
}
