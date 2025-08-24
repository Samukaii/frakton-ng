import { Component, computed, input } from '@angular/core';
import { TableComponent } from '../table.component';
import { FktIdentifiable } from '../../../shared/types';
import { FktButtonAction } from '../../button';
import { createUserColumns, mockUsers } from './table-mock-data';
import { FktNoResults } from '../../no-results';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn } from '../fkt-table.types';

@Component({
	selector: 'basic-table-example',
	template: `
		<fkt-table
			[data]="tableData()"
			[columnsFn]="columnsFn()"
			[classesFn]="classesFn()"
			[actionsFn]="actionsFn()"
			[mainAction]="mainAction()"
			[loading]="loading()"
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
			[noResults]="noResults()"
		/>
	`,
	standalone: true,
	imports: [TableComponent]
})
export class BasicTableExampleComponent {
	// Input properties that can be controlled from stories
	data = input<FktIdentifiable[]>(mockUsers);
	columnsFn = input<FktTableColumnFn<any>>(createUserColumns);
	classesFn = input<FktTableClassesFn<any>>(() => '');
	actionsFn = input<FktTableActionFn<any>>(() => []);
	mainAction = input<FktButtonAction | undefined>();
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: { name: 'document-text', size: '80px' }
	});

	// Computed values for the template
	tableData = computed(() => this.data());
}
