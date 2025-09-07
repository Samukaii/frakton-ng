import { Component, input, output } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-simple-overlay-dialog',
	imports: [
		FktButtonComponent
	],
	templateUrl: './fkt-simple-overlay-dialog.component.html',
	styleUrl: './fkt-simple-overlay-dialog.component.scss'
})
export class FktSimpleOverlayDialogComponent {
	title = input('Simple Overlay');
	message = input('This is a basic overlay example with signal support.');

	onClose = output<void>();

	handleClose() {
		this.onClose.emit();
	}
}
