import { tableCellsMapping } from './cells/table-cells-mapping';
import { FktComponentData, FktIconName, FktIdentifiable } from '../../shared/types';
import { FktButtonAction } from '../button';

export interface FktTableAction extends FktButtonAction {
	classes?: string[];
	name: string;
	condition: boolean;
	icon: FktIconName;
	click: () => void;
}

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
