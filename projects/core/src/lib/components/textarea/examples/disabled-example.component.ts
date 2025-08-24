import { Component, input, OnInit } from '@angular/core';
import { FktTextareaComponent } from '../fkt-textarea.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { FktButtonComponent } from '../../button';

@Component({
	selector: 'textarea-disabled-example',
	standalone: true,
	imports: [FktTextareaComponent, FktButtonComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-textarea
				autoExpand
				[control]="control"
				[label]="label()"
				[placeholder]="placeholder()"
			/>

			<div class="flex items-center space-x-4">
				<fkt-button
					(click)="toggleDisabled()"
					[text]="(control.disabled() ? 'Enable' : 'Disable') + ' textarea'"
				>
				</fkt-button>

				<span class="text-sm text-gray-600">
					Status: <strong>{{ control.disabled() ? 'Disabled' : 'Enabled' }}</strong>
				</span>
			</div>

			<div class="text-sm text-gray-600">
				<p>Disabled textareas prevent user interaction while preserving the current value.</p>
				<p>Common use cases include read-only views, locked fields, or conditional editing.</p>
			</div>
		</div>
	`
})
export class DisabledExampleComponent implements OnInit {
	label = input('Terms and Conditions');
	placeholder = input('Content will appear here...');
	initialDisabled = input(true);

	control = new SignalFormControl(`
This is a sample legal text that cannot be edited by the user.
By using our service, you agree to these terms and conditions. This text field is disabled to prevent modifications to the legal agreement.
The disabled state is useful for displaying read-only content while maintaining the form field structure.`.trim()
	);

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
