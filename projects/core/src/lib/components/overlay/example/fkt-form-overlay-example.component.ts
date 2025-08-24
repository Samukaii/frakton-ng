import { Component, inject, input, OnInit, output } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktOverlayService } from '../fkt-overlay.service';
import { FktInputComponent } from '../../input';
import { FktIconComponent } from '../../icon';
import { FormsModule } from '@angular/forms';
import { SignalValidators } from '../../../form/validators/signal-validators';
import { SignalFormBuilder } from '../../../form/signal-form-builder';
import { FktTextareaComponent } from '../../textarea';

export interface FormData {
	name: string;
	email: string;
	message: string;
}

@Component({
	selector: 'fkt-form-overlay-demo',
	template: `
		<div class="p-4 space-y-4 min-w-80">
			<div class="flex items-center gap-2 pb-2 border-b border-gray-200">
				<fkt-icon name="document-text" size="20" class="text-primary-600"></fkt-icon>
				<h3 class="text-lg font-semibold text-gray-900">{{ title() }}</h3>
			</div>

			<p class="text-sm text-gray-600">{{ description() }}</p>

			<form class="space-y-3" (ngSubmit)="handleSubmit()">
				<fkt-input
					[control]="form.controls.name"
					label="Name"
					placeholder="Enter your name"
				></fkt-input>

				<fkt-input
					[control]="form.controls.email"
					label="Email"
					placeholder="Enter your email"
					type="email"
				></fkt-input>

				<fkt-textarea
					[control]="form.controls.message"
					label="Message"
					placeholder="Enter a message"
				></fkt-textarea>

				<div class="flex gap-2 justify-end pt-2">
					<fkt-button
						text="Cancel"
						theme="stroked"
						type="button"
						(click)="handleCancel()"
					></fkt-button>
					<fkt-button
						text="Submit"
						theme="raised"
						type="submit"
						[disabled]="!form.valid()"
					></fkt-button>
				</div>
			</form>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent, FktInputComponent, FktIconComponent, FormsModule, FktTextareaComponent]
})
export class FktFormOverlayDemoComponent implements OnInit {
	title = input('Contact Form');
	description = input('Please fill out your information below:');
	initialData = input<FormData>();

	onFormSubmit = output<FormData>();
	onFormCancel = output<void>();

	private fb = inject(SignalFormBuilder);
	protected form = this.fb.group({
		name: ['', SignalValidators.required()],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		message: ['', SignalValidators.required()],
	})

	ngOnInit() {
		const initialData = this.initialData();

		if (!initialData) return;

		this.form.patchValue(initialData);
	}

	protected handleSubmit() {
		if (!this.form.valid()) return;

		this.onFormSubmit.emit(this.form.value());
	}

	protected handleCancel() {
		this.onFormCancel.emit();
	}
}


@Component({
	selector: 'form-overlay-example',
	template: `
		<div class="flex gap-4 justify-center">
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
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktFormOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	openContactForm(nativeElement: HTMLElement) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktFormOverlayDemoComponent,
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
				position: 'bottom-center',
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
			component: FktFormOverlayDemoComponent,
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
				position: 'left-center',
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
			component: FktFormOverlayDemoComponent,
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
				position: 'top-center',
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
