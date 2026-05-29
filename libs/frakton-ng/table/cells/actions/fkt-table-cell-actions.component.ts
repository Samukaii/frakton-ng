import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';


@Component({
    selector: 'fkt-table-cells-action',
    imports: [FktButtonsListComponent],
    templateUrl: './fkt-table-cell-with-action.component.html',
    styleUrl: './fkt-table-cell-with-action.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableCellActionsComponent {
    actions = input.required<FktButtonAction[]>();
}
