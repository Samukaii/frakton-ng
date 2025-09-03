import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';
import { FktIconName, FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-validation-example',
	standalone: true,
	imports: [FktInputComponent, FktIconComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="email"
			/>

			<div class="text-sm space-y-1">
				<p class="text-gray-600">Current value: {{ control().value() || '(empty)' }}</p>
				<div class="flex gap-2" [class]="statusInfo().classes">
					<p class="leading-4">Status:</p>

					<div class="flex gap-1">
						<fkt-icon class="text-sm" [name]="statusInfo().icon"/>
						<p class="leading-4">
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
