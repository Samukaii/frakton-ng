import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktDialogService } from 'frakton-ng/dialog';
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';

@Component({
	selector: 'simple-dialog-example',
	templateUrl: './fkt-simple-dialog-example.component.html',
	styleUrl: './fkt-simple-dialog-example.component.scss',
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
