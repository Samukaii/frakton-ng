import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/button';
import { FktDialogService } from '@frakton-ng/dialog';
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';
import { FktIconName } from '@frakton-ng/icon';

@Component({
	selector: 'fullscreen-dialog-example',
	template: `
		<div class="container">
			<fkt-button text="Open Full Screen" theme="raised" (click)="openDialog()" />
		</div>
	`,
	styleUrl: './fkt-fullscreen-dialog-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktFullscreenDialogExampleComponent {
	private dialogService = inject(FktDialogService);

	protected openDialog() {
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
