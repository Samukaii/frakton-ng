import { Component } from '@angular/core';
import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';

@Component({
	selector: 'fkt-skeleton-examples-basic',
	imports: [FktSkeletonComponent, FktSkeletonContainerComponent],
	templateUrl: './fkt-skeleton-examples-basic.component.html',
	styleUrl: './fkt-skeleton-examples-basic.component.scss'
})
export class FktSkeletonExamplesBasicComponent {}
