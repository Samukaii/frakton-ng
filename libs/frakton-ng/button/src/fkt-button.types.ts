import { fktColors, FktLabelColor } from 'frakton-ng/core';
import { FktIconName } from 'frakton-ng/icon';

export const fktButtonShapes = [
    'default',
    'pill',
    'squircle',
    'rounded',
    'sharp',
] as const;
export const fktButtonAppearances = [
    'default',
    'raised',
    'stroked',
    'basic',
] as const;
export const fktButtonThemes = fktButtonAppearances;
export const fktButtonSizes = ['default', 'sm', 'md', 'lg'] as const;
export const fktButtonTypes = ['button', 'submit', 'reset'] as const;
export const fktButtonIconPositions = ['left', 'right'] as const;
export const fktButtonColors = [...fktColors, 'default'] as const;

export type FktButtonShape = (typeof fktButtonShapes)[number];
export type FktButtonAppearance = (typeof fktButtonAppearances)[number];
export type FktButtonTheme = FktButtonAppearance;
export type FktButtonSize = (typeof fktButtonSizes)[number];
export type FktButtonType = (typeof fktButtonTypes)[number];
export type FktButtonColor = ((typeof fktButtonColors)[number]) | (string & {});

export type FktButtonIconPosition =
    (typeof fktButtonIconPositions)[number];

export interface FktButtonAction<Context = unknown> {
    identifier: string;
    label: string;
    hideLabel?: boolean;
    loading?: boolean;
    disabled?: boolean;
    color?: FktButtonColor;
    labelColor?: FktLabelColor;
    appearance?: FktButtonAppearance;
    shape?: FktButtonShape;
    size?: FktButtonSize;
    type?: FktButtonType;
    tooltip?: string;
    condition?: boolean;
    click?: (context: Context) => void;

    /**
     * Configuration convenience rendered by `FktButtonsList`.
     */
    icon?: FktIconName;
    iconPosition?: FktButtonIconPosition;
}
