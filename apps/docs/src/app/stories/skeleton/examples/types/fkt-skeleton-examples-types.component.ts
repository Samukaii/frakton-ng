import { Component, input } from '@angular/core';
import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';

@Component({
	selector: 'fkt-skeleton-examples-types',
	imports: [FktSkeletonComponent, FktSkeletonContainerComponent],
	templateUrl: './fkt-skeleton-examples-types.component.html',
	styleUrl: './fkt-skeleton-examples-types.component.scss'
})
export class FktSkeletonExamplesTypesComponent {
	showLabels = input<boolean>(true);
}
