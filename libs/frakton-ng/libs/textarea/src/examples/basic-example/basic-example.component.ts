import { Component, input } from '@angular/core';
import { FktTextareaComponent } from '@frakton-ng/textarea';
import { SignalFormControl } from '@frakton-ng/forms';

@Component({
	selector: 'textarea-basic-example',
	standalone: true,
	imports: [FktTextareaComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-textarea
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
			/>

			<div class="text-sm text-gray-600">
				<p>Current value: {{ control().value() || '(empty)' }}</p>
			</div>
		</div>
	`,
	styleUrl: './basic-example.component.scss'
})
export class BasicExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Description');
	placeholder = input('Enter a detailed description...');
}
