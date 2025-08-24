import { Component, input, output, computed, signal } from '@angular/core';
import { FktIconComponent } from '../../../icon';
import { FktButtonsListComponent } from '../../../buttons-list';
import { FktButtonAction } from '../../../button';
import { FktIconName } from '../../../../shared/types';

@Component({
	selector: 'demo-custom-dialog',
	template: `
		<div class="h-full w-full flex flex-col justify-between">
			<div>
				<div class="flex items-center mb-4">
					<fkt-icon [name]="iconName()" class="text-blue-500 text-2xl mr-3"></fkt-icon>
					<h2 class="text-xl font-semibold">{{title()}}</h2>
				</div>

				<div class="mb-6">
					<p class="text-gray-600 leading-relaxed">{{message()}}</p>
				</div>

				@if (showDetails()) {
					<div class="bg-gray-50 p-4 rounded-lg mb-6">
						<h4 class="font-medium mb-2">{{detailsTitle()}}</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							@for (detail of details(); track detail) {
								<li>• {{detail}}</li>
							}
						</ul>
					</div>
				}
			</div>


			<fkt-buttons-list
				[actions]="actions()"
				horizontalAlignment="end"
				class="w-full"
				orientation="horizontal"
			></fkt-buttons-list>
		</div>
	`,
	styles: `
		:host {
			height: 100%;
			width: 100%;
			display: block;
		}
	`,
	standalone: true,
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
