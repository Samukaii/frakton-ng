import { Component, computed, input, output, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { Control, email, form, required, submit } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

export interface FormData {
	name: string;
	email: string;
}

@Component({
	selector: 'demo-form-dialog',
	templateUrl: './fkt-form-dialog-demo.component.html',
	styleUrl: './fkt-form-dialog-demo.component.scss',
	imports: [FktInputComponent, FktButtonsListComponent, Control, FktFieldErrorComponent]
})
export class FktFormDialogDemoComponent {
	title = input('Form Dialog');
	description = input('Fill out the form below:');
	initialName = input('');
	initialEmail = input('');

	submit = output<FormData>();
	cancel = output<void>();

	private value = signal({
		name: "",
		email: "",
	})

	protected form = form(this.value, path => {
		required(path.name, {message: "Field is required"});
		required(path.email, {message: "Field is required"});

		email(path.email, {message: "Invalid email"})
	})

	protected actions = computed((): FktButtonAction[] => [
		{
			identifier: 'cancel',
			text: 'Cancel',
			theme: 'stroked',
			click: () => {
				this.cancel.emit();
			}
		},
		{
			identifier: 'save',
			text: 'Save',
			theme: 'raised',
			click: async () => {
				await submit(this.form, async () => {
					this.submit.emit(this.value());
				})
			}
		},
	]);
}
