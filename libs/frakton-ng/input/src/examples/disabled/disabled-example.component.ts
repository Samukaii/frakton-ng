import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FktButtonComponent } from 'frakton-ng/button';
import { applyWhen, Control, disabled, form } from '@angular/forms/signals';

@Component({
	selector: 'input-disabled-example',
	imports: [FktInputComponent, FktBadgeComponent, FktButtonComponent, Control],
	styleUrl: './disabled-example.component.scss',
	templateUrl: './disabled-example.component.html'
})
export class DisabledExampleComponent {
	control = form(signal('This field is disabled'), (path) => {
		applyWhen(path, () => this.disabled(),
			(path) => {
				disabled(path)
			})
	});
	label = input('Disabled Field');
	placeholder = input('This field is disabled');
	disabled = signal(true);


	protected toggleField() {
		this.disabled.update(disabled => !disabled);
	}
}
