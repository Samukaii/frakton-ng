import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'tr[fktTableSelectionBanner]',
    styleUrl: './fkt-table-selection-banner.component.scss',
    templateUrl: './fkt-table-selection-banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'table__selection-banner' },
})
export class FktTableSelectionBannerComponent {
    protected readonly context = injectTableContext();
    protected readonly selection = this.context.features.selection;

    readonly allSelected = computed(
        () => this.context.features.selection?.selectedState() === 'all'
    );
}
