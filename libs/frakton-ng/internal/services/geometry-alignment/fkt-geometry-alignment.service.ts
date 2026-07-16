import { inject, Injectable } from '@angular/core';
import { geometryPositionCalculations } from 'frakton-ng/internal/utils';
import { FktAlignTargetToOptions } from './models/fkt-align-target-to.options';
import { FktSmartAlignTargetToOptions } from './models/fkt-smart-align-target-to.options';
import { WINDOW } from 'frakton-ng/internal/di';
import {
	FktGeometryDirection,
	FktGeometryOffset,
	FktGeometryPosition,
} from 'frakton-ng/internal/types';

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

		const direction = options.direction ?? 'ltr';
		const aligner = geometryPositionCalculations(direction)[options.position];
		const base = aligner(options.anchor, options.targetSize);
		const offset = this.calculateOffset({
			direction,
			padding: {x: paddingX, y: paddingY},
			position: options.position,
		});

		return {
			x: base.x + offset.x,
			y: base.y + offset.y,
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

			'start-top',
			'start-center',
			'start-bottom',

			'end-top',
			'end-center',
			'end-bottom',

			'bottom-start-corner',
			'bottom-end-corner',
			'top-start-corner',
			'top-end-corner',
		]

    const preferredPositions = options.preferredPositions ?? [];

    if (options.disableAutoReposition === true) {
      return preferredPositions[0] ?? 'bottom-center';
    }

    const positions =
      [...preferredPositions, ...defaultPositions];

    if (positions.length === 0) {
      throw new Error(
        'FktGeometryAlignmentService expected at least one position to evaluate.'
      );
    }

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

	private calculateOffset(options: {
		position: FktGeometryPosition;
		direction: FktGeometryDirection;
		padding: Required<FktGeometryOffset>;
	}) {
		let x = 0;
		let y = 0;

		const {direction, padding, position} = options;

		if (position.startsWith('top')) y = -padding.y;
		else if (position.startsWith('bottom')) y = padding.y;

		const startX = direction === 'rtl' ? padding.x : -padding.x;
		const endX = direction === 'rtl' ? -padding.x : padding.x;

		if (position.startsWith('start') || position.endsWith('start-corner')) {
			x = startX;
		} else if (position.startsWith('end') || position.endsWith('end-corner')) {
			x = endX;
		}

		return {x, y};
	}
}
