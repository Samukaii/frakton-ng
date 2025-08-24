import { inject, Injectable } from '@angular/core';
import { geometryPositionCalculations } from '../../utils/geometry-position-calculations';
import { FktAlignTargetToOptions } from './models/fkt-align-target-to.options';
import { FktSmartAlignTargetToOptions } from './models/fkt-smart-align-target-to.options';
import { WINDOW } from '../../di/tokens/window';
import { FktGeometryPosition } from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class FktGeometryAlignmentService {
	private window = inject(WINDOW);

	alignTargetTo(options: FktAlignTargetToOptions) {
		const paddingX = typeof options.padding === 'number'
			? options.padding
			: options.padding?.x ?? 8;

		const paddingY = typeof options.padding === 'number'
			? options.padding
			: options.padding?.y ?? 8;

		const aligner = geometryPositionCalculations[options.position];
		const base = aligner(options.anchor, options.targetSize);

		let offsetX = 0;
		let offsetY = 0;

		const pos = options.position;

		if (pos.startsWith('top')) offsetY = -paddingY;
		else if (pos.startsWith('bottom')) offsetY = paddingY;

		if (pos.startsWith('left') || pos.endsWith('left')) offsetX = -paddingX;
		else if (pos.startsWith('right') || pos.endsWith('right')) offsetX = paddingX;

		return {
			x: base.x + offsetX,
			y: base.y + offsetY + this.window.scrollY,
		};
	};

	smartAlignTargetTo(options: FktSmartAlignTargetToOptions) {
		const bestFit = this.calculateBestFit(options);

		return {
			position: bestFit,
			result: this.alignTargetTo({
				...options,
				position: bestFit
			})
		};
	};

	private calculateBestFit(options: FktSmartAlignTargetToOptions) {
		const defaultPositions: FktGeometryPosition[] = [
			'bottom-center',
			'bottom-start',
			'bottom-end',

			'top-center',
			'top-start',
			'top-end',

			'left-start',
			'left-center',
			'left-end',

			'right-start',
			'right-center',
			'right-end',

			'bottom-left',
			'bottom-right',
			'top-left',
			'top-right',
		]

		const positions = [
			...(options.preferredPositions ?? []),
			...(options.disableAutoReposition === true ? [] : defaultPositions)
		];

		const container = options.container ?? {
			x: 0,
			y: 0,
			width: this.window.innerWidth,
			height: this.window.innerHeight
		};

		let bestFit = null;
		let smallestOverflow = Infinity;

		for (const position of positions) {
			const result = this.alignTargetTo({
				...options,
				position
			});

			const rightOverflow = Math.max(0, result.x + options.targetSize.width - (container.x + container.width));
			const bottomOverflow = Math.max(0, result.y + options.targetSize.height - (container.y + container.height));
			const leftOverflow = Math.max(0, container.x - result.x);
			const topOverflow = Math.max(0, container.y - result.y);

			const totalOverflow = rightOverflow + bottomOverflow + leftOverflow + topOverflow;

			if (totalOverflow === 0) {
				return position;
			}

			if (totalOverflow < smallestOverflow) {
				smallestOverflow = totalOverflow;
				bestFit = position;
			}
		}

		return bestFit!;
	}
}
