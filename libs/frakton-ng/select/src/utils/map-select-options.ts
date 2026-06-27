import { Generic } from 'frakton-ng/internal/types';
import {
    FktSelectLabelKey,
    FktNormalizedSelectOption,
    FktSelectValueKey,
} from '../fkt-select.types';
import { getSelectLabel } from './get-select-label';
import { getSelectValue } from './get-select-value';

export const mapSelectOptions = <Option extends Generic | string | number>(
    options: Option[],
    config: {
        labelKey?: FktSelectLabelKey<Option>;
        valueKey?: FktSelectValueKey<Option>;
    }
): FktNormalizedSelectOption<Option>[] =>
    options.map((option, index) => ({
        label: getSelectLabel(option, config.labelKey),
        value: getSelectValue(option, config.valueKey),
        raw: option,
        index,
    }));
