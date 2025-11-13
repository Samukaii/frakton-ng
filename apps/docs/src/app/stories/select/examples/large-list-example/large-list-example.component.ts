import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'select-large-list-example',
	templateUrl: './large-list-example.component.html',
	styleUrl: './large-list-example.component.scss',
	imports: [FktSelectComponent, Field]
})
export class LargeListExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();

	protected control = form(signal(''));
}
