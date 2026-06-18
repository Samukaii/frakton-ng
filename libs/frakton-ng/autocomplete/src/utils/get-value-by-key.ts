import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteValueKey } from '../fkt-autocomplete.types';

export const getValueByKey = <Option extends Generic | string>(
    option: Option,
    key?: FktAutocompleteValueKey<Option>
) => {
    if (typeof option === 'string') return option;

    if (!key)
        throw new Error(
            'Could not infer option value. Please pass a valueKey input'
        );

    if (typeof key === 'function') return key(option);

    return option[key] as string | number;
};
