import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { FktNoResults } from 'frakton-ng/no-results';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'select-empty-state-example',
	templateUrl: './empty-state-example.component.html',
	styleUrl: './empty-state-example.component.scss',
	imports: [FktSelectComponent, Field]
})
export class EmptyStateExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(false);
	noResults = input<FktNoResults>();

	protected control = form(signal(''))
}
