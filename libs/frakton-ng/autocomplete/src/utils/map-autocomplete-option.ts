import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteLabelKey,
    FktAutocompleteOption,
    FktAutocompleteValueKey,
} from '../fkt-autocomplete.types';
import { getLabelByKey } from './get-label-by-key';
import { getValueByKey } from './get-value-by-key';

export interface MapAutocompleteOptionConfig<Option> {
    labelKey?: FktAutocompleteLabelKey<Option>;
    valueKey?: FktAutocompleteValueKey<Option>;
}

export const mapAutocompleteOption = <Option extends Generic | string>(
    option: Option,
    index: number,
    config: MapAutocompleteOptionConfig<Option>
): FktAutocompleteOption<Option> => {
    return {
        label: getLabelByKey(option, config.labelKey),
        value: getValueByKey(option, config.valueKey),
        raw: option,
        index,
    };
};

export const mapAutocompleteOptions = <Option extends Generic | string>(
    options: Option[],
    config: MapAutocompleteOptionConfig<Option>
) =>
    options.map((option, index) =>
        mapAutocompleteOption(option, index, config)
    );
