import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { injectTableContext } from '../../core/inject-table-context';
import { TableItem } from '../../../fkt-table.types';

@Component({
    selector: 'tr[fktTableExpandableRow]',
    templateUrl: './fkt-table-expandable-row.component.html',
    styleUrl: './fkt-table-expandable-row.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgTemplateOutlet],
    host: { class: 'table__expanded-row' },
})
export class FktTableExpandableRowComponent<Item extends TableItem> {
    readonly item = input.required<Item>();
    readonly isExpanded = input.required<boolean>();

    protected readonly context = injectTableContext<Item>();
}
