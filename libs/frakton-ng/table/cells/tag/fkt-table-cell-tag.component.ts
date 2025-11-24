import { Component, input } from '@angular/core';
import { FktTagColor, FktTagComponent, FktTagVariant } from 'frakton-ng/tag';
import 'frakton-ng/table';

declare module 'frakton-ng/table' {
    export interface FktTableCellsMapping {
        'tag': FktTableCellTagComponent
    }
}

@Component({
    selector: 'fkt-table-cell-tag',
    imports: [
        FktTagComponent
    ],
    templateUrl: './fkt-table-cell-tag.component.html',
    styleUrl: './fkt-table-cell-tag.component.scss'
})
export class FktTableCellTagComponent {
    text = input.required<string>();
    color = input.required<FktTagColor>();
    variant = input<FktTagVariant>();
}
