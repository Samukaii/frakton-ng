import { Component, computed, input, output, signal } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

export interface FormData {
	name: string;
	email: string;
}

@Component({
	selector: 'demo-form-dialog',
	templateUrl: './fkt-form-dialog-demo.component.html',
	styleUrl: './fkt-form-dialog-demo.component.scss',
	imports: [
		FktButtonsListComponent,
		FktFieldComponent,
		FktInputTextDirective,
		FormField,
	]
})
export class FktFormDialogDemoComponent {
	title = input('Form Dialog');
	description = input('Fill out the form below:');
	initialName = input('');
	initialEmail = input('');

	submitForm = output<FormData>();
	cancelAction = output<void>();

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
			label: 'Cancel',
			appearance: 'stroked',
			click: () => {
				this.cancelAction.emit();
			}
		},
		{
			identifier: 'save',
			label: 'Save',
			appearance: 'raised',
			click: async () => {
				await submit(this.form, async () => {
					this.submitForm.emit(this.value());
				})
			}
		},
	]);
}
