import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteLabelKey } from '../fkt-autocomplete.types';

export const getLabelByKey = <Option extends Generic | string>(
    option: Option,
    key?: FktAutocompleteLabelKey<Option>
) => {
    if (typeof option === 'string') return option as string;

    if (!key)
        throw new Error(
            'Could not infer option label. Please pass a labelKey input'
        );

    if (typeof key === 'function') return key(option).toString();

    return String(option[key]);
};
