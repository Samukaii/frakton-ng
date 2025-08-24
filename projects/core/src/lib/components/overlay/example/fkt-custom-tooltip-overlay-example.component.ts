import { Component, inject, input } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktOverlayService } from '../fkt-overlay.service';
import { FktGeometryPosition } from '../../../shared/types';
import { FktIconComponent } from '../../icon';
import { FktOverlayRef } from '../fkt-overlay.types';

@Component({
	selector: 'fkt-tooltip-overlay-demo',
	template: `
		<div class="flex items-center gap-2 text-white">
			@if(type() === 'info') {
				<fkt-icon name="information-circle" size="16"></fkt-icon>
			}
			@if(type() === 'warning') {
				<fkt-icon name="exclamation-triangle" size="16"></fkt-icon>
			}
			@if(type() === 'error') {
				<fkt-icon name="x-circle" size="16"></fkt-icon>
			}
			@if(type() === 'success') {
				<fkt-icon name="check-circle" size="16"></fkt-icon>
			}
			<span class="text-sm">{{text()}}</span>
		</div>
	`,
	styles: `
		:host {
			width: 100%;
			height: 100%;
			display: block;
		}
	`,
	standalone: true,
	imports: [FktIconComponent]
})
export class FktTooltipOverlayDemoComponent {
	text = input('Tooltip message');
	type = input<'info' | 'warning' | 'error' | 'success'>('info');
}


@Component({
	selector: 'custom-tooltip-overlay-example',
	template: `
		<div class="grid grid-cols-2 gap-3">
			<div #infoButton>
				<fkt-button
					text="Info Tooltip"
					theme="stroked"
					color="primary"
					(click)="openTooltip(infoButton, 'info', 'This is an informational tooltip message.')"
				></fkt-button>
			</div>

			<div #warningButton>
				<fkt-button
					text="Warning Tooltip"
					theme="stroked"
					color="yellow"
					(click)="openTooltip(warningButton, 'warning', 'This is a warning tooltip message.')"
				></fkt-button>
			</div>

			<div #errorButton>
				<fkt-button
					text="Error Tooltip"
					theme="stroked"
					color="red"
					(click)="openTooltip(errorButton, 'error', 'This is an error tooltip message.')"
				></fkt-button>
			</div>

			<div #successButton>
				<fkt-button
					text="Success Tooltip"
					theme="stroked"
					color="green"
					(click)="openTooltip(successButton, 'success', 'This is a success tooltip message.')"
				></fkt-button>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktCustomTooltipOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	private overlayRef: FktOverlayRef<FktTooltipOverlayDemoComponent> | null = null;

	openTooltip(
		nativeElement: HTMLElement,
		type: 'info' | 'warning' | 'error' | 'success',
		text: string,
		position: FktGeometryPosition = 'bottom-center'
	) {
		if(this.overlayRef) return;

		const colors: Record<'info' | 'warning' | 'error' | 'success', string> = {
			info: "#3b82f6",
			warning: "#eab308",
			error: "#ef4444",
			success: "#22c55e",
		}

		this.overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktTooltipOverlayDemoComponent,
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
				outsideClick: () => {
					this.overlayRef = null;
				}
			}
		});
	}
}
