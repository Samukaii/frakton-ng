import { Component, input } from '@angular/core';
import { FktSkeletonComponent, FktSkeletonType } from 'frakton-ng/skeleton';

@Component({
	selector: 'fkt-skeleton-examples-animations',
    imports: [FktSkeletonComponent],
	templateUrl: './fkt-skeleton-examples-animations.component.html',
	styleUrl: './fkt-skeleton-examples-animations.component.scss'
})
export class FktSkeletonExamplesAnimationsComponent {
	type = input<FktSkeletonType>('rect');
}
