import { Component, computed, input } from '@angular/core';
import { SignalFormControl } from '../../form';
import { Generic } from '../../shared/types';

@Component({
	selector: 'fkt-field-error',
	imports: [],
	templateUrl: './fkt-field-error.component.html',
	styleUrl: './fkt-field-error.component.scss',
	host: {
		'[class.active]': '!!message()',
	},
})
export class FktFieldErrorComponent {
	control = input<SignalFormControl<any>>();

	private messages: { name: string; error: (error: Generic) => string }[] = [
		{
			name: 'required',
			error: () => 'Campo obrigatório',
		},
		{
			name: 'email',
			error: () => 'E-mail inválido',
		},
		{
			name: 'minlength',
			error: errors =>
				`É necessário no mínimo ${errors['requiredLength']} caracteres`,
		},
		{
			name: 'custom',
			error: errors => errors['message'],
		},
	];

	message = computed(() => {
		const error = this.control()?.errors();

		if (!error) return null;
		if (this.control()?.untouched()) return null;

		const message = this.messages.find(message => !!error[message.name]);

		if (!message) return null;

		return message.error(error[message.name]);
	});
}
