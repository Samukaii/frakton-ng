import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';
import { FktIconName, FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-validation-example',
	standalone: true,
	imports: [FktInputComponent, FktIconComponent],
	styleUrl: './validation-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="email"
			/>

			<div class="container__info">
				<p class="container__value">Current value: {{ control().value() || '(empty)' }}</p>
				<div class="container__status-container" [class]="statusInfo().classes">
					<p>Status:</p>

					<div class="container__status">
						<fkt-icon [name]="statusInfo().icon"/>
						<p>
						{{ statusInfo().label }}
						</p>
					</div>
				</div>
			</div>
		</div>
	`
})
export class ValidationExampleComponent {
	control = input(new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.email()
		]
	}));
	label = input('Email Address (Required)');
	placeholder = input('Enter your email address');

	status = computed(() => {
		const control = this.control();

		if (control.valid()) return 'valid';
		if (control.invalid() && control.touched()) return 'invalid';
		return 'non-validated';
	})

	statusInfo = computed(() => {
		const status = this.status();

		const icons: Record<'valid' | 'invalid' | 'non-validated', { label: string; icon: FktIconName; classes: string }> = {
			invalid: {
				label: "Invalid",
				icon: 'x-mark',
				classes: 'text-red-600'
			},
			'non-validated': {
				label: "Non validated",
				icon: 'clock',
				classes: 'text-orange-600'
			},
			valid: {
				label: "Valid",
				icon: 'check',
				classes: 'text-green-600'
			},
		}

		return icons[status];
	});
}
