import { Component, input, output, computed } from '@angular/core';
import { FktInputComponent } from '../../../input';
import { FktButtonsListComponent } from '../../../buttons-list';
import { SignalFormControl } from '../../../../form/signal-form-control';
import { FktButtonAction } from '../../../button';

export interface FormData {
	name: string;
	email: string;
}

@Component({
	selector: 'demo-form-dialog',
	template: `
			<h2 class="text-xl font-semibold mb-2">{{title()}}</h2>
			<p class="text-gray-600 mb-4">{{description()}}</p>

			<div class="space-y-4 mb-6">
				<fkt-input
					[control]="nameControl"
					label="Name"
					placeholder="Enter your name"
				></fkt-input>

				<fkt-input
					[control]="emailControl"
					label="Email"
					placeholder="Enter your email"
					type="text"
				></fkt-input>
			</div>

			<fkt-buttons-list
				[actions]="actions()"
				class="w-full"
				fill
			></fkt-buttons-list>
	`,
	standalone: true,
	imports: [FktInputComponent, FktButtonsListComponent]
})
export class FktFormDialogDemoComponent {
	// Input signals
	title = input('Form Dialog');
	description = input('Fill out the form below:');
	initialName = input('');
	initialEmail = input('');

	// Output signals
	formSubmit = output<FormData>();
	formCancel = output<void>();

	// Form controls
	nameControl = new SignalFormControl(this.initialName());
	emailControl = new SignalFormControl(this.initialEmail());

	// Computed actions
	actions = computed((): FktButtonAction[] => [
		{
			identifier: 'cancel',
			text: 'Cancel',
			theme: 'stroked',
			click: () => this.cancel()
		},
		{
			identifier: 'save',
			text: 'Save',
			theme: 'raised',
			click: () => this.save()
		},
	]);

	private save() {
		const formData: FormData = {
			name: this.nameControl.value(),
			email: this.emailControl.value()
		};
		this.formSubmit.emit(formData);
	}

	private cancel() {
		this.formCancel.emit();
	}
}
