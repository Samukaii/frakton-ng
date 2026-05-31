import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    TemplateRef,
    Type,
} from '@angular/core';
import { FktTableColumn } from '../../../fkt-table.types';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { NgTemplateOutlet } from '@angular/common';
import { FktComponentRendererComponent } from 'frakton-ng/internal/components';
import { Generic } from 'frakton-ng/internal/types';

@Component({
    selector: 'fkt-table-cell-renderer',
    imports: [
        FktTooltipDirective,
        NgTemplateOutlet,
        FktComponentRendererComponent,
    ],
    templateUrl: './fkt-table-cell-renderer.component.html',
    styleUrl: './fkt-table-cell-renderer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktTableCellRendererComponent<T> {
    column = input.required<FktTableColumn<T>>();
    item = input.required<T>();

    private readonly cell = computed(() => {
        const column = this.column();
        const item = this.item();
        const cell = column.cell(item);

        if (typeof cell !== 'string') return cell;

        return {
            type: 'default',
            value: cell,
        };
    });

    protected readonly templateCell = computed(() => {
        const cell = this.cell();

        if (cell.type !== 'template') return null;

        return cell as { templateRef: TemplateRef<unknown>; context: Generic };
    });

    protected readonly defaultCell = computed(() => {
        const cell = this.cell();

        if (cell.type !== 'default') return null;

        return cell as { value: string };
    });

    protected readonly componentCell = computed(() => {
        const cell = this.cell();

        if (cell.type !== 'custom') return null;

        return cell as { component: Type<unknown>; data: Generic };
    });
}
