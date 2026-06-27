import { Generic } from 'frakton-ng/internal/types';
import {
    FktGroupedSelectOption,
    FktSelectGroupKey,
    FktNormalizedSelectOption,
} from '../fkt-select.types';
import { getSelectGroup } from './get-select-group';

export const groupSelectOptions = <Option extends Generic | string | number>(
    options: FktNormalizedSelectOption<Option>[],
    groupKey?: FktSelectGroupKey<Option>
): FktGroupedSelectOption<Option>[] => {
    const groups = new Map<
        string,
        { label: string; items: FktNormalizedSelectOption<Option>[] }
    >();

    options.forEach((option) => {
        const group = option.raw
            ? getSelectGroup(option.raw, groupKey)
            : { label: '', value: '' };
        const key = group.value.toString();
        const registered = groups.get(key);

        if (registered) registered.items.push(option);
        else groups.set(key, { label: group.label, items: [option] });
    });

    let index = 0;

    return Array.from(groups.entries()).map(([value, group]) => ({
        value,
        label: group.label,
        items: group.items.map((item) => ({ ...item, index: index++ })),
    }));
};
