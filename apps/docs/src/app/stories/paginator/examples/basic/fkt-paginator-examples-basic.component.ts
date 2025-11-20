import { Component, input, signal, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorEvent } from 'frakton-ng/paginator';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'fkt-paginator-examples-basic',
    imports: [FktPaginatorComponent, JsonPipe],
	templateUrl: './fkt-paginator-examples-basic.component.html',
	styleUrl: './fkt-paginator-examples-basic.component.scss'
})
export class BasicExampleComponent {
	page = input<number>(1);
	pageSize = input<number>(20);
	total = input.required<number>();

	lastPageChange = signal<FktPaginatorEvent | null>(null);

	onPageChange(event: number): void {
		this.lastPageChange.set({
            page: event,
            pageSize: this.pageSize()
        });
		console.log('Basic example - Page change:', event);
	}
}
