import { Component, input } from '@angular/core';
import { ToClassPipe } from 'frakton-ng/internal/pipes';

@Component({
	selector: 'fkt-table-cell-default',
	imports: [ToClassPipe],
	templateUrl: './fkt-table-cell-default.component.html',
	styleUrl: './fkt-table-cell-default.component.scss'
})
export class FktTableCellDefaultComponent {
	classes = input<string[]>();
	value = input.required<string>();
}
