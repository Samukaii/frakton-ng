import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteGroupKey,
    FktAutocompleteOption,
    FktGroupedAutocompleteOption,
} from '../fkt-autocomplete.types';
import { getGroupByKey } from './get-group-by-key';

export const groupAutocompleteOptions = <Option extends Generic | string>(
    options: FktAutocompleteOption<Option>[],
    groupKey?: FktAutocompleteGroupKey<Option>
): FktGroupedAutocompleteOption<Option>[] => {
    const groups = new Map<
        string,
        {
            label: string;
            items: FktGroupedAutocompleteOption<Option>['items'];
        }
    >();

    options.forEach((option) => {
        const group = option.raw
            ? getGroupByKey(option.raw, groupKey)
            : {
                  label: '',
                  value: '',
              };

        if (groups.has(group.value)) groups.get(group.value)?.items.push(option);
        else
            groups.set(group.value, {
                label: group.label,
                items: [option],
            });
    });

    let count = 0;

    return Array.from(groups.entries())
        .sort((previous, current) => previous[0].localeCompare(current[0]))
        .map(([key, value]) => {
            return {
                ...value,
                value: key,
                items: value.items.map((item) => {
                    return {
                        ...item,
                        index: count++,
                    };
                }),
            };
        });
};
