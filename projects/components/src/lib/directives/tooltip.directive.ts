import { Directive, ElementRef, inject, input } from '@angular/core';
import { AttachedOverlayService } from '../components/attached-overlay/attached-overlay.service';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AttachedOverlayRef } from '../components/attached-overlay/models/attached-overlay-ref';
import { outsideMouseEnterWatcher } from '../utils/outside-mouse-enter-watcher';
import { FktGeometryPosition } from '../shared/types';

@Directive({
	selector: '[appTooltip]',
	host: {
		'(mouseenter)': 'show();',
	},
})
export class TooltipDirective {
	appTooltip = input.required<string>();
	tooltipEnabled = input(true);
	position = input<FktGeometryPosition>('bottom-center');

	private overlay = inject(AttachedOverlayService);
	private overlayRef: AttachedOverlayRef<TooltipComponent> | null = null;
	private elementRef = inject(ElementRef);

	outsideWatcher = outsideMouseEnterWatcher();

	show() {
		if (!this.tooltipEnabled()) return;

		if (this.overlayRef) return;

		this.overlayRef = this.overlay.open({
			component: TooltipComponent,
			data: {
				text: this.appTooltip(),
			},
			panelOptions: {
				width: 'fit-content',
				maxHeight: 'fit-content',
				minWidth: 'fit-content',
				position: this.position(),
				borderRadius: '0px',
				overflow: 'visible',
				padding: '18px',
				boxShadow: 'none',
				backgroundColor: 'transparent',
			},
			anchorElementRef: this.elementRef,
		});

		this.outsideWatcher.watch(() => {
			this.outsideWatcher.stop();
			this.hide();
		});
	}

	hide = () => {
		this.overlayRef?.close();
		this.overlayRef = null;
	};
}
