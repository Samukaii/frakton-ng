import { Component, input } from '@angular/core';
import { FktInputComponent, FktInputType } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-basic-example',
	imports: [FktInputComponent],
	styleUrl: './basic-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				[type]="type()"
				[spellcheck]="spellcheck()"
			/>

			<div class="container__text">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
			</div>
		</div>
	`
})
export class BasicExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Full Name');
	placeholder = input('Enter your full name');
	type = input<FktInputType>('text');
	spellcheck = input(true);
}
