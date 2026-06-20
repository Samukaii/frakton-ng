import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { FormField, form } from '@angular/forms/signals';

@Component({
	selector: 'select-loading-example',
	templateUrl: './loading-example.component.html',
	styleUrl: './loading-example.component.scss',
	imports: [FktSelectComponent, FormField]
})
export class LoadingExampleComponent {
	label = input.required<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(true);

	protected control = form(signal(''));
}
