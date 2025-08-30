import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '../../../button';
import { FktDialogService } from '../../fkt-dialog.service';
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';

@Component({
	selector: 'small-dialog-example',
	template: `
		<div class="container">
			<fkt-button text="Open Small Dialog" theme="raised" (click)="openDialog()" />
		</div>
	`,
	styleUrl: './fkt-small-dialog-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktSmallDialogExampleComponent {
	private dialogService = inject(FktDialogService);

	openDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktSimpleDialogDemoComponent,
			data: {
				title: 'Compact Dialog',
				message: 'Small dialogs are perfect for quick confirmations.',
				closeDialog: () => dialogInstance.close()
			},
			panelOptions: { width: '300px', padding: '2rem' }
		});
	}
}
