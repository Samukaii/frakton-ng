import { Component, input, output } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/button';

@Component({
	selector: 'fkt-simple-overlay-dialog',
	imports: [
		FktButtonComponent
	],
	template: `
		<div class="container">
			<h3 class="container__title">{{ title() }}</h3>
			<p class="container__description">{{ message() }}</p>
			<div class="container__actions">
				<fkt-button
					text="Close"
					theme="stroked"
					(click)="handleClose()"
				></fkt-button>
			</div>
		</div>
	`,
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
