import { booleanAttribute, Directive, ElementRef, inject, input } from '@angular/core';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { getElementDesignTokens, outsideMouseEnterWatcher } from 'frakton-ng/internal/utils';
import { FktTooltipComponent } from './fkt-tooltip.component';
import { FktColor } from 'frakton-ng/core';
import { isElementTextTruncated } from 'frakton-ng/internal/utils';

@Directive({
	selector: '[fktTooltip]',
	host: {
		'(mouseenter)': 'show();',
	},
})
export class FktTooltipDirective {
	fktTooltip = input.required<string>();
	tooltipEnabled = input(true);
	detectOverflow = input(false, {
		transform: booleanAttribute
	});
	tooltipColor = input<FktColor>('primary');
	disableAutoReposition = input(false, {transform: booleanAttribute});
	position = input<FktGeometryPosition>('bottom-center');

	private overlay = inject(FktOverlayService);
	private overlayRef: FktOverlayRef<FktTooltipComponent> | null = null;
	private elementRef = inject(ElementRef);

	private outsideWatcher = outsideMouseEnterWatcher();

	show() {
		if (!this.tooltipEnabled()) return;

		if(this.detectOverflow() && !isElementTextTruncated(this.elementRef.nativeElement))
			return

		if (this.overlayRef) return;

		const tokens = getElementDesignTokens(this.elementRef.nativeElement);

		this.overlayRef = this.overlay.open({
			component: FktTooltipComponent,
			data: {
				text: this.fktTooltip(),
				color: this.tooltipColor,
			},
			panelOptions: {
				width: 'fit-content',
				maxHeight: 'fit-content',
				minWidth: 'fit-content',
				focusTriggerOnClose: false,
				preferredPositions: this.position(),
				borderRadius: '0px',
				overflow: 'visible',
				padding: '0',
				boxShadow: 'none',
				backgroundColor: 'transparent',
				disableAutoReposition: this.disableAutoReposition(),
				styles: tokens
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
