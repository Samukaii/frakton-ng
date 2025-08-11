import { Component, input } from '@angular/core';
import { FktIconComponent } from '../../../icon/fkt-icon.component';
import { IconName } from '../../../../types/icon-name';
import { CallPipe } from '../../../../pipes/call.pipe';


@Component({
	selector: 'fkt-translations-cells-action',
	imports: [
		FktIconComponent,
		CallPipe
	],
	templateUrl: './table-cell-with-action.component.html',
	styleUrl: './table-cell-with-action.component.scss'
})
export class TableCellWithActionComponent {
	text = input.required<{
		value: string;
		classes?: string[]
	}>()
	actions = input.required<{
		icon: IconName;
		condition: boolean;
		classes?: string[];
		click: () => void;
	}[]>();


	protected getClasses(classes?: string[]) {
		return classes?.join(' ') ?? '';
	}
}
