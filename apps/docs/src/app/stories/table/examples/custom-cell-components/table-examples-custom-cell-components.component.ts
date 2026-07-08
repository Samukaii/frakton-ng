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
import { CATEGORY_COLORS } from '@/stories/table/constants/product-constants';
import { RatingCellComponent } from './cells/rating-cell/rating-cell.component';
import { ImageCellComponent } from './cells/image-cell/image-cell.component';

const cell = defineCells({
    tag: FktTagComponent,
    actions: FktButtonsListComponent,
});

@Component({
    selector: 'app-table-examples-custom-cell-components',
    imports: [FktTableComponent],
    templateUrl: './table-examples-custom-cell-components.component.html',
    styleUrl: './table-examples-custom-cell-components.component.scss',
})
export class TableExamplesCustomCellComponentsComponent {
    private readonly productsService = inject(ProductsService);

    private readonly response = resource({ loader: () => this.productsService.getAll() });
    protected readonly products = computed(() => this.response.value()?.results ?? []);

    protected columns: FktTableColumn<Product>[] = [
        {
            key: 'image',
            header: '',
            cell: (product) =>
                cell.custom(ImageCellComponent, {
                    src: product.image,
                    alt: product.name,
                }),
        },
        {
            key: 'name',
            header: 'Name',
            cell: (product) => product.name,
        },
        {
            key: 'category',
            header: 'Category',
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: product.category,
                    color: CATEGORY_COLORS[product.category],
                }),
        },
        {
            key: 'rating',
            header: 'Rating',
            cell: (product) =>
                cell.custom(RatingCellComponent, { rating: product.rating }),
        },
        {
            key: 'price',
            header: 'Price',
            cell: (product) => `$${product.price.toFixed(2)}`,
        },
        {
            key: 'actions',
            header: '',
            cell: (product) =>
                cell.actions({
                    fill: false,
                    actions: [
                        {
                            identifier: 'view',
                            icon: 'eye',
                            appearance: 'basic',
                            label: 'View product',
                            iconOnly: true,
                            click: () => console.log('view', product.name),
                        },
                    ],
                }),
        },
    ];
}
