import { Component, computed, inject, input, output } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { SignalFormBuilder, SignalValidators } from 'frakton-ng/forms';

export interface FormData {
	name: string;
	email: string;
}

@Component({
	selector: 'demo-form-dialog',
	templateUrl: './fkt-form-dialog-demo.component.html',
	styleUrl: './fkt-form-dialog-demo.component.scss',
	imports: [FktInputComponent, FktButtonsListComponent]
})
export class FktFormDialogDemoComponent {
	title = input('Form Dialog');
	description = input('Fill out the form below:');
	initialName = input('');
	initialEmail = input('');

	submit = output<FormData>();
	cancel = output<void>();

	private fb = inject(SignalFormBuilder);

	protected form = this.fb.strictGroup<FormData>({
		name: ['', SignalValidators.required()],
		email: ['', SignalValidators.email()],
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
			click: () => {
				this.submit.emit(this.form.value());
			}
		},
	]);
}
