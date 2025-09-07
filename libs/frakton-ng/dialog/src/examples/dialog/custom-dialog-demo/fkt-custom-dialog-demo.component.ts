import { Component, input, output, computed, signal } from '@angular/core';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';

@Component({
	selector: 'demo-custom-dialog',
	templateUrl: './fkt-custom-dialog-demo.component.html',
	styleUrl: './fkt-custom-dialog-demo.component.scss',
	imports: [FktIconComponent, FktButtonsListComponent]
})
export class FktCustomDialogDemoComponent {
	title = input('Custom Dialog');
	message = input<string | undefined>('This is a custom dialog with rich content, icons, and conditional sections.');
	iconName = input<FktIconName>('information-circle');
	detailsTitle = input<string | undefined>('Additional Details:');
	details = input([
		'Feature will be available in the next update',
		'You can subscribe to notifications',
		'Contact support for more information'
	]);

	detailsToggled = output<boolean>();
	dialogConfirmed = output<void>();

	protected showDetails = signal(false);

	protected actions = computed((): FktButtonAction[] => [
		{
			identifier: 'details',
			text: this.showDetails() ? 'Hide Details' : 'Show Details',
			theme: 'basic',
			click: () => this.toggleDetails()
		},
		{
			identifier: 'understand',
			text: 'I Understand',
			theme: 'raised',
			click: () => this.dialogConfirmed.emit()
		}
	]);

	private toggleDetails() {
		this.showDetails.update(current => !current);
		this.detailsToggled.emit(this.showDetails());
	}
}
