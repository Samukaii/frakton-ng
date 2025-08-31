import { Component, input } from '@angular/core';
import { CallPipe } from '../../../../pipes';
import { FktButtonsListComponent } from '../../../buttons-list';
import { FktButtonAction } from '../../../button';


@Component({
	selector: 'fkt-translations-cells-action',
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
