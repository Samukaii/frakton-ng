import { Component, input } from '@angular/core';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import 'frakton-ng/table';


declare module 'frakton-ng/table' {
    export interface FktTableCellsMapping {
        actions: FktTableCellWithActionComponent
    }
}


@Component({
	selector: 'fkt-table-cells-action',
	imports: [
		CallPipe,
		FktButtonsListComponent
	],
	templateUrl: './fkt-table-cell-with-action.component.html',
	styleUrl: './fkt-table-cell-with-action.component.scss'
})
export class FktTableCellWithActionComponent {
	text = input.required<{
		value: string;
		classes?: string[]
	}>()
	actions = input.required<FktButtonAction[]>();


	protected getClasses(classes?: string[]) {
		return classes?.join(' ') ?? '';
	}
}
