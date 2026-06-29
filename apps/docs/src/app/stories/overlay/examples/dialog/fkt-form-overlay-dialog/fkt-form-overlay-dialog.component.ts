import { Component, input, linkedSignal, output } from '@angular/core';
import { FormData } from '../../form-overlay-example/fkt-form-overlay-example.component';
import { FormsModule } from '@angular/forms';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTextareaOldComponent } from 'frakton-ng/textarea-old';
import { FktButtonComponent } from 'frakton-ng/button';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { FktFieldComponent, FktFieldErrorComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
	selector: 'fkt-form-overlay-dialog',
	imports: [
		FktFieldComponent,
		FktInputTextDirective,
		FormsModule,
		FktIconComponent,
		FktButtonComponent,
		FktTextareaOldComponent,
		FormField,
		FktFieldErrorComponent
	],
	templateUrl: './fkt-form-overlay-dialog.component.html',
	styleUrl: './fkt-form-overlay-dialog.component.scss'
})
export class FktFormOverlayDialogComponent {
	title = input('Contact Form');
	description = input('Please fill out your information below:');
	initialData = input<FormData>();

	onFormSubmit = output<FormData>();
	onFormCancel = output<void>();

	private value = linkedSignal(() => {
		const initialData = this.initialData();

		if (!initialData)
			return {
				name: '',
				email: '',
				message: ''
			}

		return initialData;
	});

	protected form = form(this.value, path => {
		required(path.name, {message: "Field is required"});
		required(path.email, {message: "Field is required"});
		required(path.name, {message: "Field is required"});

		email(path.email, {message: "E-mail invalid"})
	})

	protected async handleSubmit() {
		await submit(this.form, async () => {
			this.onFormSubmit.emit(this.form().value());
		});
	}

	protected handleCancel() {
		this.onFormCancel.emit();
	}
}
