import { Component, computed, inject, input } from '@angular/core';
import { FktColor } from 'frakton-ng/core';
import { OVERLAY_INFO } from "frakton-ng/overlay";
import { FktGeometryPosition } from "frakton-ng/internal/types";

@Component({
	selector: 'fkt-tooltip',
	imports: [],
	templateUrl: './fkt-tooltip.component.html',
	styleUrl: './fkt-tooltip.component.scss',
	host: {
		'[style.--background-color]': 'tooltipColor().background',
		'[style.--text-color]': 'tooltipColor().text',
	},
})
export class FktTooltipComponent {
	text = input.required<string>();
	color = input<FktColor>();

	private overlayInfo = inject(OVERLAY_INFO);

	private colorMap: Record<FktColor, { background: string; text: string }> = {
		danger: {
			background: 'var(--fkt-tooltip-color-danger, var(--fkt-color-danger))',
			text: "var(--fkt-tooltip-color-on-danger, var(--fkt-color-on-danger))"
		},
		success: {
			background: 'var(--fkt-tooltip-color-success, var(--fkt-color-success))',
			text: "var(--fkt-tooltip-color-on-success, var(--fkt-color-on-success))"
		},
		primary: {
			background: 'var(--fkt-tooltip-color-primary, var(--fkt-color-primary))',
			text: "var(--fkt-tooltip-color-on-primary, var(--fkt-color-on-primary))"
		},
		accent: {
			background: 'var(--fkt-tooltip-color-accent, var(--fkt-color-accent))',
			text: "var(--fkt-tooltip-color-on-accent, var(--fkt-color-on-accent))"
		},
		warning: {
			background: 'var(--fkt-tooltip-color-warning, var(--fkt-color-warning))',
			text: "var(--fkt-tooltip-color-on-warning, var(--fkt-color-on-warning))"
		},
		info: {
			background: 'var(--fkt-tooltip-color-info, var(--fkt-color-info))',
			text: "var(--fkt-tooltip-color-on-info, var(--fkt-color-on-info))"
		},
	};

	private tipPositionMap: Record<
		FktGeometryPosition,
		FktGeometryPosition
	> = {
		'bottom-center': 'top-center',
		'bottom-end': 'top-end',
		'bottom-left': 'top-left',
		'bottom-right': 'top-right',
		'bottom-start': 'top-start',

		'left-center': 'right-center',
		'left-end': 'right-end',
		'left-start': 'right-start',

		'right-center': 'left-center',
		'right-end': 'left-end',
		'right-start': 'left-start',

		'top-center': 'bottom-center',
		'top-end': 'bottom-end',
		'top-left': 'bottom-left',
		'top-right': 'bottom-right',
		'top-start': 'bottom-start',
	};

	protected tooltipColor = computed(() => {
		return this.colorMap[this.color() ?? 'primary'];
	});

	protected tipPositionClass = computed(() => {
		const currentPosition = this.overlayInfo.currentPosition();
		const tipPosition = this.tipPositionMap[currentPosition ?? 'bottom-center'];

		return `message__tip--${tipPosition}`;
	});
}
