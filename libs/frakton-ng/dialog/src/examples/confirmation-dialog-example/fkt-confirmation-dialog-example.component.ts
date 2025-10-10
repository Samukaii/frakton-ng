import { Component, inject } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktDialogService } from 'frakton-ng/dialog';

@Component({
	selector: 'confirmation-dialog-example',
	templateUrl: './fkt-confirmation-dialog-example.component.html',
	styleUrl: './fkt-confirmation-dialog-example.component.scss',
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
					color: 'danger',
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
