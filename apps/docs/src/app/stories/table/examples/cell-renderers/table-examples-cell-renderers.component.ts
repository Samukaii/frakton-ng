import { Component, computed, inject, resource } from '@angular/core';
import {
    defineCells,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { FktTagComponent } from 'frakton-ng/tag';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { ProductsService } from '@/stories/table/services/products.service';
import { Product } from '@/stories/table/models/product';
import {
    CATEGORY_COLORS,
    STATUS_COLORS,
    STATUS_LABELS,
} from '@/stories/table/constants/product-constants';

const cell = defineCells({
    tag: FktTagComponent,
    actions: FktButtonsListComponent,
});

@Component({
    selector: 'app-table-examples-cell-renderers',
    imports: [FktTableComponent],
    templateUrl: './table-examples-cell-renderers.component.html',
    styleUrl: './table-examples-cell-renderers.component.scss',
})
export class TableExamplesCellRenderersComponent {
    private readonly productsService = inject(ProductsService);
    private readonly response = resource({
        loader: () => this.productsService.getAll(),
    });
    protected readonly products = computed(
        () => this.response.value()?.results ?? []
    );

    protected columns: FktTableColumn<Product>[] = [
        {
            key: 'name',
            description: 'string',
            header: 'Name',
            cell: (product) => product.name,
        },
        {
            key: 'category',
            header: 'Category',
            description: 'cell.tag (alias)',
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: product.category,
                    color: CATEGORY_COLORS[product.category],
                }),
        },
        {
            key: 'status',
            header: 'Status',
            description: 'cell.custom (direct ref)',
            cell: (product) =>
                cell.custom(FktTagComponent, {
                    variant: 'opaque',
                    text: STATUS_LABELS[product.status],
                    color: STATUS_COLORS[product.status],
                }),
        },
        {
            key: 'actions',
            header: 'Actions',
            description: 'cell.actions (alias)',
            cell: (product) =>
                cell.actions({
                    fill: false,
                    actions: [
                        {
                            identifier: 'edit',
                            icon: 'pencil',
                            theme: 'basic',
                            ariaLabel: 'Edit product',
                            click: () => console.log('edit', product.name),
                        },
                        {
                            identifier: 'delete',
                            icon: 'trash',
                            theme: 'basic',
                            color: 'danger',
                            ariaLabel: 'Delete product',
                            click: () => console.log('delete', product.name),
                        },
                    ],
                }),
        },
    ];
}
