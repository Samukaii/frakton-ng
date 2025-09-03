import { Component, computed, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-validation-example',
	standalone: true,
	imports: [FktTextareaComponent],
	template: `
		<div class="validation-example">
			<fkt-textarea
				[control]="control"
				[label]="label()"
				[placeholder]="placeholder()"
			/>

			<div class="validation-example__container">
				<div class="validation-example__status">
					<span class="validation-example__status-label">Status:</span>
					<span
						class="validation-example__status-content"
						[class.validation-example__status-content--valid]="control.valid()"
						[class.validation-example__status-content--invalid]="control.invalid()">
						{{ control.valid() ? 'Valid' : 'Invalid' }}
					</span>
				</div>

				<div class="validation-example__info">
					<div class="validation-example__info-label">
						<strong>Character count:</strong>
						<span>{{ characterCount() }}/{{ maxLength() }}</span>
					</div>

					<div class="validation-example__info-label">
						<strong>Required minimum:</strong>
						<span>{{ minLength() }} characters</span>
					</div>
				</div>
			</div>
		</div>
	`,
	styleUrl: './validation-example.component.scss'
})
export class ValidationExampleComponent {
	minLength = input(20);
	maxLength = input(500);
	label = input('Bio');
	placeholder = input('Tell us about yourself...');

	control = new SignalFormControl('', {
		validators: [
			SignalValidators.required(),
			SignalValidators.minLength(this.minLength()),
			SignalValidators.maxLength(this.maxLength())
		]
	});

	characterCount = computed(() => {
		return this.control.value()?.length || 0;
	});
}
