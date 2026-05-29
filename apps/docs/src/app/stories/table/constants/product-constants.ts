import { ProductCategory } from '@/stories/table/models/product-category';
import { FktTagColor } from 'frakton-ng/tag';
import { ProductStatus } from '@/stories/table/models/product-status';

export const ProductConstants = [
    'TechCorp',
    'GlobalSupply',
    'FastShip',
    'PrimeDist',
    'MegaWholesale',
];
export const CATEGORY_COLORS: Record<ProductCategory, FktTagColor> = {
    Electronics: 'info',
    Clothing: 'warning',
    Books: 'success',
    Sports: 'danger',
    Food: 'accent',
};
export const STATUS_COLORS: Record<ProductStatus, FktTagColor> = {
    available: 'success',
    low_stock: 'warning',
    out_of_stock: 'danger',
    discontinued: 'info',
};

export const STATUS_LABELS: Record<ProductStatus, string> = {
    available: 'Available',
    low_stock: 'Low stock',
    out_of_stock: 'Out of stock',
    discontinued: 'Discontinued',
};
