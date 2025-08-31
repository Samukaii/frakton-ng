import { Component, effect, input, output, untracked } from '@angular/core';
import { SignalFormGroup } from '../../form';
import { MarkUsed } from '../../utils/mark-used';
import { Generic, Prettify, SignalFormGroupValue } from '../../shared/types';
import { FormsModule } from '@angular/forms';
import { FktFormModifier } from './fkt-form.types';


@Component({
	selector: 'fkt-form',
	imports: [
		FormsModule
	],
	templateUrl: './fkt-form.component.html',
	styleUrl: './fkt-form.component.scss',
})
export class FktFormComponent<
	InputModel extends Generic,
	Form extends SignalFormGroup<any>,
> {
	form = input.required<Form>();
	data = input<InputModel>();
	formModifiers = input<FktFormModifier<InputModel, Form>>();
	submit = output<Prettify<SignalFormGroupValue<Form>>>();

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

	protected onSubmit() {
		this.submit.emit(this.form().value() as unknown as Prettify<SignalFormGroupValue<Form>>);
	}
}
