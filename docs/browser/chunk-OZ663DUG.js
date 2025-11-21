import"./chunk-ENRHZQ2S.js";var t=`<div class="container">\r
			<fkt-button text="Delete Item" color="danger" theme="raised" (click)="openDialog()" />\r
		</div>\r
`;var o=`.container {\r
	display: flex;\r
	justify-content: center;\r
	color: var(--fkt-color-neutral-950);\r
}\r
`;var e=`import { Component, ElementRef, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
\r
@Component({\r
	selector: 'confirmation-dialog-example',\r
	templateUrl: './fkt-confirmation-dialog-example.component.html',\r
	styleUrl: './fkt-confirmation-dialog-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktConfirmationDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
	private elementRef = inject(ElementRef)\r
\r
	openDialog() {\r
		this.dialogService.confirm({\r
			title: 'Delete Item',\r
			description: 'This action cannot be undone. Are you sure you want to delete this item?',\r
			actions: {\r
				primary: {\r
					text: 'Delete',\r
					color: 'danger',\r
					click: () => {\r
						console.log('Item deleted!');\r
					}\r
				},\r
				secondary: {\r
					text: 'Cancel'\r
				}\r
			},\r
			inheritDesignTokensFrom: this.elementRef.nativeElement,\r
			onBackdropClick: () => {\r
				console.log('Backdrop clicked - dialog cancelled');\r
			}\r
		});\r
	}\r
}\r
`;var a=`<div class="container">\r
			<fkt-button text="Open Custom Dialog" theme="raised" (click)="openDialog()" />\r
		</div>`;var i=`.container {\r
	display: flex;\r
	justify-content: center;\r
  color: var(--fkt-color-neutral-950);\r
}\r
`;var n=`import { Component, inject, signal } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';\r
\r
@Component({\r
	selector: 'custom-dialog-example',\r
	templateUrl: './fkt-custom-dialog-example.component.html',\r
	imports: [FktButtonComponent],\r
	styleUrl: './fkt-custom-dialog-example.component.scss'\r
})\r
export class FktCustomDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
	counterSignal = signal(0);\r
\r
	protected openDialog() {\r
		const customDetails = [\r
			'This dialog demonstrates signal passing',\r
			'Custom details can be provided dynamically',\r
			\`Counter value: \${this.counterSignal()}\`\r
		];\r
\r
		const dialogInstance = this.dialogService.open({\r
			component: FktCustomDialogDemoComponent,\r
			data: {\r
				title: 'Advanced Custom Dialog',\r
				message: 'This dialog shows advanced features with signals and dynamic content.',\r
				iconName: 'cog-6-tooth',\r
				detailsTitle: 'Technical Details:',\r
				details: customDetails,\r
				detailsToggled: (isVisible: boolean) => {\r
					console.log('Details toggled:', isVisible);\r
				},\r
				dialogConfirmed: () => {\r
					this.counterSignal.update(count => count + 1);\r
					console.log('Dialog confirmed! Counter:', this.counterSignal());\r
					dialogInstance.close();\r
				}\r
			},\r
			panelOptions: { width: '600px', padding: '2rem' }\r
		});\r
	}\r
}\r
`;var l=`<div class="container">\r
			<div class="container__actions">\r
				<fkt-button\r
					text="Simple Dialog"\r
					theme="stroked"\r
					(click)="openSimpleDialog()"\r
				></fkt-button>\r
\r
				<fkt-button\r
					text="Form Dialog"\r
					theme="stroked"\r
					(click)="openFormDialog()"\r
				></fkt-button>\r
\r
				<fkt-button\r
					text="Custom Dialog"\r
					theme="stroked"\r
					color="success"\r
					(click)="openCustomDialog()"\r
				></fkt-button>\r
\r
				<fkt-button\r
					text="Confirm Action"\r
					color="danger"\r
					theme="stroked"\r
					(click)="openConfirmDialog()"\r
				></fkt-button>\r
\r
				<fkt-button\r
					text="Full Screen Dialog"\r
					theme="stroked"\r
					color="accent"\r
					(click)="openFullScreenDialog()"\r
				></fkt-button>\r
\r
				<fkt-button\r
					text="Small Dialog"\r
					theme="stroked"\r
					(click)="openSmallDialog()"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var m=`.container {\r
	display: flex;\r
	justify-content: center;\r
	gap: var(--fkt-space-md);\r
  	color: var(--fkt-color-neutral-950);\r
\r
	&__actions {\r
		display: grid;\r
		grid-template-columns: repeat(1, minmax(0, 1fr));\r
		gap: var(--fkt-space-md);\r
\r
		@media (min-width: 768px) {\r
			grid-template-columns: repeat(2, minmax(0, 1fr));\r
		}\r
		@media (min-width: 1024px) {\r
			grid-template-columns: repeat(3, minmax(0, 1fr));\r
		}\r
\r
		& > * {\r
			width: 100%;\r
		}\r
	}\r
}\r
`;var s=`import { Component, inject, signal } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';\r
import { FktFormDialogDemoComponent, FormData } from '../dialog/form-dialog-demo/fkt-form-dialog-demo.component';\r
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';\r
import { FktIconName } from 'frakton-ng/icon';\r
\r
@Component({\r
	selector: 'dialog-demo-host',\r
	templateUrl: './fkt-dialog-overview-example.component.html',\r
	styleUrl: './fkt-dialog-overview-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktDialogOverviewExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
\r
	messageSignal = signal('This message comes from a signal!');\r
	counterSignal = signal(0);\r
\r
	openSimpleDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktSimpleDialogDemoComponent,\r
			data: {\r
				title: 'Dynamic Simple Dialog',\r
				message: this.messageSignal,\r
				closeDialog: () => dialogInstance.close()\r
			},\r
			panelOptions: {\r
				width: '400px',\r
				padding: '2rem'\r
			}\r
		});\r
	}\r
