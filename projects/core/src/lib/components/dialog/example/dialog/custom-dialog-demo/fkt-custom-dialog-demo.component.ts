import { Component, input, output, computed, signal } from '@angular/core';
import { FktIconComponent } from '../../../../icon';
import { FktButtonsListComponent } from '../../../../buttons-list';
import { FktButtonAction } from '../../../../button';
import { FktIconName } from '../../../../../shared/types';

@Component({
	selector: 'demo-custom-dialog',
	template: `
		<div class="container">
			<div>
				<div class="container__header">
					<fkt-icon [name]="iconName()"></fkt-icon>
					<h2>{{title()}}</h2>
				</div>

				<div class="container__message">
					<p>{{message()}}</p>
				</div>

				@if (showDetails()) {
					<div class="container__details">
						<h4>{{detailsTitle()}}</h4>
						<ul>
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
				orientation="horizontal"
			></fkt-buttons-list>
		</div>
	`,
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
