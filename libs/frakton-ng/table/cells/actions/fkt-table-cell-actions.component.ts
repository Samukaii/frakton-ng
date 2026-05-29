import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';


@Component({
    selector: 'fkt-table-cells-action',
    imports: [FktButtonsListComponent],
    templateUrl: './fkt-table-cell-actions.component.html',
    styleUrl: './fkt-table-cell-actions.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableCellActionsComponent {
    actions = input.required<FktButtonAction[]>();
}
