import { Component, computed, input } from '@angular/core';
import { FktSkeletonAnimation, FktSkeletonType } from './fkt-skeleton.types';

@Component({
	selector: 'fkt-skeleton',
	imports: [],
	templateUrl: './fkt-skeleton.component.html',
	styleUrl: './fkt-skeleton.component.scss',
	host: {
		'[style.width]': 'computedWidth()',
		'[style.min-width]': 'computedWidth()',
		'[style.max-width]': 'computedWidth()',
		'[style.height]': 'computedHeight()',
		'[style.min-height]': 'computedHeight()',
		'[style.max-height]': 'computedHeight()',
		'[style.border-radius]': 'computedBorderRadius()',
		'[style.aspect-ratio]': 'aspectRatio() || null',
		'[class]': 'computedClasses()',
		'[attr.aria-label]': 'ariaLabel()'
	}
})
export class FktSkeletonComponent {
	width = input<string>('100%');
	height = input<string>();
	type = input<FktSkeletonType>('rect');
	animation = input<FktSkeletonAnimation>('shimmer');
	lines = input<number>(1);
	aspectRatio = input<string>();
	borderRadius = input<string>();
	ariaLabel = input<string>('Loading content');

	computedWidth = computed(() => {
		const type = this.type();

		if (type === 'circle') {
            return this.height() || this.computedHeight();
		}

		return this.width();
	});

	computedHeight = computed(() => {
		const type = this.type();
		const lines = this.lines();

		if (this.height()) {
			return this.height();
		}

		switch (type) {
			case 'circle':
				return '40px';
			case 'text':
				return lines > 1 ? `${lines * 1.2 + (lines - 1) * 0.5}rem` : '1rem';
			case 'button':
				return '40px';
			case 'image':
				return this.aspectRatio() ? 'auto' : '200px';
			default:
				return '50px';
		}
	});

	computedBorderRadius = computed(() => {
		if (this.borderRadius()) {
			return this.borderRadius();
		}

		const type = this.type();

		switch (type) {
			case 'circle':
				return 'var(--fkt-radius-full)';
			case 'text':
				return 'var(--fkt-radius-sm)';
			case 'button':
				return 'var(--fkt-radius-md)';
			case 'image':
				return 'var(--fkt-radius-md)';
			default:
				return 'var(--fkt-radius-sm)';
		}
	});

	computedClasses = computed(() => {
		const animation = this.animation();
		const type = this.type();
		const lines = this.lines();

		const classes = ['fkt-skeleton'];

		if (animation !== 'none') {
			classes.push(`fkt-skeleton--${animation}`);
		}

		classes.push(`fkt-skeleton--${type}`);

		if (type === 'text' && lines > 1) {
			classes.push('fkt-skeleton--multiline');
		}

		return classes.join(' ');
	});

	lineArray = computed(() => Array(this.lines()).fill(0));
}
