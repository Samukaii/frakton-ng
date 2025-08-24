import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktDialogService } from '../fkt-dialog.service';
import { FktSimpleDialogDemoComponent } from './dialog/fkt-simple-dialog-demo.component';

@Component({
	selector: 'simple-dialog-example',
	template: `
		<div class="flex justify-center gap-4">
			<fkt-button
				class="w-fit"
				text="Open Simple Dialog"
				theme="raised"
				(click)="openDialog()"
			/>
			<fkt-button
				class="w-fit"
				text="Update Message"
				theme="stroked"
				color="green"
				(click)="updateMessage()"
			/>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktSimpleDialogExampleComponent {
	private dialogService = inject(FktDialogService);
	messageSignal = signal('This message comes from a reactive signal!');

	openDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktSimpleDialogDemoComponent,
			data: {
				title: 'Dynamic Simple Dialog',
				message: this.messageSignal,  // Reactive signal
				closeDialog: () => {
					console.log('Dialog closed');
					dialogInstance.close();
				}
			},
			panelOptions: {
				width: '400px',
				padding: '2rem'
			}
		});
	}

	updateMessage() {
		this.messageSignal.set('Message updated! See how it changes in open dialogs.');
	}
}
