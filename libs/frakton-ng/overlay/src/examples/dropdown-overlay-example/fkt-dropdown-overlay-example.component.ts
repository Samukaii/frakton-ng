import { Component, inject } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktIconName } from 'frakton-ng/icon';
import {
	FktDropdownOverlayDialogComponent
} from '../dialog/fkt-dropdown-overlay-dialog/fkt-dropdown-overlay-dialog.component';

export interface DropdownOption {
	label: string;
	icon: FktIconName;
	action: string;
	disabled?: boolean;
}

@Component({
	selector: 'dropdown-overlay-example',
	templateUrl: './fkt-dropdown-overlay-example.component.html',
	styleUrl: './fkt-dropdown-overlay-example.component.scss',
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
			component: FktDropdownOverlayDialogComponent,
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
				width: 'fit-content',
				padding: '0',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}
}
