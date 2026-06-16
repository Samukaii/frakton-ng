import { Generic, StringOrNumberKeys } from 'frakton-ng/internal/types';

export interface FktAutocompleteOption<Option = Generic> {
    value: string | number;
    index: number;
    label: string;
    raw: Option | null;
}

export interface FktGroupedAutocompleteOption<Option> {
    label: string;
    value: string | number;
    items: FktAutocompleteOption<Option>[];
}

export type FktAutocompleteVirtualRenderRow<Option> =
    | {
          kind: 'group';
          group: FktGroupedAutocompleteOption<Option>;
          groupValue: string | number;
          height: number;
      }
    | {
          kind: 'item';
          item: FktAutocompleteOption<Option>;
          groupValue: string | number;
          groupLabel: string;
          height: number;
      };

export type FktAutocompleteVirtualRenderRowWithOffset<Option> =
    FktAutocompleteVirtualRenderRow<Option> & {
        index: number;
        offset: number;
        endOffset: number;
    };

export interface FktAutocompleteVirtualRange {
    startIndex: number;
    endIndex: number;
    topSpacerHeight: number;
    bottomSpacerHeight: number;
}

export interface FktAutocompleteVirtualData<Option> {
    groups: FktGroupedAutocompleteOption<Option>[];
    range: FktAutocompleteVirtualRange;
}

export interface FktAutocompleteVirtualProjection<Option> {
    rows: FktAutocompleteVirtualRenderRowWithOffset<Option>[];
    range: FktAutocompleteVirtualRange;
}

export interface FktAutocompleteItemContext<Option = Generic> {
    $implicit: FktAutocompleteOption<Option>;
    isSelected: boolean;
}

export interface FktAutocompleteGroupContext<Option = Generic> {
    $implicit: FktGroupedAutocompleteOption<Option>;
}
export type FktAutocompleteValue = (string | number | null) | (string | number)[];

export type FktAutocompleteLabelKey<Option> =
    | StringOrNumberKeys<Option>
    | ((value: Option) => string | number);

export type FktAutocompleteSearchBy<Option> = (
    query: string,
    options: Option[]
) => Option[];

export type FktAutocompleteGroupKey<Option> =
    | StringOrNumberKeys<Option>
    | ((value: Option) => string | number | { label: string; value: string });

export type FktAutocompleteValueKey<Option> =
    | keyof Option
    | ((value: Option) => string);
