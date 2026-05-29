import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'tr[fktTableSpacer]',
    template: `<td [attr.colspan]="context.columnsCount()" [style.height.px]="height()"></td>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'table__spacer' },
})
export class FktTableSpacerRowComponent {
    readonly height = input.required<number>();
    protected readonly context = injectTableContext();
}
