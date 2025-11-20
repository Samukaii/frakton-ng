import { FktIdentifiable } from 'frakton-ng/core';
import { FktButtonAction } from 'frakton-ng/button';
import { FktComponentData } from 'frakton-ng/internal/types';
import { FktTableCellDefaultComponent } from './core-cells/default/fkt-table-cell-default.component';
import { FktTableCellTemplateComponent } from './core-cells/template/fkt-table-cell-template.component';
import { Type } from '@angular/core';

export type FktTableActionFn<T extends FktIdentifiable> = (item: T) => FktButtonAction[];

export interface FktTableCellsMapping {
    default: FktTableCellDefaultComponent,
    template: FktTableCellTemplateComponent
}

export type TableCellsToken = {
    [K in keyof Omit<FktTableCellsMapping, 'default' | 'template'>]: Type<FktTableCellsMapping[K]>;
}

type FktTableCellType = keyof FktTableCellsMapping;

export type FktTableCell<Type extends FktTableCellType = FktTableCellType> = {
	[k in FktTableCellType]: {
		type: k;
		options: FktComponentData<FktTableCellsMapping[k]>
	}
}[Type];

export interface FktTableColumn {
	position: string;
	name: string;
	cell: FktTableCell | string;
}

export interface FktTableHeader {
    id: string;
    name: string;
}

export type FktTableColumnFn<T extends FktIdentifiable> = (item: T) => FktTableColumn[]

export type FktTableClassesFn<T extends FktIdentifiable> = (item: T) => string;

export {}
