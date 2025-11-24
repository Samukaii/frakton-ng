import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import {
	FktSimpleOverlayDialogComponent
} from '../dialog/fkt-simple-overlay-dialog/fkt-simple-overlay-dialog.component';


@Component({
	selector: 'simple-overlay-example',
	templateUrl: './fkt-simple-overlay-example.component.html',
	styleUrl: './fkt-simple-overlay-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktSimpleOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	messageSignal = signal('This overlay is positioned relative to the button!');

	openOverlay(nativeElement: HTMLElement, position: FktGeometryPosition) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktSimpleOverlayDialogComponent,
			data: {
				title: `Simple Overlay - ${position}`,
				message: this.messageSignal,
				onClose: () => {
					console.log('Simple overlay closed');
					overlayRef.close();
				}
			},
			panelOptions: {
				preferredPositions: position,
				disableAutoReposition: true,
				width: '300px',
				padding: '0',
				borderRadius: '8px'
			}
		});
	}
}
