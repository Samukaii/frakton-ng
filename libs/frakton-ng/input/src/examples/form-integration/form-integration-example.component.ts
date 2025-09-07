import { Component, computed, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FktInputComponent } from '../../../index';
import { SignalFormBuilder, SignalValidators } from 'frakton-ng/forms';
import { FktFormComponent } from 'frakton-ng/form';


@Component({
	selector: 'input-form-integration-example',
	imports: [FktInputComponent, JsonPipe, FktFormComponent],
	styleUrl: './form-integration-example.component.scss',
	templateUrl: './form-integration-example.component.html'
})
export class FormIntegrationExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: ['', SignalValidators.required()],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		age: [null as unknown as number, [SignalValidators.required(), SignalValidators.min(18), SignalValidators.max(100)]],
	})

	formValidClass = computed(() => {
		return this.form.valid() ? 'container__info--valid' : 'container__info--invalid';
	});
}
