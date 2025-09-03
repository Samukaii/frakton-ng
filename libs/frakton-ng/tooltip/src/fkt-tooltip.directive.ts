import { booleanAttribute, Directive, ElementRef, inject, input } from '@angular/core';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { outsideMouseEnterWatcher } from 'frakton-ng/internal/utils';
import { FktTooltipComponent } from './fkt-tooltip.component';

@Directive({
	selector: '[fktTooltip]',
	host: {
		'(mouseenter)': 'show();',
	},
})
export class FktTooltipDirective {
	fktTooltip = input.required<string>();
	tooltipEnabled = input(true);
	disableAutoReposition = input(false, {transform: booleanAttribute});
	position = input<FktGeometryPosition>('bottom-center');

	private overlay = inject(FktOverlayService);
	private overlayRef: FktOverlayRef<FktTooltipComponent> | null = null;
	private elementRef = inject(ElementRef);

	outsideWatcher = outsideMouseEnterWatcher();

	show() {
		if (!this.tooltipEnabled()) return;

		if (this.overlayRef) return;

		this.overlayRef = this.overlay.open({
			component: FktTooltipComponent,
			data: {
				text: this.fktTooltip(),
			},
			panelOptions: {
				width: 'fit-content',
				maxHeight: 'fit-content',
				minWidth: 'fit-content',
				position: this.position(),
				borderRadius: '0px',
				overflow: 'visible',
				padding: '0',
				boxShadow: 'none',
				backgroundColor: 'transparent',
				disableAutoReposition: this.disableAutoReposition(),
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
