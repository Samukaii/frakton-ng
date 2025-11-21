import { Component, ComponentRef, inject, input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { createComponentBindings } from 'frakton-ng/internal/utils';
import { FktTableCell, FktTableColumn } from "../fkt-table.types";
import { TABLE_CELLS_TOKEN } from '../table-cells.provider';
import { FktTableCellDefaultComponent } from '../core-cells/default/fkt-table-cell-default.component';
import { FktTableCellTemplateComponent } from '../core-cells/template/fkt-table-cell-template.component';

@Component({
	selector: 'fkt-table-cell-renderer',
	imports: [],
	template: '',
	styles: ''
})
export class TableCellRendererComponent implements OnInit, OnDestroy {
	column = input.required<FktTableColumn>();

	private viewRef = inject(ViewContainerRef);
	private componentRef: ComponentRef<any> | null = null;
	private additionalCells = inject(TABLE_CELLS_TOKEN, { optional: true }) ?? {};

	private get cellsMapping(): Record<string, Type<any>> {
		const coreCells: Record<string, Type<any>> = {
			default: FktTableCellDefaultComponent,
			template: FktTableCellTemplateComponent
		};

		return { ...coreCells, ...this.additionalCells };
	}

    private getCell(cell: FktTableCell | string): FktTableCell {
        if(typeof cell === 'string')
            return {
                type: 'default',
                options: {
                    value: cell
                }
            }

        return cell;
    }

	ngOnInit() {
		const column = this.column();
		const cell = this.getCell(column.cell);

		const componentToRender = this.cellsMapping[cell.type] as Type<any>;

		if (!componentToRender) {
			throw new Error(`Unknown table cell type: ${cell.type}. Did you forget to provide it using provideTableCells()?`);
		}

		this.componentRef = this.viewRef.createComponent(componentToRender, {
			bindings: createComponentBindings(componentToRender, cell.options as any)
		});
	}

	ngOnDestroy() {
		this.componentRef?.destroy();
	}
}
