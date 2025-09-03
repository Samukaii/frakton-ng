import { Component, input, OnInit } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-disabled-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="text"
			/>

			<div class="text-sm text-gray-600">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
				<p>Disabled: {{ control().disabled() ? '✓' : '✗' }}</p>
				<p class="text-xs text-gray-500">This field cannot be edited due to disabled state</p>
			</div>
		</div>
	`
})
export class DisabledExampleComponent implements OnInit {
	control = input(new SignalFormControl('This field is disabled'));
	label = input('Disabled Field');
	placeholder = input('This field is disabled');

	ngOnInit() {
		this.control().disable();
	}
}
