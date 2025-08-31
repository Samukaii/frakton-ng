import { Component, computed, inject, input } from '@angular/core';
import { OVERLAY_INFO } from '../overlay/fkt-overlay.service';
import { FktColor, FktGeometryPosition } from '../../shared/types';

@Component({
	selector: 'app-tooltip',
	imports: [],
	templateUrl: './fkt-tooltip.component.html',
	styleUrl: './fkt-tooltip.component.scss',
	host: {
		'[style.--color]': 'tooltipColor()',
	},
})
export class FktTooltipComponent {
	text = input.required<string>();
	color = input<FktColor>();

	overlayInfo = inject(OVERLAY_INFO);

	private colorMap: Record<FktColor, string> = {
		red: '#ef4444',
		green: '#22c55e',
		primary: '#1f2937',
		yellow: '#eab308',
		blue: '#2B7FFFFF',
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

	tooltipColor = computed(() => {
		return this.colorMap[this.color() ?? 'primary'];
	});

	protected tipPositionClass = computed(() => {
		const currentPosition = this.overlayInfo.currentPosition();
		const tipPosition = this.tipPositionMap[currentPosition ?? 'bottom-center'];

		return `message__tip--${tipPosition}`;
	});
}
