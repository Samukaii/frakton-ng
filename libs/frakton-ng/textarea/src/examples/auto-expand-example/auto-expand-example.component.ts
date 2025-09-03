import { Component, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-auto-expand-example',
	standalone: true,
	imports: [FktTextareaComponent],
	template: `
		<div class="w-full space-y-4">
			<div class="text-sm text-gray-600 bg-blue-50 p-3 rounded">
				<p class="font-medium">Auto-expand is {{ autoExpand() ? 'enabled' : 'disabled' }}</p>
				<p>The textarea will {{ autoExpand() ? 'automatically grow' : 'maintain fixed height' }} as you type.</p>
			</div>

			<fkt-textarea
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				[autoExpand]="autoExpand()"
			/>

			<div class="text-sm text-gray-600">
				<p>Try typing multiple lines to see the auto-expand behavior.</p>
				<p>Lines count: {{ lineCount() }}</p>
			</div>
		</div>
	`,
	styleUrl: './auto-expand-example.component.scss'
})
export class AutoExpandExampleComponent {
	control = input(new SignalFormControl('Type here and press Enter to add new lines.\nThe textarea will automatically expand to fit the content when auto-expand is enabled.'));
	label = input('Notes');
	placeholder = input('Start typing...');
	autoExpand = input(true);

	lineCount() {
		const value = this.control().value();
		return value ? value.split('\n').length : 0;
	}
}
