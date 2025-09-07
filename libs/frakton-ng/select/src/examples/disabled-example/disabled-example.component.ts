import { Component, input, OnInit } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'select-disabled-example',
	styleUrl: './disabled-example.component.scss',
	templateUrl: './disabled-example.component.html',
	imports: [FktSelectComponent, FktButtonComponent]
})
export class DisabledExampleComponent implements OnInit {
	control = new SignalFormControl('option2');
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();

	ngOnInit() {
		this.control.disable();
	}

	toggleDisabled() {
		if (this.control.disabled()) {
			this.control.enable();
		} else {
			this.control.disable();
		}
	}
}
