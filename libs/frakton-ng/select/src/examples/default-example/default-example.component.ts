import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'select-default-example',
	templateUrl: './default-example.component.html',
	styleUrl: './default-example.component.scss',
	imports: [FktSelectComponent]
})
export class DefaultExampleComponent {
	control = new SignalFormControl('');
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(false);
	noResults = input<any>();
}
