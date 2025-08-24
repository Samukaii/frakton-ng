import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktDialogService } from '../fkt-dialog.service';

@Component({
	selector: 'confirmation-dialog-example',
	template: `
		<div class="flex justify-center">
			<fkt-button class="w-fit" text="Delete Item" color="red" theme="raised" (click)="openDialog()" />
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktConfirmationDialogExampleComponent {
	private dialogService = inject(FktDialogService);

	openDialog() {
		this.dialogService.confirm({
			title: 'Delete Item',
			description: 'This action cannot be undone. Are you sure you want to delete this item?',
			actions: {
				primary: {
					text: 'Delete',
					color: 'red',
					click: () => {
						console.log('Item deleted!');
					}
				},
				secondary: {
					text: 'Cancel'
				}
			},
			backdropClick: () => {
				console.log('Backdrop clicked - dialog cancelled');
			}
		});
	}
}
