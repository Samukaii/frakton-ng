import { Component, input } from '@angular/core';

export type FktSkeletonAlignment = 'start' | 'center' | 'end' | 'stretch' | 'space-between';
export type FktSkeletonGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
	selector: 'fkt-skeleton-container',
	imports: [],
	template: '<ng-content/>',
	styleUrl: './fkt-skeleton-container.component.scss',
	host: {
		'[style.flex-direction]': 'direction()',
		'[style.justify-content]': 'justifyContent()',
		'[style.align-items]': 'alignItems()',
		'[style.gap]': 'computedGap()',
		'[style.width]': 'width()',
		'[style.height]': 'height()',
	}
})
export class FktSkeletonContainerComponent {
	direction = input<'row' | 'column'>('column');
	justify = input<FktSkeletonAlignment>('start');
	align = input<FktSkeletonAlignment>('stretch');
	gap = input<FktSkeletonGap>('sm');
	width = input<string>('100%');
	height = input<string>('auto');

	private gapMap: Record<FktSkeletonGap, string> = {
		'xs': 'var(--fkt-space-xs)',
		'sm': 'var(--fkt-space-sm)', 
		'md': 'var(--fkt-space-md)',
		'lg': 'var(--fkt-space-lg)',
		'xl': 'var(--fkt-space-xl)'
	};

	private alignmentMap: Record<FktSkeletonAlignment, string> = {
		'start': 'flex-start',
		'center': 'center',
		'end': 'flex-end',
		'stretch': 'stretch',
		'space-between': 'space-between'
	};

	computedGap = () => this.gapMap[this.gap()];
	justifyContent = () => this.alignmentMap[this.justify()];
	alignItems = () => this.alignmentMap[this.align()];
}