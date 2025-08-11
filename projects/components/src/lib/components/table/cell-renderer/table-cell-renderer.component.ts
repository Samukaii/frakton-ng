import { Component, ComponentRef, inject, input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { createComponentBindings } from '../../../utils/create-component-bindings';
import { TableColumn } from '../models/table-column';
import { tableCellsMapping } from '../cells/table-cells-mapping';


@Component({
	selector: 'fkt-table-cell-renderer',
	imports: [],
	template: '',
	styles: ''
})
export class TableCellRendererComponent implements OnInit, OnDestroy {
	column = input.required<TableColumn>();

	private viewRef = inject(ViewContainerRef);
	private componentRef: ComponentRef<any> | null = null;

	ngOnInit() {
		const column = this.column();

    const cell = column.cell;

    const componentToRender = tableCellsMapping[cell.type] as Type<any>;

		this.componentRef = this.viewRef.createComponent(componentToRender, {
			bindings: createComponentBindings(componentToRender, cell.options as any)
		});
	}

	ngOnDestroy() {
		this.componentRef?.destroy();
	}
}
