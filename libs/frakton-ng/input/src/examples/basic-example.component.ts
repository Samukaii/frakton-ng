import { Component, input } from '@angular/core';
import { FktInputComponent, FktInputType } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-basic-example',
	standalone: true,
	imports: [FktInputComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				[type]="type()"
				[spellcheck]="spellcheck()"
			/>

			<div class="text-sm text-gray-600">
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
