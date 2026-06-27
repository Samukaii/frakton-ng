import { Generic } from 'frakton-ng/internal/types';
import { FktSelectValueKey } from '../fkt-select.types';
import { getSelectValue } from './get-select-value';

export const mergeSelectOptions = <Option extends Generic | string | number>(
    options: Option[],
    valueKey?: FktSelectValueKey<Option>
) => {
    const values = new Set<string | number>();

    return options.filter((option) => {
        const value = getSelectValue(option, valueKey);

        if (values.has(value)) return false;

        values.add(value);
        return true;
    });
};
