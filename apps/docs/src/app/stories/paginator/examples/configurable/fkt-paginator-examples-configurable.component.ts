import { Component, input, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorConfig, FktPaginatorEvent } from 'frakton-ng/paginator';

@Component({
	selector: 'fkt-paginator-examples-configurable',
	imports: [FktPaginatorComponent],
	templateUrl: './fkt-paginator-examples-configurable.component.html',
	styleUrl: './fkt-paginator-examples-configurable.component.scss'
})
export class ConfigurableExampleComponent {
    page = input<number>(1);
	pageSize = input<number>(10);
	total = input<number>(100);

	// Minimal config - only essentials
	minimalConfig: FktPaginatorConfig = {
		showFirstLast: false,
		showPageSize: false,
		showInfo: false,
		maxVisiblePages: 3
	};

	// Info only config - just display info
	infoOnlyConfig: FktPaginatorConfig = {
		showFirstLast: false,
		showPrevNext: false,
		showPageNumbers: false,
		showPageSize: false,
		showInfo: true
	};

	// Custom page sizes
	customConfig: FktPaginatorConfig = {
		pageSizeOptions: [5, 15, 25, 50],
		maxVisiblePages: 7
	};

	onPageChange(event: number): void {
		console.log('Configurable example - Page change:', event);
	}
}
