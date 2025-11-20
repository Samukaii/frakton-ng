import { InjectionToken, Provider } from '@angular/core';
import { TableCellsToken } from './fkt-table.types';

export const TABLE_CELLS_TOKEN = new InjectionToken<TableCellsToken>('TABLE_CELLS');

export function provideTableCells(cells: TableCellsToken): Provider[] {
    return [
        {
            provide: TABLE_CELLS_TOKEN,
            useValue: cells,
        }
    ];
}
