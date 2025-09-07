import { Component, input, output, computed } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';

@Component({
	selector: 'demo-simple-dialog',
	template: `
		<h2 class="title">{{ title() }}</h2>
		<p class="message">{{ message() }}</p>
		<fkt-buttons-list
			[actions]="actions()"
			horizontalAlignment="end"
		></fkt-buttons-list>
	`,
	styleUrl: './fkt-simple-dialog-demo.component.scss',
	imports: [FktButtonsListComponent]
})
export class FktSimpleDialogDemoComponent {
	title = input('Simple Dialog');
	message = input('This is a simple dialog with basic content.');

	closeDialog = output<void>();

	actions = computed((): FktButtonAction[] => [
		{
			identifier: 'close',
			text: 'Close',
			theme: 'raised',
			click: () => this.closeDialog.emit()
		}
	]);
}
