import { Generic, StringOrNumberKeys } from 'frakton-ng/internal/types';

export interface FktSelectOption {
    value: string | number;
    label: string;
}

export interface FktNormalizedSelectOption<Option = Generic> {
    value: string | number;
    index: number;
    label: string;
    raw: Option | null;
}

export interface FktGroupedSelectOption<Option = Generic> {
    label: string;
    value: string | number;
    items: FktNormalizedSelectOption<Option>[];
}

export type FktSelectValue =
    | string
    | number
    | null
    | (string | number)[];

export type FktSelectWritableValue<Option> =
    | string
    | number
    | Option
    | (string | number | Option)[]
    | null;

export type FktSelectLabelKey<Option> =
    | StringOrNumberKeys<Option>
    | ((value: Option) => string | number);

export type FktSelectValueKey<Option> =
    | keyof Option
    | ((value: Option) => string | number);

export type FktSelectGroupKey<Option> =
    | StringOrNumberKeys<Option>
    | ((value: Option) => string | number | { label: string; value: string });

export interface FktSelectItemContext<Option = Generic> {
    $implicit: FktNormalizedSelectOption<Option>;
    isSelected: boolean;
}

export interface FktSelectGroupContext<Option = Generic> {
    $implicit: FktGroupedSelectOption<Option>;
}

export interface FktSelectChipContext<Option = Generic> {
    $implicit: FktNormalizedSelectOption<Option>;
}

export interface FktSelectEmptyContext {
    $implicit: {
        label: string;
    };
}
