import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'select-loading-example',
	templateUrl: './loading-example.component.html',
	styleUrl: './loading-example.component.scss',
	imports: [FktSelectComponent]
})
export class LoadingExampleComponent {
	control = new SignalFormControl('');
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();
	loading = input<boolean>(true);
}
