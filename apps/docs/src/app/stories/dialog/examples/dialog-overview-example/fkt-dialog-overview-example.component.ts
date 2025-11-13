import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktDialogService } from 'frakton-ng/dialog';
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';
import { FktFormDialogDemoComponent, FormData } from '../dialog/form-dialog-demo/fkt-form-dialog-demo.component';
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';
import { FktIconName } from 'frakton-ng/icon';

@Component({
	selector: 'dialog-demo-host',
	templateUrl: './fkt-dialog-overview-example.component.html',
	styleUrl: './fkt-dialog-overview-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktDialogOverviewExampleComponent {
	private dialogService = inject(FktDialogService);

	messageSignal = signal('This message comes from a signal!');
	counterSignal = signal(0);

	openSimpleDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktSimpleDialogDemoComponent,
			data: {
				title: 'Dynamic Simple Dialog',
				message: this.messageSignal,
				closeDialog: () => dialogInstance.close()
			},
			panelOptions: {
				width: '400px',
				padding: '2rem'
			}
		});
	}

	openFormDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktFormDialogDemoComponent,
			data: {
				title: 'User Information Form',
				description: 'Please fill out your information:',
				initialName: 'John Doe',
				initialEmail: 'john@example.com',
				submit: (formData: FormData) => {
					console.log('Form submitted:', formData);
					alert(`Thank you ${formData.name}! We received your information.`);
					dialogInstance.close();
				},
				cancel: () => {
					console.log('Form cancelled');
					dialogInstance.close();
				}
			},
			panelOptions: {
				width: '500px',
				padding: '2rem'
			}
		});
	}

	openCustomDialog() {
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
			panelOptions: {
				width: '600px',
				padding: '2rem'
			}
		});
	}

	openConfirmDialog() {
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
			onBackdropClick: () => {
				console.log('Backdrop clicked - dialog cancelled');
			}
		});
	}

	openFullScreenDialog() {
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
				width: '100vw',
				height: '100vh',
				maxWidth: '100vw',
				maxHeight: '100vh',
				padding: '2rem',
				borderRadius: 'none',
			}
		});
	}

	openSmallDialog() {
		const dialogInstance = this.dialogService.open({
			component: FktSimpleDialogDemoComponent,
			data: {
				title: 'Compact Dialog',
				message: 'Small dialogs are perfect for quick confirmations.',
				closeDialog: () => dialogInstance.close()
			},
			panelOptions: {
				width: '300px',
				padding: '2rem'
			}
		});
	}
}
