import { Component, input } from '@angular/core';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from '@frakton-ng/table';
import { FktButtonAction } from '@frakton-ng/button';
import { FktNoResults } from '@frakton-ng/no-results';
import { FktIdentifiable } from '@frakton-ng/core';

export interface Product extends FktIdentifiable {
	name: string;
	category: string;
	price: number;
	stock: number;
	status: 'active' | 'inactive' | 'discontinued';
	createdAt: Date;
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Laptop Pro',
		category: 'Electronics',
		price: 1299.99,
		stock: 25,
		status: 'active',
		createdAt: new Date('2023-01-10')
	},
	{
		id: 2,
		name: 'Wireless Headphones',
		category: 'Electronics',
		price: 199.99,
		stock: 0,
		status: 'inactive',
		createdAt: new Date('2023-02-15')
	},
	{
		id: 3,
		name: 'Office Chair',
		category: 'Furniture',
		price: 299.99,
		stock: 12,
		status: 'active',
		createdAt: new Date('2023-03-20')
	},
	{
		id: 4,
		name: 'Standing Desk',
		category: 'Furniture',
		price: 599.99,
		stock: 8,
		status: 'discontinued',
		createdAt: new Date('2023-01-25')
	}
];

export const productMainAction: FktButtonAction = {
	identifier: 'add-product',
	text: 'Add Product',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new product')
};

@Component({
	selector: 'fkt-table-examples-product-table',
	imports: [
		FktTableComponent
	],
	template: `
		<fkt-table
			[data]="data()"
			[columnsFn]="columnsFn"
			[classesFn]="classesFn"
			[actionsFn]="actionsFn"
			[mainAction]="mainAction()"
			[loading]="loading()"
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
			[noResults]="noResults()"
		/>
	`,
	styleUrl: './fkt-table-examples-product-table.component.scss'
})
export class FktTableExamplesProductTableComponent {
	data = input<Product[]>(products);

	mainAction = input<FktButtonAction>(productMainAction);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'document-text', size: '80px'}
	});

	columnsFn: FktTableColumnFn<Product> = (product) => [
		{
			position: '1',
			name: 'Product',
			cell: {
				type: 'default',
				options: {value: product.name}
			}
		},
		{
			position: '2',
			name: 'Category',
			cell: {
				type: 'default',
				options: {value: product.category}
			}
		},
		{
			position: '3',
			name: 'Price',
			cell: {
				type: 'badge',
				options: {
					text: `$${product.price.toFixed(2)}`,
					color: "green",
					variant: "faded"
				}
			}
		},
		{
			position: '4',
			name: 'Stock',
			cell: {
				type: 'badge',
				options: {
					text: product.stock.toString(),
					color: "blue",
					variant: "opaque"
				}
			}
		}
	];

	classesFn: FktTableClassesFn<Product> = (product) => {
		if (product.stock === 0) {
			return 'table-product-no-stock';
		}
		if (product.status === 'discontinued') {
			return 'table-product-discontinued';
		}
		return '';
	};

	actionsFn: FktTableActionFn<Product> = (product) => [
		{
			identifier: 'edit',
			condition: product.status !== 'discontinued',
			icon: 'pencil',
			color: 'green',
			theme: 'basic',
			click: () => console.log('Edit product:', product.name)
		},
		{
			identifier: 'delete',
			condition: true,
			icon: 'trash',
			color: 'red',
			theme: 'basic',
			click: () => console.log('Delete product:', product.name)
		}
	];
}
