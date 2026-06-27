import { Generic } from 'frakton-ng/internal/types';
import { FktSelectLabelKey } from '../fkt-select.types';

export const getSelectLabel = <Option extends Generic | string | number>(
    option: Option,
    labelKey?: FktSelectLabelKey<Option>
): string => {
    if (typeof labelKey === 'function') return labelKey(option).toString();
    if (labelKey) return String(option[labelKey]);
    if (typeof option === 'string' || typeof option === 'number')
        return option.toString();

    throw new Error(
        'fkt-select: labelKey is required when options are objects.'
    );
};
