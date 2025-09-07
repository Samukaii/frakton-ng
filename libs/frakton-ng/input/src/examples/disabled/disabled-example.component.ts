import { Component, input, OnInit } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'input-disabled-example',
	standalone: true,
	imports: [FktInputComponent, FktBadgeComponent, FktButtonComponent],
	styleUrl: './disabled-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="text"
			/>

			<div class="container__info">
				<p class="container__text">This field cannot be edited due to disabled state</p>
			</div>
			<div class="container__status">
				Status:
				@if (control().disabled()) {
					<fkt-badge
						text="Disabled"
						color="red"
					/>
				}
				@else {
					<fkt-badge
						text="Enabled"
						color="green"
					/>
				}
			</div>
			<div class="container__actions">
				<fkt-button
					(click)="toggleField()"
					theme="stroked"
					[text]="control().disabled() ? 'Enable' : 'Disable'"
				/>
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

	protected toggleField() {
		const disabled = this.control().disabled();

		if (disabled)
			this.control().enable();
		else this.control().disable();
	}
}
