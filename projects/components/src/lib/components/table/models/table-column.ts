import { tableCellsMapping } from '../cells/table-cells-mapping';
import { ComponentData } from '../../../types/component-data';

type TableCellsMapping = typeof tableCellsMapping;
type TableCellType = keyof TableCellsMapping;

export type TableCell<Type extends TableCellType = TableCellType> = {
  [k in TableCellType]: {
    type: k;
    options: ComponentData<InstanceType<TableCellsMapping[k]>>
  }
}[Type];

export interface TableColumn {
	position: string;
	name: string;
  cell: TableCell;
}
