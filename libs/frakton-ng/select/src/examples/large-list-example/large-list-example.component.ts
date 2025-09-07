import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'select-large-list-example',
	templateUrl: './large-list-example.component.html',
	styleUrl: './large-list-example.component.scss',
	imports: [FktSelectComponent]
})
export class LargeListExampleComponent {
	control = new SignalFormControl('');
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
}
