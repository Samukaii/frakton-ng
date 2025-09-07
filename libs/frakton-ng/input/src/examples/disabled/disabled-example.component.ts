import { Component, input, OnInit } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'input-disabled-example',
	imports: [FktInputComponent, FktBadgeComponent, FktButtonComponent],
	styleUrl: './disabled-example.component.scss',
	templateUrl: './disabled-example.component.html'
})
export class DisabledExampleComponent implements OnInit {
	control = input(new SignalFormControl('This field is disabled'));
	label = input('Disabled Field');
	placeholder = input('This field is disabled');

	ngOnInit() {
		this.control().disable();
	}

	protected toggleField() {
		const disabled = this.control().disabled();

		if (disabled)
			this.control().enable();
		else this.control().disable();
	}
}
