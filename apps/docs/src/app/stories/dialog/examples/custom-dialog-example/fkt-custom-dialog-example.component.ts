import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktDialogService } from 'frakton-ng/dialog';
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';

@Component({
	selector: 'custom-dialog-example',
	templateUrl: './fkt-custom-dialog-example.component.html',
	imports: [FktButtonComponent],
	styleUrl: './fkt-custom-dialog-example.component.scss'
})
export class FktCustomDialogExampleComponent {
	private dialogService = inject(FktDialogService);
	counterSignal = signal(0);

	protected openDialog() {
		const customDetails = [
			'This dialog demonstrates signal passing',
			'Custom details can be provided dynamically',
			`Counter value: ${this.counterSignal()}`
		];

		const dialogInstance = this.dialogService.open({
			component: FktCustomDialogDemoComponent,
			data: {
				title: 'Advanced Custom Dialog',
				message: 'This dialog shows advanced features with signals and dynamic content.',
				iconName: 'cog-6-tooth',
				detailsTitle: 'Technical Details:',
				details: customDetails,
				detailsToggled: (isVisible: boolean) => {
					console.log('Details toggled:', isVisible);
				},
				dialogConfirmed: () => {
					this.counterSignal.update(count => count + 1);
					console.log('Dialog confirmed! Counter:', this.counterSignal());
					dialogInstance.close();
				}
			},
			panelOptions: { width: '600px', padding: '2rem' }
		});
	}
}
