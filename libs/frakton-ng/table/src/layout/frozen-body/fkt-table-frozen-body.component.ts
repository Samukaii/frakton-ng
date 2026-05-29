import {
    afterNextRender,
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    input,
    output,
} from '@angular/core';
import { FktTableClassesFn, TableItem } from '../../../fkt-table.types';
import { FktTableRowComponent } from '../row/fkt-table-row.component';
import { injectTableContext } from '../../core/inject-table-context';

@Component({
    selector: 'tbody[fktTableFrozenBody]',
    styleUrl: './fkt-table-frozen-body.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FktTableRowComponent],
    templateUrl: './fkt-table-frozen-body.component.html',
})
export class FktTableFrozenBodyComponent<Item extends TableItem> {
    readonly classesFn = input<FktTableClassesFn<Item>>(() => '');
    readonly disableRowHover = input(false, { transform: booleanAttribute });
    readonly clickableRows = input(false, { transform: booleanAttribute });

    readonly rowClick = output<Item>();

    protected readonly context = injectTableContext<Item>();

    private readonly elementRef =
        inject<ElementRef<HTMLTableSectionElement>>(ElementRef);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        afterNextRender(() => this.setupStickyOffset());
    }

    private setupStickyOffset(): void {
        const tbody = this.elementRef.nativeElement;
        const thead = tbody.closest('table')?.querySelector('thead');
        if (!thead) return;

        const update = () => {
            tbody.style.top = `${thead.offsetHeight}px`;
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(thead);
        this.destroyRef.onDestroy(() => observer.disconnect());
    }

    protected frozenData(): Item[] {
        return this.context.features.frozenRows?.frozenData() ?? [];
    }

    protected getId(item: Item): string | number {
        return this.context.getId(item);
    }
}
