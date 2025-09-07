import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktNoResults } from 'frakton-ng/no-results';

@Component({
	selector: 'select-empty-state-example',
	templateUrl: './empty-state-example.component.html',
	styleUrl: './empty-state-example.component.scss',
	imports: [FktSelectComponent]
})
export class EmptyStateExampleComponent {
	control = new SignalFormControl('');
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(false);
	noResults = input<FktNoResults>();
}
