import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteValueKey } from '../fkt-autocomplete.types';
import { getValueByKey } from './get-value-by-key';

export const mergeByValueKey = <Option extends Generic | string>(
    options: Option[],
    valueKey?: FktAutocompleteValueKey<Option>
): Option[] => {
    const values = new Set<string | number>();

    return options.flatMap((option) => {
        const key = getValueByKey(option, valueKey);

        if (values.has(key)) return [];

        values.add(key);

        return option;
    });
};
