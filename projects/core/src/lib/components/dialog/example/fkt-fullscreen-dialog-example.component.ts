import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktDialogService } from '../fkt-dialog.service';
import { FktCustomDialogDemoComponent } from './dialog/fkt-custom-dialog-demo.component';
import { FktIconName } from '../../../shared/types';

@Component({
	selector: 'fullscreen-dialog-example',
	template: `
		<div class="flex justify-center">
			<fkt-button class="w-fit" text="Open Full Screen" theme="raised" (click)="openDialog()" />
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktFullscreenDialogExampleComponent {
	private dialogService = inject(FktDialogService);

	openDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktCustomDialogDemoComponent,
			data: {
				title: 'Full Screen Experience',
				message: 'This dialog demonstrates full screen capabilities with responsive design.',
				iconName: 'arrow-long-up' as FktIconName,
				details: [
					'Full viewport coverage',
					'Responsive layout',
					'Mobile-friendly design'
				],
				dialogConfirmed: () => dialogInstance.close()
			},
			panelOptions: {
				width: '100%',
				maxWidth: '100vw',
				maxHeight: '100vh',
				height: '100%',
				padding: '2rem',
				borderRadius: 'none'
			}
		});
	}
}
