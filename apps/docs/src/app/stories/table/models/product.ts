import { FktIdentifiable } from 'frakton-ng/core';
import { ProductStatus } from '@/stories/table/models/product-status';
import { ProductCategory } from '@/stories/table/models/product-category';

export interface Product extends FktIdentifiable {
    image: string;
    name: string;
    category: ProductCategory;
    price: number;
    stock: number;
    status: ProductStatus;
    rating: number;
    createdAt: string;
}
