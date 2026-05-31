import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FktTagColor, FktTagComponent, FktTagVariant } from 'frakton-ng/tag';


@Component({
    selector: 'fkt-table-cell-tag',
    imports: [
        FktTagComponent
    ],
    templateUrl: './fkt-table-cell-tag.component.html',
    styleUrl: './fkt-table-cell-tag.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableCellTagComponent {
    text = input.required<string>();
    color = input.required<FktTagColor>();
    variant = input<FktTagVariant>();
}
