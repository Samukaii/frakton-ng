import { Component, inject, input, output, signal } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktOverlayService } from '../fkt-overlay.service';
import { FktGeometryPosition } from '../../../shared/types';

@Component({
	selector: 'fkt-simple-overlay-demo',
	template: `
		<div class="p-4 space-y-3">
			<h3 class="text-lg font-semibold text-gray-900">{{title()}}</h3>
			<p class="text-gray-600">{{message()}}</p>
			<div class="flex gap-2 justify-end">
				<fkt-button
					text="Close"
					theme="stroked"
					(click)="handleClose()"
				></fkt-button>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktSimpleOverlayDemoComponent {
	title = input('Simple Overlay');
	message = input('This is a basic overlay example with signal support.');

	onClose = output<void>();

	handleClose() {
		this.onClose.emit();
	}
}


@Component({
	selector: 'simple-overlay-example',
	template: `
		<div class="space-y-3 flex justify-center gap-4">
			<div #bottom>
				<fkt-button
					class="w-fit"
					text="Bottom Center (Default)"
					theme="stroked"
					(click)="openOverlay(bottom, 'bottom-center')"
				></fkt-button>
			</div>
			<div #top>
				<fkt-button
					class="w-fit"
					text="Top Center"
					theme="stroked"
					color="green"
					(click)="openOverlay(top, 'top-center')"
				></fkt-button>
			</div>
			<div #left>
				<fkt-button
					class="w-fit"
					text="Left Center"
					theme="stroked"
					color="yellow"
					(click)="openOverlay(left, 'left-center')"
				></fkt-button>
			</div>
			<div #right>
				<fkt-button
					class="w-fit"
					text="Right Center"
					theme="stroked"
					color="primary"
					(click)="openOverlay(right, 'right-center')"
				></fkt-button>
			</div>
		</div>
    `,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktSimpleOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	messageSignal = signal('This overlay is positioned relative to the button!');

	openOverlay(nativeElement: HTMLElement, position: FktGeometryPosition) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktSimpleOverlayDemoComponent,
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
