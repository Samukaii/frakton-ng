import { booleanAttribute, Component, computed, input, } from '@angular/core';
import { TableCellRendererComponent } from './cell-renderer/table-cell-renderer.component';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktIdentifiable } from 'frakton-ng/core';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktTableActionFn, FktTableClassesFn, FktTableColumn, FktTableColumnFn } from './fkt-table.types';

@Component({
	selector: 'fkt-table',
	imports: [
		CallPipe,
		TableCellRendererComponent,
		FktSpinnerComponent,
		FktButtonsListComponent,
		FktNoResultsComponent,
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
	loading = input(false);
	noHeaderWhenEmpty = input(false, {transform: booleanAttribute});

	noResults = input<FktNoResults>({
		label: 'Sem resultados',
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
