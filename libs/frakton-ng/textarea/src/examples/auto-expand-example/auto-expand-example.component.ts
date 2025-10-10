import { Component, input, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'textarea-auto-expand-example',
	imports: [FktTextareaComponent, Control],
	templateUrl: './auto-expand-example.component.html',
	styleUrl: './auto-expand-example.component.scss'
})
export class AutoExpandExampleComponent {
	label = input('Notes');
	placeholder = input('Start typing...');
	autoExpand = input(true);

	lineCount() {
		const value = this.control().value();
		return value ? value.split('\n').length : 0;
	}
	protected control = form(signal('Type here and press Enter to add new lines.\nThe textarea will automatically expand to fit the content when auto-expand is enabled.'));
}
