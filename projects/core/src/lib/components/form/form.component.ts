import { Component, effect, input, untracked } from '@angular/core';
import { SignalFormGroup } from '../../form/signal-form-group';
import { MarkUsed } from '../../utils/mark-used';
import { Generic, SignalFormGroupValue } from '../../shared/types';

export type FormModifier<
	InputModel extends Generic,
	Form extends SignalFormGroup<any>,
> = {
	[Key in keyof SignalFormGroupValue<Form>]?: (
		value: InputModel,
	) => SignalFormGroupValue<Form>[Key];
};

@Component({
	selector: 'fkt-form',
	imports: [],
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss',
})
export class FormComponent<
	InputModel extends Generic,
	Form extends SignalFormGroup<any>,
> {
	form = input.required<Form>();
	data = input<InputModel>();
	formModifiers = input<FormModifier<InputModel, Form>>();

	@MarkUsed()
	protected updateForm = effect(() => {
		this.data();
		this.form();
		this.formModifiers();

		untracked(() => {
			this.patchForm();
		});
	});

	private patchForm() {
		const data = this.data();
		const form = this.form();
		const modifiers = this.formModifiers();

		if (!data) return;

		const controls = form.controls;

		const finalObject: Generic = {};

		for (const controlKey in controls) {
			const modifier =
				modifiers?.[controlKey as keyof typeof modifiers] ?? null;

			if (modifier) {
				finalObject[controlKey] = modifier(data);
				continue;
			}

			if (data[controlKey]) finalObject[controlKey] = data[controlKey];
		}

		form.patchValue(finalObject);
	}
}
