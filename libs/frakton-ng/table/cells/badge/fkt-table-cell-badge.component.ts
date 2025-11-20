import { Component, input } from '@angular/core';
import { FktBadgeColor, FktBadgeComponent, FktBadgeVariant } from 'frakton-ng/badge';
import 'frakton-ng/table';

declare module 'frakton-ng/table' {
    export interface FktTableCellsMapping {
        'badge': FktTableCellBadgeComponent
    }
}

@Component({
  selector: 'fkt-table-cell-badge',
	imports: [
		FktBadgeComponent
	],
  templateUrl: './fkt-table-cell-badge.component.html',
  styleUrl: './fkt-table-cell-badge.component.scss'
})
export class FktTableCellBadgeComponent {
	text = input.required<string>();
	color = input.required<FktBadgeColor>();
	variant = input<FktBadgeVariant>();
}
