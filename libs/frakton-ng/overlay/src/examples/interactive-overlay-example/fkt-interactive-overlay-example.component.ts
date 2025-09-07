import { Component, ElementRef, inject, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayService } from 'frakton-ng/overlay';
import {
	FktInteractiveOverlayDialogComponent
} from '../dialog/fkt-interactive-overlay-dialog/fkt-interactive-overlay-dialog.component';
import { FktBadgeComponent } from 'frakton-ng/badge';


@Component({
	selector: 'interactive-overlay-example',
	templateUrl: './fkt-interactive-overlay-example.component.html',
	styleUrl: './fkt-interactive-overlay-example.component.scss',
	imports: [FktButtonComponent, FktBadgeComponent]
})
export class FktInteractiveOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	sharedCounter = signal(0);
	sharedItems = signal<string[]>(['Initial Item']);

	private elementRef = inject(ElementRef);

	openCounterOverlay() {
		const overlayRef = this.overlayService.open({
			anchorElementRef: this.elementRef,
			component: FktInteractiveOverlayDialogComponent,
			data: {
				title: 'Counter Demo',
				description: 'This overlay demonstrates reactive counter functionality.',
				counter: this.sharedCounter,
				currentItems: this.sharedItems,
				onDone: () => {
					console.log('Counter overlay done');
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-center',
				padding: '0',
				width: '600px',
				disableAutoReposition: true,
				maxHeight: 'fit-content',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}

	resetAll() {
		this.sharedCounter.set(0);
		this.sharedItems.set(['Initial Item']);
	}
}
