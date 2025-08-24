import { Component, inject, input, output } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktOverlayService } from '../fkt-overlay.service';
import { FktIconName } from '../../../shared/types';
import { FktIconComponent } from '../../icon';

export interface DropdownOption {
	label: string;
	icon: FktIconName;
	action: string;
	disabled?: boolean;
}

@Component({
	selector: 'fkt-dropdown-menu-demo',
	template: `
		<div class="py-1">
			@for(option of options(); track option.action) {
				<button
					class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
					[disabled]="option.disabled"
					(click)="handleOptionClick(option)"
				>
					<fkt-icon [name]="option.icon" size="16"></fkt-icon>
					{{option.label}}
				</button>
			}
		</div>
	`,
	standalone: true,
	imports: [FktIconComponent]
})
export class FktDropdownMenuDemoComponent {
	options = input<DropdownOption[]>([]);

	onOptionSelect = output<string>();

	handleOptionClick(option: DropdownOption) {
		if (!option.disabled) {
			this.onOptionSelect.emit(option.action);
		}
	}
}

@Component({
	selector: 'dropdown-overlay-example',
	template: `
		<div class="grid grid-cols-2 gap-4">
			<div #fileActionsButton>
				<fkt-button
					text="File Actions ↓"
					theme="stroked"
					color="primary"
					(click)="openFileActionsMenu(fileActionsButton)"
				></fkt-button>
			</div>
			<div #userProfileButton>
				<fkt-button
					text="User Profile ↓"
					theme="stroked"
					color="green"
					(click)="openUserProfileMenu(userProfileButton)"
				></fkt-button>
			</div>
			<div #settingsButton>
				<fkt-button
					text="Settings ↓"
					theme="stroked"
					color="primary"
					(click)="openSettingsMenu(settingsButton)"
				></fkt-button>
			</div>
			<div #adminButton>
				<fkt-button
					text="Admin Actions ↓"
					theme="stroked"
					color="red"
					(click)="openAdminMenu(adminButton)"
				></fkt-button>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktDropdownOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	openFileActionsMenu(nativeElement: HTMLElement) {
		const options: DropdownOption[] = [
			{ label: 'New File', icon: 'document-plus', action: 'new' },
			{ label: 'Open File', icon: 'folder-open', action: 'open' },
			{ label: 'Save', icon: 'document-check', action: 'save' },
			{ label: 'Save As...', icon: 'document-duplicate', action: 'saveas' },
			{ label: 'Export', icon: 'arrow-up-tray', action: 'export' },
		];

		this.openDropdownMenu(nativeElement, options, 'File action');
	}

	openUserProfileMenu(nativeElement: HTMLElement) {
		const options: DropdownOption[] = [
			{ label: 'View Profile', icon: 'user', action: 'profile' },
			{ label: 'Edit Profile', icon: 'pencil', action: 'edit' },
			{ label: 'Settings', icon: 'cog-6-tooth', action: 'settings' },
			{ label: 'Notifications', icon: 'bell', action: 'notifications' },
			{ label: 'Sign Out', icon: 'arrow-right-end-on-rectangle', action: 'signout' },
		];

		this.openDropdownMenu(nativeElement, options, 'Profile action');
	}

	openSettingsMenu(nativeElement: HTMLElement) {
		const options: DropdownOption[] = [
			{ label: 'General', icon: 'adjustments-horizontal', action: 'general' },
			{ label: 'Appearance', icon: 'swatch', action: 'appearance' },
			{ label: 'Privacy', icon: 'shield-check', action: 'privacy' },
			{ label: 'Security', icon: 'lock-closed', action: 'security' },
			{ label: 'Advanced', icon: 'wrench-screwdriver', action: 'advanced', disabled: true },
		];

		this.openDropdownMenu(nativeElement, options, 'Settings');
	}

	openAdminMenu(nativeElement: HTMLElement) {
		const options: DropdownOption[] = [
			{ label: 'User Management', icon: 'users', action: 'users' },
			{ label: 'System Logs', icon: 'document-text', action: 'logs' },
			{ label: 'Database', icon: 'circle-stack', action: 'database' },
			{ label: 'Backup', icon: 'archive-box', action: 'backup' },
			{ label: 'System Reset', icon: 'exclamation-triangle', action: 'reset' },
		];

		this.openDropdownMenu(nativeElement, options, 'Admin action');
	}

	private openDropdownMenu(nativeElement: HTMLElement, options: DropdownOption[], actionType: string) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktDropdownMenuDemoComponent,
			data: {
				options: options,
				onOptionSelect: (action: string) => {
					console.log(`${actionType} selected:`, action);
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-start',
				disableAutoReposition: true,
				width: '200px',
				padding: '0',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}
}
