import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { FktButtonComponent } from 'frakton-ng/button';
import { Field, disabled, form } from '@angular/forms/signals';

@Component({
	selector: 'select-disabled-example',
	styleUrl: './disabled-example.component.scss',
	templateUrl: './disabled-example.component.html',
	imports: [FktSelectComponent, FktButtonComponent, Field]
})
export class DisabledExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();

	protected control = form(signal('option2'), path => {
		disabled(path, () => this.disabled());
	});
	protected disabled = signal(true);

	toggleDisabled() {
		this.disabled.update(disabled => !disabled);
		console.log(this.disabled())
	}
}
