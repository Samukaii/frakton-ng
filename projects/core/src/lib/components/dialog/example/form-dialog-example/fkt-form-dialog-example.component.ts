import { Component, inject } from '@angular/core';
import { FktButtonComponent } from '../../../button';
import { FktDialogService } from '../../fkt-dialog.service';
import { FktFormDialogDemoComponent, FormData } from '../dialog/form-dialog-demo/fkt-form-dialog-demo.component';

@Component({
	selector: 'form-dialog-example',
	template: `
		<div class="container">
			<fkt-button
				text="Contact Form"
				theme="stroked"
				color="primary"
				(click)="openContactForm()"
			/>
			<fkt-button
				text="User Registration"
				theme="stroked"
				color="green"
				(click)="openRegistrationForm()"
			/>
			<fkt-button
				text="Feedback Form"
				theme="stroked"
				color="yellow"
				(click)="openFeedbackForm()"
			/>
		</div>
	`,
	styleUrl: 'fkt-form-dialog-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktFormDialogExampleComponent {
	private dialogService = inject(FktDialogService);

	protected openContactForm() {
		const dialogInstance = this.dialogService.open({
			component: FktFormDialogDemoComponent,
			data: {
				title: 'Contact Us',
				description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
				initialName: '',
				initialEmail: '',
				submit: (formData: FormData) => {
					console.log('Contact form submitted:', formData);
					alert(`Thank you ${formData.name}! We received your message.`);
					dialogInstance.close();
				},
				cancel: () => {
					console.log('Contact form cancelled');
					dialogInstance.close();
				}
			},
			panelOptions: { width: '500px', padding: '2rem' }
		});
	}

	protected openRegistrationForm() {
		const dialogInstance = this.dialogService.open({
			component: FktFormDialogDemoComponent,
			data: {
				title: 'User Registration',
				description: 'Create your account by providing the required information.',
				initialName: '',
				initialEmail: '',
				submit: (formData: FormData) => {
					console.log('Registration form submitted:', formData);
					alert(`Welcome ${formData.name}! Your account has been created.`);
					dialogInstance.close();
				},
				cancel: () => dialogInstance.close()
			},
			panelOptions: { width: '500px', padding: '2rem' }
		});
	}

	protected openFeedbackForm() {
		const dialogInstance = this.dialogService.open({
			component: FktFormDialogDemoComponent,
			data: {
				title: 'Share Your Feedback',
				description: 'Help us improve by sharing your thoughts and suggestions.',
				initialName: 'John Doe',
				initialEmail: 'john@example.com',
				submit: (formData: FormData) => {
					console.log('Feedback form submitted:', formData);
					alert(`Thanks for your feedback, ${formData.name}!`);
					dialogInstance.close();
				},
				cancel: () => dialogInstance.close()
			},
			panelOptions: { width: '500px', padding: '2rem' }
		});
	}
}
