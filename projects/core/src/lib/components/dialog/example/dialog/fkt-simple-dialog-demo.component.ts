import { Component, input, output, computed } from '@angular/core';
import { FktButtonsListComponent } from '../../../buttons-list';
import { FktButtonAction } from '../../../button';

@Component({
	selector: 'demo-simple-dialog',
	template: `
		<h2 class="text-xl font-semibold mb-4">{{ title() }}</h2>
		<p class="text-gray-600 mb-6">{{ message() }}</p>
		<fkt-buttons-list
			[actions]="actions()"
			horizontalAlignment="end"
			class="w-full"
		></fkt-buttons-list>
	`,
	standalone: true,
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
