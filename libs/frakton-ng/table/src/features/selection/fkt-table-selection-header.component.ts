import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktTablePinnedService } from '../pinned/fkt-table-pinned.service';
import { FktTableSelectionDirective } from './fkt-table-selection.directive';
import { TableItem } from '../../../fkt-table.types';

@Component({
    selector: 'th[fktTableSelectionHeader]',
    styleUrl: './fkt-table-selection-header.component.scss',
    imports: [FktCheckboxComponent],
    templateUrl: './fkt-table-selection-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'table__header-title table__header-title--checkbox',
        '[class.pinned-left]': '"__checkbox" in pinnedService.pinnedOffsets()',
        '[style.left]': 'pinnedService.pinnedOffsets()["__checkbox"]',
    },
})
export class FktTableSelectionHeaderComponent<Item extends TableItem> {
    protected readonly pinnedService = inject(FktTablePinnedService);

    protected readonly selection = inject<FktTableSelectionDirective<Item>>(
        FktTableSelectionDirective
    );

    protected readonly indeterminate = computed(
        () => this.selection.selectedState() === 'some-in-current-page'
    );
    protected readonly checked = computed(
        () =>
            this.selection.selectedState() === 'all' ||
            this.selection.selectedState() === 'all-in-current-page'
    );
}
