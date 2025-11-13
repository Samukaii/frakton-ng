import { Component, inject } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import {
	FktTooltipOverlayDialogComponent
} from '../dialog/fkt-tooltip-overlay-dialog/fkt-tooltip-overlay-dialog.component';


@Component({
	selector: 'custom-tooltip-overlay-example',
	templateUrl: './fkt-custom-tooltip-overlay-example.component.html',
	styleUrl: './fkt-custom-tooltip-overlay-example.component.scss',
	imports: [FktButtonComponent]
})
export class FktCustomTooltipOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	private overlayRef: FktOverlayRef<FktTooltipOverlayDialogComponent> | null = null;

	openTooltip(
		nativeElement: HTMLElement,
		type: 'info' | 'warning' | 'danger' | 'success',
		text: string,
		position: FktGeometryPosition = 'bottom-center'
	) {
		if (this.overlayRef) return;

		const colors: Record<'info' | 'warning' | 'danger' | 'success', string> = {
			info: "#3b82f6",
			warning: "#eab308",
			danger: "#ef4444",
			success: "#22c55e",
		}

		this.overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktTooltipOverlayDialogComponent,
			data: {
				text: text,
				type: type
			},
			panelOptions: {
				position: position,
				disableAutoReposition: true,
				padding: '0.5rem 1rem',
				backgroundColor: colors[type],
				borderRadius: '6px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
				maxHeight: 'fit-content',
				minWidth: 'fit-content',
				width: 'fit-content',
				onAutoClose: () => {
					this.overlayRef = null;
				}
			}
		});
	}
}