\r
	openFormDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktFormDialogDemoComponent,\r
			data: {\r
				title: 'User Information Form',\r
				description: 'Please fill out your information:',\r
				initialName: 'John Doe',\r
				initialEmail: 'john@example.com',\r
				submit: (formData: FormData) => {\r
					console.log('Form submitted:', formData);\r
					alert(\`Thank you \${formData.name}! We received your information.\`);\r
					dialogInstance.close();\r
				},\r
				cancel: () => {\r
					console.log('Form cancelled');\r
					dialogInstance.close();\r
				}\r
			},\r
			panelOptions: {\r
				width: '500px',\r
				padding: '2rem'\r
			}\r
		});\r
	}\r
\r
	openCustomDialog() {\r
		const customDetails = [\r
			'This dialog demonstrates signal passing',\r
			'Custom details can be provided dynamically',\r
			\`Counter value: \${this.counterSignal()}\`\r
		];\r
\r
		const dialogInstance = this.dialogService.open({\r
			component: FktCustomDialogDemoComponent,\r
			data: {\r
				title: 'Advanced Custom Dialog',\r
				message: 'This dialog shows advanced features with signals and dynamic content.',\r
				iconName: 'cog-6-tooth',\r
				detailsTitle: 'Technical Details:',\r
				details: customDetails,\r
				detailsToggled: (isVisible: boolean) => {\r
					console.log('Details toggled:', isVisible);\r
				},\r
				dialogConfirmed: () => {\r
					this.counterSignal.update(count => count + 1);\r
					console.log('Dialog confirmed! Counter:', this.counterSignal());\r
					dialogInstance.close();\r
				}\r
			},\r
			panelOptions: {\r
				width: '600px',\r
				padding: '2rem'\r
			}\r
		});\r
	}\r
\r
	openConfirmDialog() {\r
		this.dialogService.confirm({\r
			title: 'Delete Item',\r
			description: 'This action cannot be undone. Are you sure you want to delete this item?',\r
			actions: {\r
				primary: {\r
					text: 'Delete',\r
					color: 'danger',\r
					click: () => {\r
						console.log('Item deleted!');\r
					}\r
				},\r
				secondary: {\r
					text: 'Cancel'\r
				}\r
			},\r
			onBackdropClick: () => {\r
				console.log('Backdrop clicked - dialog cancelled');\r
			}\r
		});\r
	}\r
\r
	openFullScreenDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktCustomDialogDemoComponent,\r
			data: {\r
				title: 'Full Screen Experience',\r
				message: 'This dialog demonstrates full screen capabilities with responsive design.',\r
				iconName: 'arrow-long-up' as FktIconName,\r
				details: [\r
					'Full viewport coverage',\r
					'Responsive layout',\r
					'Mobile-friendly design'\r
				],\r
				dialogConfirmed: () => dialogInstance.close()\r
			},\r
			panelOptions: {\r
				width: '100vw',\r
				height: '100vh',\r
				maxWidth: '100vw',\r
				maxHeight: '100vh',\r
				padding: '2rem',\r
				borderRadius: 'none',\r
			}\r
		});\r
	}\r
\r
	openSmallDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktSimpleDialogDemoComponent,\r
			data: {\r
				title: 'Compact Dialog',\r
				message: 'Small dialogs are perfect for quick confirmations.',\r
				closeDialog: () => dialogInstance.close()\r
			},\r
			panelOptions: {\r
				width: '300px',\r
				padding: '2rem'\r
			}\r
		});\r
	}\r
}\r
`;var r=`<div class="container">\r
			<fkt-button\r
				text="Contact Form"\r
				theme="stroked"\r
				color="primary"\r
				(click)="openContactForm()"\r
			/>\r
			<fkt-button\r
				text="User Registration"\r
				theme="stroked"\r
				color="success"\r
				(click)="openRegistrationForm()"\r
			/>\r
			<fkt-button\r
				text="Feedback Form"\r
				theme="stroked"\r
				color="accent"\r
				(click)="openFeedbackForm()"\r
			/>\r
		</div>\r
`;var c=`.container {\r
	display: flex;\r
	justify-content: center;\r
	gap: var(--fkt-space-xs);\r
	color: var(--fkt-color-neutral-950);\r
}\r
`;var p=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktFormDialogDemoComponent, FormData } from '../dialog/form-dialog-demo/fkt-form-dialog-demo.component';\r
\r
@Component({\r
	selector: 'form-dialog-example',\r
	templateUrl: './fkt-form-dialog-example.component.html',\r
	styleUrl: 'fkt-form-dialog-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktFormDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
\r
	protected openContactForm() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktFormDialogDemoComponent,\r
			data: {\r
				title: 'Contact Us',\r
				description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',\r
				initialName: '',\r
				initialEmail: '',\r
				submit: (formData: FormData) => {\r
					console.log('Contact form submitted:', formData);\r
					alert(\`Thank you \${formData.name}! We received your message.\`);\r
					dialogInstance.close();\r
				},\r
				cancel: () => {\r
					console.log('Contact form cancelled');\r
					dialogInstance.close();\r
				}\r
			},\r
			panelOptions: { width: '500px', padding: '2rem' }\r
		});\r
	}\r
\r
	protected openRegistrationForm() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktFormDialogDemoComponent,\r
			data: {\r
				title: 'User Registration',\r
				description: 'Create your account by providing the required information.',\r
				initialName: '',\r
				initialEmail: '',\r
				submit: (formData: FormData) => {\r
					console.log('Registration form submitted:', formData);\r
					alert(\`Welcome \${formData.name}! Your account has been created.\`);\r
					dialogInstance.close();\r
				},\r
				cancel: () => dialogInstance.close()\r
			},\r
			panelOptions: { width: '500px', padding: '2rem' }\r
		});\r
	}\r
\r
	protected openFeedbackForm() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktFormDialogDemoComponent,\r
			data: {\r
				title: 'Share Your Feedback',\r
				description: 'Help us improve by sharing your thoughts and suggestions.',\r
				initialName: 'John Doe',\r
				initialEmail: 'john@example.com',\r
				submit: (formData: FormData) => {\r
					console.log('Feedback form submitted:', formData);\r
					alert(\`Thanks for your feedback, \${formData.name}!\`);\r
					dialogInstance.close();\r
				},\r
				cancel: () => dialogInstance.close()\r
			},\r
			panelOptions: { width: '500px', padding: '2rem' }\r
		});\r
	}\r
}\r
`;var g=`<div class="container">\r
	<fkt-button text="Open Full Screen" theme="raised" (click)="openDialog()"/>\r
</div>\r
`;var d=`.container {\r
	display: flex;\r
	justify-content: center;\r
  color: var(--fkt-color-neutral-950);\r
}\r
`;var f=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktCustomDialogDemoComponent } from '../dialog/custom-dialog-demo/fkt-custom-dialog-demo.component';\r
import { FktIconName } from 'frakton-ng/icon';\r
\r
@Component({\r
	selector: 'fullscreen-dialog-example',\r
	templateUrl: './fkt-fullscreen-dialog-example.component.html',\r
	styleUrl: './fkt-fullscreen-dialog-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktFullscreenDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
\r
	protected openDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktCustomDialogDemoComponent,\r
			data: {\r
				title: 'Full Screen Experience',\r
				message: 'This dialog demonstrates full screen capabilities with responsive design.',\r
				iconName: 'arrow-long-up' as FktIconName,\r
				details: [\r
					'Full viewport coverage',\r
					'Responsive layout',\r
					'Mobile-friendly design'\r
				],\r
				dialogConfirmed: () => dialogInstance.close()\r
			},\r
			panelOptions: {\r
				width: '100%',\r
				maxWidth: '100vw',\r
				maxHeight: '100vh',\r
				height: '100%',\r
				padding: '2rem',\r
				borderRadius: 'none'\r
			}\r
		});\r
	}\r
}\r
`;var u=`<div class="container">\r
			<fkt-button\r
				text="Open Simple Dialog"\r
				theme="raised"\r
				(click)="openDialog()"\r
			/>\r
			<fkt-button\r
				text="Update Message"\r
				theme="stroked"\r
				color="success"\r
				(click)="updateMessage()"\r
			/>\r
		</div>\r
`;var k=`.container {\r
	display: flex;\r
	justify-content: center;\r
	gap: var(--fkt-space-md);\r
  color: var(--fkt-color-neutral-950);\r
}\r
`;var h=`import { Component, inject, signal } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';\r
\r
@Component({\r
	selector: 'simple-dialog-example',\r
	templateUrl: './fkt-simple-dialog-example.component.html',\r
	styleUrl: './fkt-simple-dialog-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktSimpleDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
	messageSignal = signal('This message comes from a reactive signal!');\r
\r
	openDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktSimpleDialogDemoComponent,\r
			data: {\r
				title: 'Dynamic Simple Dialog',\r
				message: this.messageSignal,  // Reactive signal\r
				closeDialog: () => {\r
					console.log('Dialog closed');\r
					dialogInstance.close();\r
				}\r
			},\r
			panelOptions: {\r
				width: '400px',\r
				padding: '2rem'\r
			}\r
		});\r
	}\r
\r
	updateMessage() {\r
		this.messageSignal.set('Message updated! See how it changes in open dialogs.');\r
	}\r
}\r
`;var D=`<div class="container">\r
			<fkt-button text="Open Small Dialog" theme="raised" (click)="openDialog()" />\r
		</div>`;var x=`.container {\r
	display: flex;\r
	justify-content: center;\r
  color: var(--fkt-color-neutral-950);\r
}\r
`;var v=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
import { FktSimpleDialogDemoComponent } from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';\r
\r
@Component({\r
	selector: 'small-dialog-example',\r
	templateUrl: './fkt-small-dialog-example.component.html',\r
	styleUrl: './fkt-small-dialog-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktSmallDialogExampleComponent {\r
	private dialogService = inject(FktDialogService);\r
\r
	openDialog() {\r
		const dialogInstance = this.dialogService.open({\r
			component: FktSimpleDialogDemoComponent,\r
			data: {\r
				title: 'Compact Dialog',\r
				message: 'Small dialogs are perfect for quick confirmations.',\r
				closeDialog: () => dialogInstance.close()\r
			},\r
			panelOptions: { width: '300px', padding: '2rem' }\r
		});\r
	}\r
}\r
`;var F=`<div class="container">\r
			<div>\r
				<div class="container__header">\r
					<fkt-icon [name]="iconName()"></fkt-icon>\r
					<h2>{{title()}}</h2>\r
				</div>\r
\r
				<div class="container__message">\r
					<p>{{message()}}</p>\r
				</div>\r
\r
				@if (showDetails()) {\r
					<div class="container__details">\r
						<h4>{{detailsTitle()}}</h4>\r
						<ul>\r
							@for (detail of details(); track detail) {\r
								<li>\u2022 {{detail}}</li>\r
							}\r
						</ul>\r
					</div>\r
				}\r
			</div>\r
\r
\r
			<fkt-buttons-list\r
				[actions]="actions()"\r
				horizontalAlignment="end"\r
				orientation="horizontal"\r
			></fkt-buttons-list>\r
		</div>`;var C=`* {\r
	box-sizing: border-box;\r
	color: var(--fkt-color-neutral-950);\r
}\r
\r
h2, h4, p {\r
	margin: 0;\r
}\r
\r
ul {\r
	padding: 0;\r
	list-style: none;\r
}\r
\r
:host {\r
	display: block;\r
	height: 100%;\r
	width: 100%;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: space-between;\r
	height: 100%;\r
	width: 100%;\r
\r
	&__header {\r
		display: flex;\r
		align-items: center;\r
		margin-bottom: var(--fkt-space-md);\r
		gap: var(--fkt-space-xs);\r
\r
		fkt-icon {\r
			color: var(--fkt-color-info);\r
		}\r
\r
		h2 {\r
			font-size: var(--fkt-font-size-xl);\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
	}\r
\r
	&__message {\r
		margin-bottom: var(--fkt-space-xl);\r
\r
		p {\r
			color: var(--fkt-color-neutral-600);\r
			line-height: 1.625;\r
		}\r
	}\r
\r
	&__details {\r
		background-color: var(--fkt-color-info-opacity-10);\r
		border-radius: var(--fkt-radius-lg);\r
		margin-bottom: var(--fkt-space-xl);\r
		padding: var(--fkt-space-md);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-medium);\r
			margin-bottom: var(--fkt-space-xs);\r
		}\r
\r
		ul {\r
			color: var(--fkt-color-neutral-600);\r
			font-size: var(--fkt-font-size-sm);\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	fkt-buttons-list {\r
		width: 100%;\r
	}\r
}\r
`;var b=`import { Component, input, output, computed, signal } from '@angular/core';\r
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';\r
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';\r
import { FktButtonAction } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'demo-custom-dialog',\r
	templateUrl: './fkt-custom-dialog-demo.component.html',\r
	styleUrl: './fkt-custom-dialog-demo.component.scss',\r
	imports: [FktIconComponent, FktButtonsListComponent]\r
})\r
export class FktCustomDialogDemoComponent {\r
	title = input('Custom Dialog');\r
	message = input<string | undefined>('This is a custom dialog with rich content, icons, and conditional sections.');\r
	iconName = input<FktIconName>('information-circle');\r
	detailsTitle = input<string | undefined>('Additional Details:');\r
	details = input([\r
		'Feature will be available in the next update',\r
		'You can subscribe to notifications',\r
		'Contact support for more information'\r
	]);\r
\r
	detailsToggled = output<boolean>();\r
	dialogConfirmed = output<void>();\r
\r
	protected showDetails = signal(false);\r
\r
	protected actions = computed((): FktButtonAction[] => [\r
		{\r
			identifier: 'details',\r
			text: this.showDetails() ? 'Hide Details' : 'Show Details',\r
			theme: 'basic',\r
			click: () => this.toggleDetails()\r
		},\r
		{\r
			identifier: 'understand',\r
			text: 'I Understand',\r
			theme: 'raised',\r
			click: () => this.dialogConfirmed.emit()\r
		}\r
	]);\r
\r
	private toggleDetails() {\r
		this.showDetails.update(current => !current);\r
		this.detailsToggled.emit(this.showDetails());\r
	}\r
}\r
`;var y=`<h2 class="header">{{ title() }}</h2>\r
<p class="description">{{ description() }}</p>\r
\r
<div class="form">\r
	<fkt-input\r
		[field]="form.name"\r
		label="Name"\r
		placeholder="Enter your name"\r
	></fkt-input>\r
	<fkt-field-error [show]="form.name().invalid() && form.name().touched()"\r
					 [error]="form.name().errors()[0]?.message"/>\r
\r
\r
	<fkt-input\r
		[field]="form.email"\r
		label="Email"\r
		placeholder="Enter your email"\r
		type="text"\r
	></fkt-input>\r
	<fkt-field-error [show]="form.email().invalid() && form.email().touched()"\r
					 [error]="form.email().errors()[0]?.message"/>\r
</div>\r
\r
<fkt-buttons-list\r
	[actions]="actions()"\r
	fill\r
></fkt-buttons-list>\r
`;var S=`* {\r
	box-sizing: border-box;\r
}\r
\r
h2, p {\r
	margin: 0;\r
}\r
\r
.header {\r
	font-size: var(--fkt-font-size-xl);\r
	font-weight: var(--fkt-font-semibold);\r
	margin-bottom: var(--fkt-space-xs);\r
	color: var(--fkt-color-neutral-950);\r
}\r
\r
.description {\r
	color: var(--fkt-color-neutral-600);\r
	margin-bottom: var(--fkt-space-md);\r
}\r
\r
.form {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xs);\r
	margin-bottom: var(--fkt-space-xl);\r
}\r
\r
fkt-buttons-list {\r
	width: 100%;\r
}\r
`;var w=`import { Component, computed, input, output, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { Field, email, form, required, submit } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
export interface FormData {\r
	name: string;\r
	email: string;\r
}\r
\r
@Component({\r
	selector: 'demo-form-dialog',\r
	templateUrl: './fkt-form-dialog-demo.component.html',\r
	styleUrl: './fkt-form-dialog-demo.component.scss',\r
	imports: [FktInputComponent, FktButtonsListComponent, Field, FktFieldErrorComponent]\r
})\r
export class FktFormDialogDemoComponent {\r
	title = input('Form Dialog');\r
	description = input('Fill out the form below:');\r
	initialName = input('');\r
	initialEmail = input('');\r
\r
	submit = output<FormData>();\r
	cancel = output<void>();\r
\r
	private value = signal({\r
		name: "",\r
		email: "",\r
	})\r
\r
	protected form = form(this.value, path => {\r
		required(path.name, {message: "Field is required"});\r
		required(path.email, {message: "Field is required"});\r
\r
		email(path.email, {message: "Invalid email"})\r
	})\r
\r
	protected actions = computed((): FktButtonAction[] => [\r
		{\r
			identifier: 'cancel',\r
			text: 'Cancel',\r
			theme: 'stroked',\r
			click: () => {\r
				this.cancel.emit();\r
			}\r
		},\r
		{\r
			identifier: 'save',\r
			text: 'Save',\r
			theme: 'raised',\r
			click: async () => {\r
				await submit(this.form, async () => {\r
					this.submit.emit(this.value());\r
				})\r
			}\r
		},\r
	]);\r
}\r
`;var E=`<h2 class="title">{{ title() }}</h2>\r
		<p class="message">{{ message() }}</p>\r
		<fkt-buttons-list\r
			[actions]="actions()"\r
			horizontalAlignment="end"\r
		></fkt-buttons-list>`;var I=`* {\r
	box-sizing: border-box;\r
	color: var(--fkt-color-neutral-900);\r
}\r
\r
h2, p {\r
	margin: 0;\r
}\r
\r
.title {\r
	font-size: var(--fkt-font-size-xl);\r
	font-weight: var(--fkt-font-semibold);\r
	margin-bottom: var(--fkt-space-md);\r
}\r
\r
.message {\r
	color: var(--fkt-color-neutral-600);\r
	margin-bottom: var(--fkt-space-xl);\r
}\r
\r
fkt-buttons-list {\r
	width: 100%;\r
}\r
`;var T=`import { Component, input, output, computed } from '@angular/core';\r
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';\r
import { FktButtonAction } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'demo-simple-dialog',\r
	templateUrl: './fkt-simple-dialog-demo.component.html',\r
	styleUrl: './fkt-simple-dialog-demo.component.scss',\r
	imports: [FktButtonsListComponent]\r
})\r
export class FktSimpleDialogDemoComponent {\r
	title = input('Simple Dialog');\r
	message = input('This is a simple dialog with basic content.');\r
\r
	closeDialog = output<void>();\r
\r
	actions = computed((): FktButtonAction[] => [\r
		{\r
			identifier: 'close',\r
			text: 'Close',\r
			theme: 'raised',\r
			click: () => this.closeDialog.emit()\r
		}\r
	]);\r
}\r
`;var go={FktConfirmationDialogExampleComponent:{name:"FktConfirmationDialogExample",files:[{name:"fkt-confirmation-dialog-example.component.html",content:t,language:"html"},{name:"fkt-confirmation-dialog-example.component.ts",content:e,language:"typescript"},{name:"fkt-confirmation-dialog-example.component.scss",content:o,language:"css"}]},FktCustomDialogExampleComponent:{name:"FktCustomDialogExample",files:[{name:"fkt-custom-dialog-example.component.html",content:a,language:"html"},{name:"fkt-custom-dialog-example.component.ts",content:n,language:"typescript"},{name:"fkt-custom-dialog-example.component.scss",content:i,language:"css"}]},FktDialogOverviewExampleComponent:{name:"FktDialogOverviewExample",files:[{name:"fkt-dialog-overview-example.component.html",content:l,language:"html"},{name:"fkt-dialog-overview-example.component.ts",content:s,language:"typescript"},{name:"fkt-dialog-overview-example.component.scss",content:m,language:"css"}]},FktFormDialogExampleComponent:{name:"FktFormDialogExample",files:[{name:"fkt-form-dialog-example.component.html",content:r,language:"html"},{name:"fkt-form-dialog-example.component.ts",content:p,language:"typescript"},{name:"fkt-form-dialog-example.component.scss",content:c,language:"css"}]},FktFullscreenDialogExampleComponent:{name:"FktFullscreenDialogExample",files:[{name:"fkt-fullscreen-dialog-example.component.html",content:g,language:"html"},{name:"fkt-fullscreen-dialog-example.component.ts",content:f,language:"typescript"},{name:"fkt-fullscreen-dialog-example.component.scss",content:d,language:"css"}]},FktSimpleDialogExampleComponent:{name:"FktSimpleDialogExample",files:[{name:"fkt-simple-dialog-example.component.html",content:u,language:"html"},{name:"fkt-simple-dialog-example.component.ts",content:h,language:"typescript"},{name:"fkt-simple-dialog-example.component.scss",content:k,language:"css"}]},FktSmallDialogExampleComponent:{name:"FktSmallDialogExample",files:[{name:"fkt-small-dialog-example.component.html",content:D,language:"html"},{name:"fkt-small-dialog-example.component.ts",content:v,language:"typescript"},{name:"fkt-small-dialog-example.component.scss",content:x,language:"css"}]},FktCustomDialogDemoComponent:{name:"FktCustomDialogDemo",files:[{name:"fkt-custom-dialog-demo.component.html",content:F,language:"html"},{name:"fkt-custom-dialog-demo.component.ts",content:b,language:"typescript"},{name:"fkt-custom-dialog-demo.component.scss",content:C,language:"css"}]},FktFormDialogDemoComponent:{name:"FktFormDialogDemo",files:[{name:"fkt-form-dialog-demo.component.html",content:y,language:"html"},{name:"fkt-form-dialog-demo.component.ts",content:w,language:"typescript"},{name:"fkt-form-dialog-demo.component.scss",content:S,language:"css"}]},FktSimpleDialogDemoComponent:{name:"FktSimpleDialogDemo",files:[{name:"fkt-simple-dialog-demo.component.html",content:E,language:"html"},{name:"fkt-simple-dialog-demo.component.ts",content:T,language:"typescript"},{name:"fkt-simple-dialog-demo.component.scss",content:I,language:"css"}]}};export{go as default};
