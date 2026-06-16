import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteGroupKey,
    FktAutocompleteLabelKey,
    FktAutocompleteSearchBy,
    FktAutocompleteValueKey,
} from '../fkt-autocomplete.types';
import { getLabelByKey } from './get-label-by-key';
import { getValueByKey } from './get-value-by-key';
import { normalizeSearchText } from './normalize-search-text';
import { getGroupByKey } from './get-group-by-key';

export const createDefaultSearch =
    <Option extends Generic | string>(
        labelKey: FktAutocompleteLabelKey<Option> | undefined,
        valueKey: FktAutocompleteValueKey<Option> | undefined,
        groupKey: FktAutocompleteGroupKey<Option> | undefined
    ): FktAutocompleteSearchBy<Option> =>
    (query, options) =>
        options.filter((option) => {
            const label = normalizeSearchText(getLabelByKey(option, labelKey));
            const value = normalizeSearchText(getValueByKey(option, valueKey));
            const group = normalizeSearchText(getGroupByKey(option, groupKey).label);
            const normalizedQuery = normalizeSearchText(query);

            return (
                label.includes(normalizedQuery) ||
                value.includes(normalizedQuery) ||
                group.includes(normalizedQuery)
            );
        });
