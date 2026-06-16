import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteGroupKey } from '../fkt-autocomplete.types';

export const getGroupByKey = <Option extends Generic | string>(
    value: Option,
    key?: FktAutocompleteGroupKey<Option>
) => {
    if (!key)
        return {
            label: '',
            value: '',
        };

    if (typeof key === 'function') {
        const result = key(value);

        if (typeof result === 'string' || typeof result === 'number')
            return { value: result.toString(), label: result.toString() };

        return result;
    }

    const result: string = value[key] ? String(value[key]) : '';

    return { value: result, label: result };
};
