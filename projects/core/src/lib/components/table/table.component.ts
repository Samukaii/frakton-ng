import { booleanAttribute, Component, computed, input, output, } from '@angular/core';
import { TableCellRendererComponent } from './cell-renderer/table-cell-renderer.component';
import { FktSpinnerComponent } from '../spinner';
import { FktButtonsListComponent } from '../buttons-list';
import { CallPipe } from '../../pipes';
import { FktIdentifiable } from '../../shared/types';
import { FktButtonAction } from '../button';
import { FktNoResults, FktNoResultsComponent } from '../no-results';
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
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss',
})
export class TableComponent<T extends FktIdentifiable> {
	data = input.required<T[]>();
	columnsFn = input.required<FktTableColumnFn<T>>();
	classesFn = input<FktTableClassesFn<T>>(() => '');
	actionsFn = input<FktTableActionFn<T>>(() => []);
	mainAction = input<FktButtonAction>();
	loading = input(false);
	noHeaderWhenEmpty = input(false, { transform: booleanAttribute });

	createAction = output();

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

		return data.map(item => actionsFn(item));
	});
}
