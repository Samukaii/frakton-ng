import { Component, inject, signal } from '@angular/core';
import { FktButtonComponent } from '../../../button';
import { FktOverlayService } from '../../fkt-overlay.service';
import { FktGeometryPosition } from '../../../../shared/types';
import {
	FktSimpleOverlayDialogComponent
} from '../dialog/fkt-simple-overlay-dialog/fkt-simple-overlay-dialog.component';


@Component({
	selector: 'simple-overlay-example',
	template: `
		<div class="container">
			<div #left>
				<fkt-button
					text="Left Center"
					theme="stroked"
					color="yellow"
					(click)="openOverlay(left, 'left-center')"
				></fkt-button>
			</div>
			<div #right>
				<fkt-button
					text="Right Center"
					theme="stroked"
					color="primary"
					(click)="openOverlay(right, 'right-center')"
				></fkt-button>
			</div>
			<div #top>
				<fkt-button
					text="Top Center"
					theme="stroked"
					color="green"
					(click)="openOverlay(top, 'top-center')"
				></fkt-button>
			</div>
			<div #bottom>
				<fkt-button
					text="Bottom Center (Default)"
					theme="stroked"
					(click)="openOverlay(bottom, 'bottom-center')"
				></fkt-button>
			</div>
		</div>
    `,
	standalone: true,
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
				position: position,
				disableAutoReposition: true,
				width: '300px',
				padding: '0',
				borderRadius: '8px'
			}
		});
	}
}
