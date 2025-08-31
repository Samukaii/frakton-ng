import { FktTableCellDefaultComponent } from './default/fkt-table-cell-default.component';
import { FktTableCellWithActionComponent } from './action/fkt-table-cell-with-action.component';
import { Type } from '@angular/core';
import { FktTableCellBadgeComponent } from './badge/fkt-table-cell-badge.component';

export const tableCellsMapping = {
	default: FktTableCellDefaultComponent,
	'with-action': FktTableCellWithActionComponent,
	badge: FktTableCellBadgeComponent
} as const satisfies Record<string, Type<any>>;
