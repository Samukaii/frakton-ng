import { Component, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-auto-expand-example',
	imports: [FktTextareaComponent],
	templateUrl: './auto-expand-example.component.html',
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
