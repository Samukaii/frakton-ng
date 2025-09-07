import { Component, input } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'fkt-tooltip-overlay-dialog',
	imports: [
		FktIconComponent
	],
	templateUrl: './fkt-tooltip-overlay-dialog.component.html',
	styleUrl: './fkt-tooltip-overlay-dialog.component.scss'
})
export class FktTooltipOverlayDialogComponent {
	text = input('Tooltip message');
	type = input<'info' | 'warning' | 'error' | 'success'>('info');
}
