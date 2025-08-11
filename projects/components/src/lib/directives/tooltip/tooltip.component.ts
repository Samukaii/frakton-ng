import { Component, computed, inject, input } from '@angular/core';
import { OVERLAY_INFO } from '../../components/attached-overlay/attached-overlay.service';
import { FktColor, FktGeometryPosition } from '../../shared/types';

@Component({
	selector: 'app-tooltip',
	imports: [],
	templateUrl: './tooltip.component.html',
	styleUrl: './tooltip.component.scss',
	host: {
		'[class]': 'positionClass()',
		'[style.--color]': 'tooltipColor()',
	},
})
export class TooltipComponent {
	text = input.required<string>();
	color = input<FktColor>();

	overlayInfo = inject(OVERLAY_INFO);

	private colorMap: Record<FktColor, string> = {
		red: '#ef4444',
		green: '#22c55e',
		primary: '#1f2937',
		yellow: '#eab308',
	};

	private tipPositionMap: Record<
		FktGeometryPosition,
		`${FktGeometryPosition}-position`
	> = {
		'bottom-center': 'top-center-position',
		'bottom-end': 'top-end-position',
		'bottom-left': 'top-start-position',
		'bottom-right': 'top-end-position',
		'bottom-start': 'top-start-position',

		'left-center': 'right-center-position',
		'left-end': 'right-end-position',
		'left-start': 'right-start-position',

		'right-center': 'left-center-position',
		'right-end': 'left-end-position',
		'right-start': 'left-start-position',

		'top-center': 'bottom-center-position',
		'top-end': 'bottom-end-position',
		'top-left': 'bottom-start-position',
		'top-right': 'bottom-end-position',
		'top-start': 'bottom-start-position',
	};

	tooltipColor = computed(() => {
		return this.colorMap[this.color() ?? 'primary'];
	});

	tipStyles = computed(() => {
		const color = this.color() ?? 'primary';
		const colorHex = this.colorMap[color];

		return {
			'border-color': colorHex,
		};
	});

	messageStyles = computed(() => {
		const color = this.color() ?? 'primary';
		const colorHex = this.colorMap[color];

		return {
			'background-color': colorHex,
		};
	});

	positionClass = computed(() => {
		const currentPosition = this.overlayInfo.currentPosition();

		return this.tipPositionMap[currentPosition ?? 'bottom-center'];
	});
}
