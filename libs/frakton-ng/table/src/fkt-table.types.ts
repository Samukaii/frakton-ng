import { tableCellsMapping } from './cells/table-cells-mapping';
import { FktIdentifiable } from 'frakton-ng/core';
import { FktButtonAction } from 'frakton-ng/button';
import { FktComponentData } from 'frakton-ng/internal/types';

export type FktTableActionFn<T extends FktIdentifiable> = (item: T) => FktButtonAction[];
type FktTableCellsMapping = typeof tableCellsMapping;
type FktTableCellType = keyof FktTableCellsMapping;

export type FktTableCell<Type extends FktTableCellType = FktTableCellType> = {
	[k in FktTableCellType]: {
		type: k;
		options: FktComponentData<InstanceType<FktTableCellsMapping[k]>>
	}
}[Type];

export interface FktTableColumn {
	position: string;
	name: string;
	cell: FktTableCell;
}

export type FktTableColumnFn<T extends FktIdentifiable> = (item: T) => FktTableColumn[]

export type FktTableClassesFn<T extends FktIdentifiable> = (item: T) => string;
