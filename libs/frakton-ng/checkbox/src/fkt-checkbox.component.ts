import { Component, input, model } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
	selector: 'fkt-checkbox',
	imports: [ReactiveFormsModule],
	templateUrl: './fkt-checkbox.component.html',
	styleUrl: './fkt-checkbox.component.scss',
})
export class FktCheckboxComponent implements FormCheckboxControl {
	checked = model(false);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	label = input('');
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	protected onChange($event: Event) {
		const target = $event.target as HTMLInputElement;

		this.checked.set(target.checked);
		this.touched.set(true);
	}
}
