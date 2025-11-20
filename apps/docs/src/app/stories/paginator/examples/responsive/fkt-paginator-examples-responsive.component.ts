import { Component, input, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorEvent } from 'frakton-ng/paginator';

@Component({
	selector: 'fkt-paginator-examples-responsive',
	imports: [FktPaginatorComponent],
	templateUrl: './fkt-paginator-examples-responsive.component.html',
	styleUrl: './fkt-paginator-examples-responsive.component.scss'
})
export class ResponsiveExampleComponent {
	page = input<number>(1);
	pageSize = input<number>(25);
    total = input.required<number>();

	onPageChange(event: number): void {
		console.log('Responsive example - Page change:', event);
	}
}
