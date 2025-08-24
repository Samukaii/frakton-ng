import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktDialogService } from '../fkt-dialog.service';
import { FktCustomDialogDemoComponent } from './dialog/fkt-custom-dialog-demo.component';

@Component({
	selector: 'custom-dialog-example',
	template: `
		<div class="flex justify-center">
			<fkt-button class="w-fit" text="Open Custom Dialog" theme="raised" (click)="openDialog()" />
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktCustomDialogExampleComponent {
	private dialogService = inject(FktDialogService);
	counterSignal = signal(0);

	openDialog() {
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
