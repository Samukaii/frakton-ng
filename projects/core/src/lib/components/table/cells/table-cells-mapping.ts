import { TableCellDefaultComponent } from './default/table-cell-default.component';
import { TableCellWithActionComponent } from './action/table-cell-with-action.component';
import { Type } from '@angular/core';

export const tableCellsMapping = {
  default: TableCellDefaultComponent,
  'with-action': TableCellWithActionComponent
} as const satisfies Record<string, Type<any>>;
