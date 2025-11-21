import"./chunk-ENRHZQ2S.js";var t=`<div class="container">\r
			<div #infoButton>\r
				<fkt-button\r
					text="Info Tooltip"\r
					theme="stroked"\r
					color="primary"\r
					(click)="openTooltip(infoButton, 'info', 'This is an informational tooltip message.')"\r
				></fkt-button>\r
			</div>\r
\r
			<div #warningButton>\r
				<fkt-button\r
					text="Warning Tooltip"\r
					theme="stroked"\r
					color="accent"\r
					(click)="openTooltip(warningButton, 'warning', 'This is a warning tooltip message.')"\r
				></fkt-button>\r
			</div>\r
\r
			<div #errorButton>\r
				<fkt-button\r
					text="Error Tooltip"\r
					theme="stroked"\r
					color="danger"\r
					(click)="openTooltip(errorButton, 'danger', 'This is an error tooltip message.')"\r
				></fkt-button>\r
			</div>\r
\r
			<div #successButton>\r
				<fkt-button\r
					text="Success Tooltip"\r
					theme="stroked"\r
					color="success"\r
					(click)="openTooltip(successButton, 'success', 'This is a success tooltip message.')"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var e=`.container {\r
	display: grid;\r
	grid-template-columns: repeat(2, minmax(0, 1fr));\r
	gap: var(--fkt-space-sm);\r
	width: fit-content;\r
}\r
`;var o=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';\r
import { FktGeometryPosition } from 'frakton-ng/internal/types';\r
import {\r
	FktTooltipOverlayDialogComponent\r
} from '../dialog/fkt-tooltip-overlay-dialog/fkt-tooltip-overlay-dialog.component';\r
\r
\r
@Component({\r
	selector: 'custom-tooltip-overlay-example',\r
	templateUrl: './fkt-custom-tooltip-overlay-example.component.html',\r
	styleUrl: './fkt-custom-tooltip-overlay-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktCustomTooltipOverlayExampleComponent {\r
	private overlayService = inject(FktOverlayService);\r
\r
	private overlayRef: FktOverlayRef<FktTooltipOverlayDialogComponent> | null = null;\r
\r
	openTooltip(\r
		nativeElement: HTMLElement,\r
		type: 'info' | 'warning' | 'danger' | 'success',\r
		text: string,\r
		position: FktGeometryPosition = 'bottom-center'\r
	) {\r
		if (this.overlayRef) return;\r
\r
		const colors: Record<'info' | 'warning' | 'danger' | 'success', string> = {\r
			info: "#3b82f6",\r
			warning: "#eab308",\r
			danger: "#ef4444",\r
			success: "#22c55e",\r
		}\r
\r
		this.overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktTooltipOverlayDialogComponent,\r
			data: {\r
				text: text,\r
				type: type\r
			},\r
			panelOptions: {\r
				position: position,\r
				disableAutoReposition: true,\r
				padding: '0.5rem 1rem',\r
				backgroundColor: colors[type],\r
				borderRadius: '6px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',\r
				maxHeight: 'fit-content',\r
				minWidth: 'fit-content',\r
				width: 'fit-content',\r
				onAutoClose: () => {\r
					this.overlayRef = null;\r
				}\r
			}\r
		});\r
	}\r
}\r
`;var n=`<div class="container">\r
			<div #fileActionsButton>\r
				<fkt-button\r
					text="File Actions"\r
					theme="stroked"\r
					color="primary"\r
					iconPosition="right"\r
					icon="chevron-down"\r
					(click)="openFileActionsMenu(fileActionsButton)"\r
				></fkt-button>\r
			</div>\r
			<div #userProfileButton>\r
				<fkt-button\r
					text="User Profile"\r
					theme="stroked"\r
					color="success"\r
					iconPosition="right"\r
					icon="chevron-down"\r
					(click)="openUserProfileMenu(userProfileButton)"\r
				></fkt-button>\r
			</div>\r
			<div #settingsButton>\r
				<fkt-button\r
					text="Settings"\r
					theme="stroked"\r
					color="primary"\r
					iconPosition="right"\r
					icon="chevron-down"\r
					(click)="openSettingsMenu(settingsButton)"\r
				></fkt-button>\r
			</div>\r
			<div #adminButton>\r
				<fkt-button\r
					text="Admin Actions"\r
					theme="stroked"\r
					color="danger"\r
					iconPosition="right"\r
					icon="chevron-down"\r
					(click)="openAdminMenu(adminButton)"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var a=`.container {\r
	display: grid;\r
	grid-template-columns: repeat(2, minmax(0, 1fr));\r
	gap: var(--fkt-space-md);\r
}\r
`;var r=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktOverlayService } from 'frakton-ng/overlay';\r
import { FktIconName } from 'frakton-ng/icon';\r
import {\r
	FktDropdownOverlayDialogComponent\r
} from '../dialog/fkt-dropdown-overlay-dialog/fkt-dropdown-overlay-dialog.component';\r
\r
export interface DropdownOption {\r
	label: string;\r
	icon: FktIconName;\r
	action: string;\r
	disabled?: boolean;\r
}\r
\r
@Component({\r
	selector: 'dropdown-overlay-example',\r
	templateUrl: './fkt-dropdown-overlay-example.component.html',\r
	styleUrl: './fkt-dropdown-overlay-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktDropdownOverlayExampleComponent {\r
	private overlayService = inject(FktOverlayService);\r
\r
	openFileActionsMenu(nativeElement: HTMLElement) {\r
		const options: DropdownOption[] = [\r
			{ label: 'New File', icon: 'document-plus', action: 'new' },\r
			{ label: 'Open File', icon: 'folder-open', action: 'open' },\r
			{ label: 'Save', icon: 'document-check', action: 'save' },\r
			{ label: 'Save As...', icon: 'document-duplicate', action: 'saveas' },\r
			{ label: 'Export', icon: 'arrow-up-tray', action: 'export' },\r
		];\r
\r
		this.openDropdownMenu(nativeElement, options, 'File action');\r
	}\r
\r
	openUserProfileMenu(nativeElement: HTMLElement) {\r
		const options: DropdownOption[] = [\r
			{ label: 'View Profile', icon: 'user', action: 'profile' },\r
			{ label: 'Edit Profile', icon: 'pencil', action: 'edit' },\r
			{ label: 'Settings', icon: 'cog-6-tooth', action: 'settings' },\r
			{ label: 'Notifications', icon: 'bell', action: 'notifications' },\r
			{ label: 'Sign Out', icon: 'arrow-right-end-on-rectangle', action: 'signout' },\r
		];\r
\r
		this.openDropdownMenu(nativeElement, options, 'Profile action');\r
	}\r
\r
	openSettingsMenu(nativeElement: HTMLElement) {\r
		const options: DropdownOption[] = [\r
			{ label: 'General', icon: 'adjustments-horizontal', action: 'general' },\r
			{ label: 'Appearance', icon: 'swatch', action: 'appearance' },\r
			{ label: 'Privacy', icon: 'shield-check', action: 'privacy' },\r
			{ label: 'Security', icon: 'lock-closed', action: 'security' },\r
			{ label: 'Advanced', icon: 'wrench-screwdriver', action: 'advanced', disabled: true },\r
		];\r
\r
		this.openDropdownMenu(nativeElement, options, 'Settings');\r
	}\r
\r
	openAdminMenu(nativeElement: HTMLElement) {\r
		const options: DropdownOption[] = [\r
			{ label: 'User Management', icon: 'users', action: 'users' },\r
			{ label: 'System Logs', icon: 'document-text', action: 'logs' },\r
			{ label: 'Database', icon: 'circle-stack', action: 'database' },\r
			{ label: 'Backup', icon: 'archive-box', action: 'backup' },\r
			{ label: 'System Reset', icon: 'exclamation-triangle', action: 'reset' },\r
		];\r
\r
		this.openDropdownMenu(nativeElement, options, 'Admin action');\r
	}\r
\r
	private openDropdownMenu(nativeElement: HTMLElement, options: DropdownOption[], actionType: string) {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktDropdownOverlayDialogComponent,\r
			data: {\r
				options: options,\r
				onOptionSelect: (action: string) => {\r
					console.log(\`\${actionType} selected:\`, action);\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: 'bottom-start',\r
				disableAutoReposition: true,\r
				width: 'fit-content',\r
				padding: '0',\r
				borderRadius: '8px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'\r
			}\r
		});\r
	}\r
}\r
`;var i=`<div class="container">\r
			<div #contactFormButton>\r
				<fkt-button\r
					text="Contact Form"\r
					theme="stroked"\r
					color="primary"\r
					(click)="openContactForm(contactFormButton)"\r
				></fkt-button>\r
			</div>\r
			<div #feedbackFormButton>\r
				<fkt-button\r
					text="Feedback Form"\r
					theme="stroked"\r
					color="success"\r
					(click)="openFeedbackForm(feedbackFormButton)"\r
				></fkt-button>\r
			</div>\r
\r
			<div #settingsFormButton>\r
				<fkt-button\r
					text="User Settings"\r
					theme="stroked"\r
					color="primary"\r
					(click)="openSettingsForm(settingsFormButton)"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var l=`.container {\r
	display: flex;\r
	gap: var(--fkt-space-md);\r
	justify-content: center;\r
	align-items: center;\r
}\r
`;var s=`import { Component, inject } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktOverlayService } from 'frakton-ng/overlay';\r
import { FktFormOverlayDialogComponent } from '../dialog/fkt-form-overlay-dialog/fkt-form-overlay-dialog.component';\r
\r
export interface FormData {\r
	name: string;\r
	email: string;\r
	message: string;\r
}\r
\r
@Component({\r
	selector: 'form-overlay-example',\r
	templateUrl: './fkt-form-overlay-example.component.html',\r
	styleUrl: './fkt-form-overlay-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktFormOverlayExampleComponent {\r
	private overlayService = inject(FktOverlayService);\r
\r
	openContactForm(nativeElement: HTMLElement) {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktFormOverlayDialogComponent,\r
			data: {\r
				title: 'Contact Us',\r
				description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',\r
				onFormSubmit: (formData: FormData) => {\r
					console.log('Contact form submitted:', formData);\r
					alert(\`Thank you \${formData.name}! We received your message and will get back to you soon.\`);\r
					overlayRef.close();\r
				},\r
				onFormCancel: () => {\r
					console.log('Contact form cancelled');\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: 'bottom-start',\r
				disableAutoReposition: true,\r
				padding: '0',\r
				width: 'fit-content',\r
				maxHeight: 'fit-content',\r
				borderRadius: '8px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'\r
			}\r
		});\r
	}\r
\r
	openFeedbackForm(nativeElement: HTMLElement) {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktFormOverlayDialogComponent,\r
			data: {\r
				title: 'Share Your Feedback',\r
				description: 'Help us improve by sharing your thoughts and suggestions.',\r
				initialData: {\r
					name: 'John Doe',\r
					email: 'john@example.com',\r
					message: '',\r
				},\r
				onFormSubmit: (formData: FormData) => {\r
					console.log('Feedback form submitted:', formData);\r
					alert(\`Thanks for your feedback, \${formData.name}!\`);\r
					overlayRef.close();\r
				},\r
				onFormCancel: () => {\r
					console.log('Feedback form cancelled');\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: 'bottom-start',\r
				disableAutoReposition: true,\r
				padding: '0',\r
				width: 'fit-content',\r
				maxHeight: 'fit-content',\r
				borderRadius: '8px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'\r
			}\r
		});\r
	}\r
\r
	openSettingsForm(nativeElement: HTMLElement) {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktFormOverlayDialogComponent,\r
			data: {\r
				title: 'Update Profile',\r
				description: 'Update your profile information below.',\r
				initialData: {\r
					name: 'Jane Smith',\r
					email: 'jane.smith@company.com',\r
					message: 'Full-stack developer with 5+ years of experience.',\r
				},\r
				onFormSubmit: (formData: FormData) => {\r
					console.log('Settings form submitted:', formData);\r
					alert(\`Profile updated successfully, \${formData.name}!\`);\r
					overlayRef.close();\r
				},\r
				onFormCancel: () => {\r
					console.log('Settings form cancelled');\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: 'bottom-start',\r
				disableAutoReposition: true,\r
				padding: '0',\r
				width: 'fit-content',\r
				maxHeight: 'fit-content',\r
				borderRadius: '8px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'\r
			}\r
		});\r
	}\r
}\r
`;var m=`<div class="header">\r
			<h4 class="header__title">Shared State</h4>\r
			<hr>\r
			<div class="header__info">\r
				<span>Counter: <fkt-badge [text]="sharedCounter().toString()" color="success"></fkt-badge></span>\r
				<span>Items: <fkt-badge [text]="sharedItems().length.toString()" color="warning"></fkt-badge></span>\r
			</div>\r
			<div class="header__description">\r
				Changes made in overlays will update this shared state automatically.\r
			</div>\r
		</div>\r
		<hr>\r
\r
		<div class="actions">\r
			<fkt-button\r
				text="Reset All"\r
				theme="stroked"\r
				color="danger"\r
				(click)="resetAll()"\r
			></fkt-button>\r
			<fkt-button\r
				text="Counter Overlay"\r
				theme="stroked"\r
				color="primary"\r
				(click)="openCounterOverlay()"\r
			></fkt-button>\r
		</div>\r
`;var c=`* {\r
	box-sizing: border-box;\r
}\r
\r
h3, h4, p {\r
	margin: 0;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
:host {\r
	box-shadow: var(--fkt-shadow-md);\r
	padding: var(--fkt-space-md);\r
	border: 1px solid var(--fkt-color-neutral-200);\r
	border-radius: var(--fkt-radius-md);\r
	display: block;\r
}\r
\r
.header {\r
	border-radius: var(--fkt-radius-lg);\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-sm);\r
	margin-bottom: var(--fkt-space-md);\r
\r
	&__title {\r
		font-weight: var(--fkt-font-semibold);\r
		font-size: var(--fkt-font-size-lg);\r
	}\r
\r
	&__info {\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-md);\r
\r
		span {\r
			display: flex;\r
			align-items: center;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	&__description {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
\r
.actions {\r
	display: flex;\r
	margin-top: var(--fkt-space-md);\r
	gap: var(--fkt-space-xs);\r
	justify-content: flex-end;\r
}\r
`;var p=`import { Component, ElementRef, inject, signal } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktOverlayService } from 'frakton-ng/overlay';\r
import {\r
	FktInteractiveOverlayDialogComponent\r
} from '../dialog/fkt-interactive-overlay-dialog/fkt-interactive-overlay-dialog.component';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
\r
\r
@Component({\r
	selector: 'interactive-overlay-example',\r
	templateUrl: './fkt-interactive-overlay-example.component.html',\r
	styleUrl: './fkt-interactive-overlay-example.component.scss',\r
	imports: [FktButtonComponent, FktBadgeComponent]\r
})\r
export class FktInteractiveOverlayExampleComponent {\r
	private overlayService = inject(FktOverlayService);\r
\r
	sharedCounter = signal(0);\r
	sharedItems = signal<string[]>(['Initial Item']);\r
\r
	private elementRef = inject(ElementRef);\r
\r
	openCounterOverlay() {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: this.elementRef,\r
			component: FktInteractiveOverlayDialogComponent,\r
			data: {\r
				title: 'Counter Demo',\r
				description: 'This overlay demonstrates reactive counter functionality.',\r
				counter: this.sharedCounter,\r
				currentItems: this.sharedItems,\r
				onDone: () => {\r
					console.log('Counter overlay done');\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: 'bottom-center',\r
				padding: '0',\r
				width: '600px',\r
				disableAutoReposition: true,\r
				maxHeight: 'fit-content',\r
				borderRadius: '8px',\r
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'\r
			}\r
		});\r
	}\r
\r
	resetAll() {\r
		this.sharedCounter.set(0);\r
		this.sharedItems.set(['Initial Item']);\r
	}\r
}\r
`;var d=`<div class="container">\r
			<div #left>\r
				<fkt-button\r
					text="Left Center"\r
					theme="stroked"\r
					color="accent"\r
					(click)="openOverlay(left, 'left-center')"\r
				></fkt-button>\r
			</div>\r
			<div #right>\r
				<fkt-button\r
					text="Right Center"\r
					theme="stroked"\r
					color="primary"\r
					(click)="openOverlay(right, 'right-center')"\r
				></fkt-button>\r
			</div>\r
			<div #top>\r
				<fkt-button\r
					text="Top Center"\r
					theme="stroked"\r
					color="success"\r
					(click)="openOverlay(top, 'top-center')"\r
				></fkt-button>\r
			</div>\r
			<div #bottom>\r
				<fkt-button\r
					text="Bottom Center (Default)"\r
					theme="stroked"\r
					(click)="openOverlay(bottom, 'bottom-center')"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var f=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	align-items: center;\r
	gap: var(--fkt-space-xs);\r
\r
	& > * {\r
		width: fit-content;\r
	}\r
}\r
`;var v=`import { Component, inject, signal } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktOverlayService } from 'frakton-ng/overlay';\r
import { FktGeometryPosition } from 'frakton-ng/internal/types';\r
import {\r
	FktSimpleOverlayDialogComponent\r
} from '../dialog/fkt-simple-overlay-dialog/fkt-simple-overlay-dialog.component';\r
\r
\r
@Component({\r
	selector: 'simple-overlay-example',\r
	templateUrl: './fkt-simple-overlay-example.component.html',\r
	styleUrl: './fkt-simple-overlay-example.component.scss',\r
	imports: [FktButtonComponent]\r
})\r
export class FktSimpleOverlayExampleComponent {\r
	private overlayService = inject(FktOverlayService);\r
\r
	messageSignal = signal('This overlay is positioned relative to the button!');\r
\r
	openOverlay(nativeElement: HTMLElement, position: FktGeometryPosition) {\r
		const overlayRef = this.overlayService.open({\r
			anchorElementRef: {nativeElement},\r
			component: FktSimpleOverlayDialogComponent,\r
			data: {\r
				title: \`Simple Overlay - \${position}\`,\r
				message: this.messageSignal,\r
				onClose: () => {\r
					console.log('Simple overlay closed');\r
					overlayRef.close();\r
				}\r
			},\r
			panelOptions: {\r
				position: position,\r
				disableAutoReposition: true,\r
				width: '300px',\r
				padding: '0',\r
				borderRadius: '8px'\r
			}\r
		});\r
	}\r
}\r
`;var g=`<div class="container">\r
			@for (option of options(); track option.action) {\r
				<fkt-button\r
					[text]="option.label"\r
					[icon]="option.icon"\r
					[disabled]="option.disabled ?? false"\r
					(click)="handleOptionClick(option)"\r
				>\r
				</fkt-button>\r
			}\r
		</div>`;var k=`.container {\r
	padding: var(--fkt-space-md);\r
\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xs);\r
}\r
`;var u=`import { Component, input, output } from '@angular/core';\r
import { DropdownOption } from '../../dropdown-overlay-example/fkt-dropdown-overlay-example.component';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'fkt-dropdown-overlay-dialog',\r
	imports: [FktButtonComponent],\r
	templateUrl: './fkt-dropdown-overlay-dialog.component.html',\r
	styleUrl: './fkt-dropdown-overlay-dialog.component.scss'\r
})\r
export class FktDropdownOverlayDialogComponent {\r
	options = input<DropdownOption[]>([]);\r
\r
	onOptionSelect = output<string>();\r
\r
	handleOptionClick(option: DropdownOption) {\r
		if (!option.disabled) {\r
			this.onOptionSelect.emit(option.action);\r
		}\r
	}\r
}\r
`;var y=`<div class="container">\r
	<div class="container__header">\r
		<fkt-icon name="document-text" class="container__header-icon"></fkt-icon>\r
		<h3 class="container__header-title">{{ title() }}</h3>\r
	</div>\r
\r
	<p class="container__description">{{ description() }}</p>\r
\r
	<form class="container__form" (ngSubmit)="handleSubmit()">\r
		<fkt-input\r
			[field]="form.name"\r
			label="Name"\r
			placeholder="Enter your name"\r
		></fkt-input>\r
		<fkt-field-error [show]="form.name().invalid() && form.name().touched()"\r
						 [error]="form.name().errors()[0]?.message"/>\r
\r
		<fkt-input\r
			[field]="form.email"\r
			label="Email"\r
			placeholder="Enter your email"\r
			type="email"\r
		></fkt-input>\r
		<fkt-field-error [show]="form.email().invalid() && form.email().touched()"\r
						 [error]="form.email().errors()[0]?.message"/>\r
\r
		<fkt-textarea\r
			[field]="form.message"\r
			label="Message"\r
			placeholder="Enter a message"\r
		></fkt-textarea>\r
		<fkt-field-error [show]="form.message().invalid() && form.message().touched()"\r
						 [error]="form.message().errors()[0]?.message"/>\r
\r
		<div class="container__form-actions">\r
			<fkt-button\r
				text="Cancel"\r
				theme="stroked"\r
				type="button"\r
				(click)="handleCancel()"\r
			></fkt-button>\r
			<fkt-button\r
				text="Submit"\r
				theme="raised"\r
				type="submit"\r
				[disabled]="!form().valid()"\r
			></fkt-button>\r
		</div>\r
	</form>\r
</div>\r
`;var h=`* {\r
	box-sizing: border-box;\r
}\r
\r
h3 {\r
	margin: 0;\r
}\r
\r
.container {\r
	padding: var(--fkt-space-md);\r
	margin-top: var(--fkt-space-md);\r
	min-width: 20rem;\r
\r
	&__header {\r
		display: flex;\r
		padding: var(--fkt-space-xs);\r
		gap: var(--fkt-space-xs);\r
		align-items: center;\r
		border: solid 1px var(--fkt-color-neutral-200);\r
\r
		&-icon {\r
			color: var(--fkt-color-neutral-600);\r
		}\r
\r
		&-title {\r
			font-size: var(--fkt-font-size-lg);\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-900);\r
		}\r
	}\r
\r
	&__description {\r
		font-size: var(--fkt-font-size-sm);\r
		line-height: 1.25rem;\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__form {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
\r
		&-actions {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
			justify-content: flex-end;\r
			padding-top: var(--fkt-space-xs);\r
		}\r
	}\r
}\r
`;var x=`import { Component, input, linkedSignal, output } from '@angular/core';\r
import { FormData } from '../../form-overlay-example/fkt-form-overlay-example.component';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FormsModule } from '@angular/forms';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Field, email, form, required, submit } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'fkt-form-overlay-dialog',\r
	imports: [\r
		FktInputComponent,\r
		FormsModule,\r
		FktIconComponent,\r
		FktButtonComponent,\r
		FktTextareaComponent,\r
		Field,\r
		FktFieldErrorComponent\r
	],\r
	templateUrl: './fkt-form-overlay-dialog.component.html',\r
	styleUrl: './fkt-form-overlay-dialog.component.scss'\r
})\r
export class FktFormOverlayDialogComponent {\r
	title = input('Contact Form');\r
	description = input('Please fill out your information below:');\r
	initialData = input<FormData>();\r
\r
	onFormSubmit = output<FormData>();\r
	onFormCancel = output<void>();\r
\r
	private value = linkedSignal(() => {\r
		const initialData = this.initialData();\r
\r
		if (!initialData)\r
			return {\r
				name: '',\r
				email: '',\r
				message: ''\r
			}\r
\r
		return initialData;\r
	});\r
\r
	protected form = form(this.value, path => {\r
		required(path.name, {message: "Field is required"});\r
		required(path.email, {message: "Field is required"});\r
		required(path.name, {message: "Field is required"});\r
\r
		email(path.email, {message: "E-mail invalid"})\r
	})\r
\r
	protected async handleSubmit() {\r
		await submit(this.form, async () => {\r
			this.onFormSubmit.emit(this.form().value());\r
		});\r
	}\r
\r
	protected handleCancel() {\r
		this.onFormCancel.emit();\r
	}\r
}\r
`;var b=`<div class="container">\r
			<div class="container__header">\r
				<div>\r
					<fkt-icon name="cursor-arrow-ripple" size="20" class="container__header-icon"></fkt-icon>\r
					<h3 class="container__header-title">{{ title() }}</h3>\r
				</div>\r
			</div>\r
\r
			<p class="container__description">{{ description() }}</p>\r
\r
			<hr>\r
\r
			<div class="container__counter">\r
				<div class="container__counter-title">\r
					<h4>\r
						Counter:\r
					</h4>\r
					<fkt-badge\r
						[text]="counter().toString()"\r
						color="success"\r
					></fkt-badge>\r
				</div>\r
\r
				<div class="container__counter-actions">\r
					<fkt-button\r
						icon="minus-circle"\r
						theme="basic"\r
						color="danger"\r
						ariaLabel="Decrease counter"\r
						(click)="decrement()"\r
						[disabled]="counter() <= 0"\r
					></fkt-button>\r
					<fkt-button\r
						icon="plus-circle"\r
						theme="basic"\r
						color="success"\r
						ariaLabel="Increase counter"\r
						(click)="increment()"\r
					></fkt-button>\r
					<fkt-button\r
						text="Reset"\r
						theme="stroked"\r
						color="primary"\r
						size="sm"\r
						(click)="reset()"\r
					></fkt-button>\r
				</div>\r
			</div>\r
			<hr>\r
\r
			@if (currentItems().length > 0) {\r
				<div class="container__items">\r
					<h4 class="container__items-title">Items</h4>\r
					<div class="container__items-list">\r
						@for (item of currentItems(); track $index) {\r
							<div class="container__items-item">\r
								<span>{{ item }}</span>\r
								<fkt-button\r
									icon="x-mark"\r
									theme="basic"\r
									color="danger"\r
									ariaLabel="Remove item"\r
									[disabled]="currentItems().length <= 1"\r
									(click)="removeItem($index)"\r
								/>\r
							</div>\r
						}\r
					</div>\r
				</div>\r
			}\r
\r
			<div class="container__items-actions">\r
				<fkt-button\r
					text="Add Item"\r
					theme="stroked"\r
					color="primary"\r
					(click)="addItem()"\r
				></fkt-button>\r
				<fkt-button\r
					text="Clear All"\r
					theme="stroked"\r
					color="danger"\r
					(click)="clearItems()"\r
					[disabled]="currentItems().length <= 1"\r
				></fkt-button>\r
			</div>\r
\r
			<hr>\r
\r
			<div class="container__actions">\r
				<fkt-button\r
					text="Done"\r
					theme="raised"\r
					(click)="handleDone()"\r
				></fkt-button>\r
			</div>\r
		</div>\r
`;var F=`* {\r
	box-sizing: border-box;\r
}\r
\r
h3, h4, p {\r
	margin: 0;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
.container {\r
	padding: var(--fkt-space-md);\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
	min-width: 20rem;\r
\r
	&__header {\r
		display: flex;\r
		align-items: center;\r
		justify-content: space-between;\r
\r
		& > div {\r
			display: flex;\r
			align-items: center;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		&-icon {\r
			color: var(--fkt-color-neutral-600);\r
		}\r
\r
		&-title {\r
			color: var(--fkt-color-neutral-900);\r
			font-size: var(--fkt-font-size-lg);\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
	}\r
\r
	&__description {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__counter {\r
		border-radius: var(--border-radius-lg);\r
		display: flex;\r
		flex-direction: column;\r
		align-items: center;\r
		gap: var(--fkt-space-xs);\r
\r
		&-title {\r
			margin-bottom: var(--fkt-space-xs);\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
			align-items: center;\r
\r
			h4 {\r
				font-size: var(--fkt-font-size-md);\r
				font-weight: var(--fkt-font-semibold);\r
				color: var(--fkt-color-neutral-700);\r
			}\r
		}\r
\r
		&-actions {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	&__items {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		&-title {\r
			font-size: var(--fkt-font-size-md);\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
		}\r
\r
		&-list {\r
			max-height: 12rem;\r
			overflow-y: auto;\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		&-item {\r
			display: flex;\r
			align-items: center;\r
			justify-content: space-between;\r
			padding: var(--fkt-space-xs) var(--fkt-space-sm);\r
			border: solid 1px var(--fkt-color-neutral-300);\r
			border-radius: var(--fkt-radius-md);\r
\r
			span {\r
				font-size: var(--fkt-font-size-sm);\r
			}\r
		}\r
	}\r
\r
	&__items-actions {\r
		display: flex;\r
		gap: var(--fkt-space-xs);\r
	}\r
\r
	&__actions {\r
		display: flex;\r
		gap: var(--fkt-space-xs);\r
		justify-content: flex-end;\r
		padding-top: var(--fkt-space-xs);\r
	}\r
}\r
`;var w=`import { Component, input, model, output } from '@angular/core';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'fkt-interactive-overlay-dialog',\r
	imports: [\r
		FktBadgeComponent,\r
		FktIconComponent,\r
		FktButtonComponent\r
	],\r
	templateUrl: './fkt-interactive-overlay-dialog.component.html',\r
	styleUrl: './fkt-interactive-overlay-dialog.component.scss'\r
})\r
export class FktInteractiveOverlayDialogComponent {\r
	title = input('Interactive Demo');\r
	description = input('This overlay demonstrates reactive signals and interactive components.');\r
\r
	counter = model(0);\r
	currentItems = model<string[]>([]);\r
\r
	onDone = output<void>();\r
\r
	increment() {\r
		const newValue = this.counter() + 1;\r
		this.counter.set(newValue);\r
	}\r
\r
	decrement() {\r
		if (this.counter() > 0) {\r
			const newValue = this.counter() - 1;\r
			this.counter.set(newValue);\r
		}\r
	}\r
\r
	reset() {\r
		this.counter.set(0);\r
	}\r
\r
	addItem() {\r
		const itemNumber = this.currentItems().length + 1;\r
		const newItem = \`Item \${itemNumber}\`;\r
		const newItems = [...this.currentItems(), newItem];\r
		this.currentItems.set(newItems);\r
	}\r
\r
	removeItem(index: number) {\r
		const newItems = this.currentItems().filter((_, i) => i !== index);\r
		this.currentItems.set(newItems);\r
	}\r
\r
	clearItems() {\r
		this.currentItems.set(['Initial Item']);\r
	}\r
\r
	handleDone() {\r
		this.onDone.emit();\r
	}\r
}\r
`;var C=`<div class="container">\r
			<h3 class="container__title">{{ title() }}</h3>\r
			<p class="container__description">{{ message() }}</p>\r
			<div class="container__actions">\r
				<fkt-button\r
					text="Close"\r
					theme="stroked"\r
					(click)="handleClose()"\r
				></fkt-button>\r
			</div>\r
		</div>`;var O=`box-sizing {\r
	box-sizing: border-box;\r
}\r
\r
h3, p {\r
	margin: 0;\r
}\r
\r
.container {\r
	padding: var(--fkt-space-md);\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-sm);\r
\r
	&__title {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	&__description {\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__actions {\r
		display: flex;\r
		gap: var(--fkt-space-xs);\r
		justify-content: flex-end;\r
	}\r
}\r
`;var D=`import { Component, input, output } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'fkt-simple-overlay-dialog',\r
	imports: [\r
		FktButtonComponent\r
	],\r
	templateUrl: './fkt-simple-overlay-dialog.component.html',\r
	styleUrl: './fkt-simple-overlay-dialog.component.scss'\r
})\r
export class FktSimpleOverlayDialogComponent {\r
	title = input('Simple Overlay');\r
	message = input('This is a basic overlay example with signal support.');\r
\r
	onClose = output<void>();\r
\r
	handleClose() {\r
		this.onClose.emit();\r
	}\r
}\r
`;var S=`<div class="container">\r
	@if (type() === 'info') {\r
		<fkt-icon name="information-circle" size="16"></fkt-icon>\r
	}\r
	@if (type() === 'warning') {\r
		<fkt-icon name="exclamation-triangle" size="16"></fkt-icon>\r
	}\r
	@if (type() === 'danger') {\r
		<fkt-icon name="x-circle" size="16"></fkt-icon>\r
	}\r
	@if (type() === 'success') {\r
		<fkt-icon name="check-circle" size="16"></fkt-icon>\r
	}\r
	<span class="container__text">{{ text() }}</span>\r
</div>\r
`;var _=`.container {\r
	display: flex;\r
	gap: var(--fkt-space-xs);\r
	align-items: center;\r
	color: var(--fkt-color-neutral-100);\r
\r
	&__text {\r
		font-weight: var(--fkt-font-semibold);\r
\r
	}\r
}\r
`;var E=`import { Component, input } from '@angular/core';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
	selector: 'fkt-tooltip-overlay-dialog',\r
	imports: [\r
		FktIconComponent\r
	],\r
	templateUrl: './fkt-tooltip-overlay-dialog.component.html',\r
	styleUrl: './fkt-tooltip-overlay-dialog.component.scss'\r
})\r
export class FktTooltipOverlayDialogComponent {\r
	text = input('Tooltip message');\r
	type = input<'info' | 'warning' | 'danger' | 'success'>('info');\r
}\r
`;var de={FktCustomTooltipOverlayExampleComponent:{name:"FktCustomTooltipOverlayExample",files:[{name:"fkt-custom-tooltip-overlay-example.component.html",content:t,language:"html"},{name:"fkt-custom-tooltip-overlay-example.component.ts",content:o,language:"typescript"},{name:"fkt-custom-tooltip-overlay-example.component.scss",content:e,language:"css"}]},FktDropdownOverlayExampleComponent:{name:"FktDropdownOverlayExample",files:[{name:"fkt-dropdown-overlay-example.component.html",content:n,language:"html"},{name:"fkt-dropdown-overlay-example.component.ts",content:r,language:"typescript"},{name:"fkt-dropdown-overlay-example.component.scss",content:a,language:"css"}]},FktFormOverlayExampleComponent:{name:"FktFormOverlayExample",files:[{name:"fkt-form-overlay-example.component.html",content:i,language:"html"},{name:"fkt-form-overlay-example.component.ts",content:s,language:"typescript"},{name:"fkt-form-overlay-example.component.scss",content:l,language:"css"}]},FktInteractiveOverlayExampleComponent:{name:"FktInteractiveOverlayExample",files:[{name:"fkt-interactive-overlay-example.component.html",content:m,language:"html"},{name:"fkt-interactive-overlay-example.component.ts",content:p,language:"typescript"},{name:"fkt-interactive-overlay-example.component.scss",content:c,language:"css"}]},FktSimpleOverlayExampleComponent:{name:"FktSimpleOverlayExample",files:[{name:"fkt-simple-overlay-example.component.html",content:d,language:"html"},{name:"fkt-simple-overlay-example.component.ts",content:v,language:"typescript"},{name:"fkt-simple-overlay-example.component.scss",content:f,language:"css"}]},FktDropdownOverlayDialogComponent:{name:"FktDropdownOverlayDialog",files:[{name:"fkt-dropdown-overlay-dialog.component.html",content:g,language:"html"},{name:"fkt-dropdown-overlay-dialog.component.ts",content:u,language:"typescript"},{name:"fkt-dropdown-overlay-dialog.component.scss",content:k,language:"css"}]},FktFormOverlayDialogComponent:{name:"FktFormOverlayDialog",files:[{name:"fkt-form-overlay-dialog.component.html",content:y,language:"html"},{name:"fkt-form-overlay-dialog.component.ts",content:x,language:"typescript"},{name:"fkt-form-overlay-dialog.component.scss",content:h,language:"css"}]},FktInteractiveOverlayDialogComponent:{name:"FktInteractiveOverlayDialog",files:[{name:"fkt-interactive-overlay-dialog.component.html",content:b,language:"html"},{name:"fkt-interactive-overlay-dialog.component.ts",content:w,language:"typescript"},{name:"fkt-interactive-overlay-dialog.component.scss",content:F,language:"css"}]},FktSimpleOverlayDialogComponent:{name:"FktSimpleOverlayDialog",files:[{name:"fkt-simple-overlay-dialog.component.html",content:C,language:"html"},{name:"fkt-simple-overlay-dialog.component.ts",content:D,language:"typescript"},{name:"fkt-simple-overlay-dialog.component.scss",content:O,language:"css"}]},FktTooltipOverlayDialogComponent:{name:"FktTooltipOverlayDialog",files:[{name:"fkt-tooltip-overlay-dialog.component.html",content:S,language:"html"},{name:"fkt-tooltip-overlay-dialog.component.ts",content:E,language:"typescript"},{name:"fkt-tooltip-overlay-dialog.component.scss",content:_,language:"css"}]}};export{de as default};
