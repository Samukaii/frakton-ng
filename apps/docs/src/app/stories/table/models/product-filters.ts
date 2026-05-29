import { FktNumberFilterValue } from 'frakton-ng/table/filters/number';
import { FktDateRangeValue } from 'frakton-ng/table/filters/date-range';

export interface ProductFilters {
    name: string;
    category: string;
    status: string;
    price: FktNumberFilterValue;
    stock: FktNumberFilterValue;
    createdAt: FktDateRangeValue;
}
