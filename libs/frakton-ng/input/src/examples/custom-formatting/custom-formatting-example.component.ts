import { Component, computed, input, signal } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { Control, form, maxLength, minLength, required } from '@angular/forms/signals';
import { FktControlFormatter } from 'frakton-ng/forms';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
	selector: 'input-custom-formatting-example',
	imports: [FktInputComponent, FktIconComponent, Control, FktFieldErrorComponent],
	styleUrl: './custom-formatting-example.component.scss',
	templateUrl: './custom-formatting-example.component.html'
})
export class CustomFormattingExampleComponent {
	control = form(signal(''), path => {
		required(path, {
			message: "The field is required"
		});
		maxLength(path, 11, {
			message: 'The field must have 11 character'
		});
		minLength(path, 11, {
			message: 'The field must have 11 character'
		});
	});
	label = input('CPF (Required)');
	placeholder = input('Enter your CPF');

	status = computed(() => {
		const control = this.control();

		if (control.valid()) return 'valid';
		if (control.invalid() && control.touched()) return 'invalid';
		return 'non-validated';
	})

	statusInfo = computed(() => {
		const status = this.status();

		const icons: Record<'valid' | 'invalid' | 'non-validated', {
			label: string;
			icon: FktIconName;
			classes: string
		}> = {
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
	formatter: FktControlFormatter<string, string> = {
		viewToModelValue: value => {
			return value.replace(/\D/g, '');
		},
		sanitizeViewValue: ({currentValue}) => {
			let clean = currentValue.replace(/\D/g, '');

			const split = clean.split('');

			if(split.length > 3)
				split.splice(3, 0, '.');

			if(split.length > 7)
				split.splice(7, 0, '.');

			if(split.length > 11)
				split.splice(11, 0, '-');

			return {sanitizedValue: split.slice(0, 14).join('')}
		}
	}
}
