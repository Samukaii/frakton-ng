import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'select-default-example',
	templateUrl: './default-example.component.html',
	styleUrl: './default-example.component.scss',
	imports: [FktSelectComponent, Control]
})
export class DefaultExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(false);
	noResults = input<any>();

	protected control = form(signal(''));
}
