import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormData } from '../../form-overlay-example/fkt-form-overlay-example.component';
import { SignalFormBuilder, SignalValidators } from 'frakton-ng/forms';
import { FktInputComponent } from 'frakton-ng/input';
import { FormsModule } from '@angular/forms';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-form-overlay-dialog',
	imports: [
		FktInputComponent,
		FormsModule,
		FktIconComponent,
		FktButtonComponent,
		FktTextareaComponent
	],
	templateUrl: './fkt-form-overlay-dialog.component.html',
	styleUrl: './fkt-form-overlay-dialog.component.scss'
})
export class FktFormOverlayDialogComponent implements OnInit {
	title = input('Contact Form');
	description = input('Please fill out your information below:');
	initialData = input<FormData>();

	onFormSubmit = output<FormData>();
	onFormCancel = output<void>();

	private fb = inject(SignalFormBuilder);
	protected form = this.fb.group({
		name: ['', SignalValidators.required()],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		message: ['', SignalValidators.required()],
	})

	ngOnInit() {
		const initialData = this.initialData();

		if (!initialData) return;

		this.form.patchValue(initialData);
	}

	protected handleSubmit() {
		if (!this.form.valid()) return;

		this.onFormSubmit.emit(this.form.value());
	}

	protected handleCancel() {
		this.onFormCancel.emit();
	}
}
