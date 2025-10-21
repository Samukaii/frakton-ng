import { FktColor, FktLabelColor } from 'frakton-ng/core';
import { FktIconName } from 'frakton-ng/icon';

export const fktButtonShapes = ['rounded', 'rect'];
export const fktButtonThemes = ['raised', 'stroked', 'basic'];
export const fktButtonIconPosition = ['left', 'right'];

export type FktButtonShape = typeof fktButtonShapes[number];
export type FktButtonTheme = typeof fktButtonThemes[number];
export type FktButtonIconPosition = typeof fktButtonIconPosition[number];

type ButtonInputs<Context = any> = {
	loading?: boolean;
	disabled?: boolean;
	loadingText?: string;
	color?: FktColor;
	labelColor?: FktLabelColor;
	theme?: FktButtonTheme;
	shape?: FktButtonShape;
	icon?: FktIconName;
	type?: "submit" | "reset" | "button";
	iconPosition?: FktButtonIconPosition;
	tooltip?: string;
	identifier: string;
	condition?: boolean;
	click?: (context: Context) => void
}

export type FktButtonAction<Context = any> = ButtonInputs<Context> & ({text?: string; ariaLabel: string} | {text: string; ariaLabel?: string});
