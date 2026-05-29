import { Injectable } from '@angular/core';
import { Product } from '@/stories/table/models/product';
import { ProductFilters } from '@/stories/table/models/product-filters';
import { applyNumberFilter } from '@/stories/table/utils/apply-number-filter';

export interface ProductCategoryFilters {
    categories: string[];
    pageSize?: number;
}

export interface ProductStockFilters {
    inStockOnly: boolean;
    pageSize?: number;
}

export interface ProductQueryParams {
    page?: number;
    pageSize?: number;
    filters?: ProductFilters;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private cache: Product[] | null = null;

    private async load(): Promise<Product[]> {
        if (this.cache) return this.cache;
        const res = await fetch('api/products.json');
        const data = await res.json();
        this.cache = data.results
        return this.cache!;
    }

    async getAll(params?: ProductQueryParams) {
        const { filters, pageSize = 5 } = params ?? {};

        let results = await this.load();

        if (!filters) return { results: results.slice(0, pageSize), total: results.length };

        if (filters.name)
            results = results.filter((p) =>
                p.name.toLowerCase().includes(filters.name.toLowerCase())
            );

        if (filters.category)
            results = results.filter((p) => p.category === filters.category);

        if (filters.status)
            results = results.filter((p) => p.status === filters.status);

        if (filters.price?.value !== null)
            results = results.filter((p) => applyNumberFilter(p.price, filters.price));

        if (filters.stock?.value !== null)
            results = results.filter((p) => applyNumberFilter(p.stock, filters.stock));

        if (filters.createdAt?.from) {
            const from = filters.createdAt.from.toISOString();
            results = results.filter((p) => p.createdAt >= from);
        }

        if (filters.createdAt?.to) {
            const to = filters.createdAt.to.toISOString();
            results = results.filter((p) => p.createdAt <= to);
        }

        return { results: results.slice(0, pageSize), total: results.length };
    }

    async getAllWithCategoryFilter(params: ProductCategoryFilters) {
        const all = await this.load();
        const results = params.categories.length
            ? all.filter((p) => params.categories.includes(p.category))
            : all;

        return { results: results.slice(0, params.pageSize ?? 5), total: results.length };
    }

    async getAllWithStockFilter(params: ProductStockFilters) {
        const all = await this.load();
        const results = params.inStockOnly ? all.filter((p) => p.stock > 0) : all;

        return { results: results.slice(0, params.pageSize ?? 5), total: results.length };
    }
}
