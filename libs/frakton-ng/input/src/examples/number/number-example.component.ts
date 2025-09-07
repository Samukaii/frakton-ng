import { Component, computed, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-number-example',
	standalone: true,
	imports: [FktInputComponent, FktIconComponent],
	styleUrl: './number-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="number"
			/>

			<div class="container__info">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
				<div>Is numeric:
					@if (!!control().value()) {
						<fkt-icon name="check" class="container__info--valid"/>
					} @else {
						<fkt-icon name="x-mark" class="container__info--invalid"/>
					}
				</div>
				<p class="container__text">This input accepts only numeric values</p>
			</div>
		</div>
	`
})
export class NumberExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Age');
	placeholder = input('Enter your age');

	isNumeric = computed(() => {
		const value = this.control().value();
		return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));
	})
}
