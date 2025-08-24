import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktDialogService } from '../fkt-dialog.service';
import { FktSimpleDialogDemoComponent } from './dialog/fkt-simple-dialog-demo.component';

@Component({
	selector: 'small-dialog-example',
	template: `
		<div class="flex justify-center">
			<fkt-button class="w-fit" text="Open Small Dialog" theme="raised" (click)="openDialog()" />
		</div>
	`,
	standalone: true,
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
