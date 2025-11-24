import { booleanAttribute, Component, computed, contentChild, input, } from '@angular/core';
import { TableCellRendererComponent } from './cell-renderer/table-cell-renderer.component';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktIdentifiable } from 'frakton-ng/core';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktTableActionFn, FktTableClassesFn, FktTableColumn, FktTableColumnFn } from './fkt-table.types';
import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';

@Component({
	selector: 'fkt-table',
    imports: [
        CallPipe,
        TableCellRendererComponent,
        FktButtonsListComponent,
        FktNoResultsComponent,
        FktSkeletonContainerComponent,
        FktSkeletonComponent,
    ],
	templateUrl: './fkt-table.component.html',
	styleUrl: './fkt-table.component.scss',
})
export class FktTableComponent<T extends FktIdentifiable> {
	data = input.required<T[]>();
	columnsFn = input.required<FktTableColumnFn<T>>();
	classesFn = input<FktTableClassesFn<T>>(() => '');
	actionsFn = input<FktTableActionFn<T>>();
	mainAction = input<FktButtonAction>();
	loading = input(true);
	noHeaderWhenEmpty = input(false, {transform: booleanAttribute});
    disableRowHover = input(false, {transform: booleanAttribute});

	noResults = input<FktNoResults>({
		label: 'No results',
	});

	headers = computed(() => {
		const columnsFn = this.columnsFn();
		const data = this.data();

		if (!data.length) return [] as FktTableColumn[];

		return columnsFn(this.data()[0]);
	});

	columns = computed(() => {
		const columnsFn = this.columnsFn();
		const data = this.data();

		return data.map(item => {
			return {
				item,
				columns: columnsFn(item),
			};
		});
	});

	actions = computed(() => {
		const actionsFn = this.actionsFn();
		const data = this.data();

		if (!actionsFn)
			return [];

		return data.map(item => actionsFn(item));
	});
}
