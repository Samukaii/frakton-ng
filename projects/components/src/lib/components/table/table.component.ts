import {
	booleanAttribute,
	Component,
	computed,
	input,
	output,
} from '@angular/core';
import { FktIconComponent } from '../icon/fkt-icon.component';
import { TableColumn } from './models/table-column';
import { TableColumnFn } from './models/table-column-fn';
import { TableCellRendererComponent } from './cell-renderer/table-cell-renderer.component';
import { FktSpinnerComponent } from '../spinner/fkt-spinner.component';
import { TableActionFn } from './models/table-action-fn';
import { TableClassesFn } from './models/table-classes-fn';
import { FktButtonAction } from '../button/types/fkt-button-action';
import { FktButtonsListComponent } from '../buttons-list/fkt-buttons-list.component';
import { CallPipe, ToClassPipe } from '../../pipes';
import { FktIdentifiable, FktNoResults } from '../../shared/types';

@Component({
	selector: 'fkt-table',
	imports: [
		FktIconComponent,
		CallPipe,
		TableCellRendererComponent,
		ToClassPipe,
		FktSpinnerComponent,
		FktButtonsListComponent,
	],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss',
})
export class TableComponent<T extends FktIdentifiable> {
	data = input.required<T[]>();
	columnsFn = input.required<TableColumnFn<T>>();
	classesFn = input<TableClassesFn<T>>(() => '');
	actionsFn = input<TableActionFn<T>>(() => []);
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

		if (!data.length) return [] as TableColumn[];

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
