import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FktSelectChipDirective,
    FktSelectComponent,
    FktSelectEmptyDirective,
    FktSelectFooterDirective,
    FktSelectGroupDirective,
    FktSelectHeaderDirective,
    FktSelectItemDirective,
} from 'frakton-ng/select';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktTagColor, FktTagComponent } from 'frakton-ng/tag';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

interface Product {
    sku: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    image: string;
}

const PRODUCTS: Product[] = [
    {
        sku: 'AUD-100',
        name: 'Studio Headphones',
        category: 'Audio',
        price: 189.9,
        stock: 12,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop',
    },
    {
        sku: 'AUD-220',
        name: 'Portable Speaker',
        category: 'Audio',
        price: 89.5,
        stock: 4,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=160&h=160&fit=crop',
    },
    {
        sku: 'WRK-310',
        name: 'Mechanical Keyboard',
        category: 'Workspace',
        price: 149,
        stock: 18,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=160&h=160&fit=crop',
    },
    {
        sku: 'WRK-420',
        name: 'Ergonomic Mouse',
        category: 'Workspace',
        price: 74.9,
        stock: 0,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=160&h=160&fit=crop',
    },
    {
        sku: 'MOB-510',
        name: 'Smart Watch',
        category: 'Mobile',
        price: 229,
        stock: 7,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop',
    },
];

@Component({
    selector: 'app-select-custom-content-example',
    imports: [
        FktSelectComponent,
        FktSelectHeaderDirective,
        FktSelectGroupDirective,
        FktSelectItemDirective,
        FktSelectFooterDirective,
        FktSelectChipDirective,
        FktSelectEmptyDirective,
        FktButtonComponent,
        FktIconComponent,
        CallPipe,
        FktTagComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './select-custom-content-example.component.html',
    styleUrl: './select-custom-content-example.component.scss',
})
export class SelectCustomContentExampleComponent {
    protected readonly products = PRODUCTS;
    protected readonly selectedProducts = new FormControl<(string | number)[]>([
        'AUD-100',
    ]);
    protected readonly value = toSignal(this.selectedProducts.valueChanges, {
        initialValue: this.selectedProducts.value,
    });

    protected image(raw: unknown) {
        return (raw as Product | null)?.image ?? '';
    }

    protected category(raw: unknown) {
        return (raw as Product | null)?.category ?? '';
    }

    protected price(raw: unknown) {
        const price = (raw as Product | null)?.price;

        return price?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        }) ?? '';
    }

    protected stock(raw: unknown) {
        const stock = (raw as Product | null)?.stock ?? 0;

        return stock > 0 ? `${stock} in stock` : 'Out of stock';
    }

    protected stockColor(raw: unknown): FktTagColor {
        return (raw as Product | null)?.stock ? 'success' : 'danger';
    }
}
