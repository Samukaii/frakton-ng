import { Component, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-password-example',
	standalone: true,
	imports: [FktInputComponent, FktIconComponent],
	styleUrl: './password-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				type="password"
			/>

			<div class="container__info">
				<p>Password length: {{ control().value()?.length || 0 }} characters</p>
				<div>Has value:
					@if (!!control().value()) {
						<fkt-icon name="check" class="container__info--valid"/>
					} @else {
						<fkt-icon name="x-mark" class="container__info--invalid"/>
					}
				</div>
				<p class="container__text">Click the eye icon to toggle password visibility</p>
			</div>
		</div>
	`
})
export class PasswordExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Password');
	placeholder = input('Enter your password');
}
