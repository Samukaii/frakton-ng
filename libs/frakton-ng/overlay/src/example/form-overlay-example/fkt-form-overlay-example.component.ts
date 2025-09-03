import { Component, inject } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktFormOverlayDialogComponent } from '../dialog/fkt-form-overlay-dialog/fkt-form-overlay-dialog.component';

export interface FormData {
	name: string;
	email: string;
	message: string;
}

@Component({
	selector: 'form-overlay-example',
	template: `
		<div class="container">
			<div #contactFormButton>
				<fkt-button
					text="Contact Form"
					theme="stroked"
					color="primary"
					(click)="openContactForm(contactFormButton)"
				></fkt-button>
			</div>
			<div #feedbackFormButton>
				<fkt-button
					text="Feedback Form"
					theme="stroked"
					color="green"
					(click)="openFeedbackForm(feedbackFormButton)"
				></fkt-button>
			</div>

			<div #settingsFormButton>
				<fkt-button
					text="User Settings"
					theme="stroked"
					color="primary"
					(click)="openSettingsForm(settingsFormButton)"
				></fkt-button>
			</div>
		</div>
	`,
	styleUrl: './fkt-form-overlay-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktFormOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	openContactForm(nativeElement: HTMLElement) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktFormOverlayDialogComponent,
			data: {
				title: 'Contact Us',
				description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
				onFormSubmit: (formData: FormData) => {
					console.log('Contact form submitted:', formData);
					alert(`Thank you ${formData.name}! We received your message and will get back to you soon.`);
					overlayRef.close();
				},
				onFormCancel: () => {
					console.log('Contact form cancelled');
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-start',
				disableAutoReposition: true,
				padding: '0',
				width: 'fit-content',
				maxHeight: 'fit-content',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}

	openFeedbackForm(nativeElement: HTMLElement) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktFormOverlayDialogComponent,
			data: {
				title: 'Share Your Feedback',
				description: 'Help us improve by sharing your thoughts and suggestions.',
				initialData: {
					name: 'John Doe',
					email: 'john@example.com',
					message: '',
				},
				onFormSubmit: (formData: FormData) => {
					console.log('Feedback form submitted:', formData);
					alert(`Thanks for your feedback, ${formData.name}!`);
					overlayRef.close();
				},
				onFormCancel: () => {
					console.log('Feedback form cancelled');
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-start',
				disableAutoReposition: true,
				padding: '0',
				width: 'fit-content',
				maxHeight: 'fit-content',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}

	openSettingsForm(nativeElement: HTMLElement) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktFormOverlayDialogComponent,
			data: {
				title: 'Update Profile',
				description: 'Update your profile information below.',
				initialData: {
					name: 'Jane Smith',
					email: 'jane.smith@company.com',
					message: 'Full-stack developer with 5+ years of experience.',
				},
				onFormSubmit: (formData: FormData) => {
					console.log('Settings form submitted:', formData);
					alert(`Profile updated successfully, ${formData.name}!`);
					overlayRef.close();
				},
				onFormCancel: () => {
					console.log('Settings form cancelled');
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-start',
				disableAutoReposition: true,
				padding: '0',
				width: 'fit-content',
				maxHeight: 'fit-content',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}
}
