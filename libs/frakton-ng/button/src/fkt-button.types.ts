import { FktComponentInputs, Prettify } from 'frakton-ng/internal/types';
import { FktButtonComponent } from './fkt-button.component';

export const fktButtonShapes = ['rounded', 'rect'];
export const fktButtonThemes = ['raised', 'stroked', 'basic'];
export const fktButtonIconPosition = ['left', 'right'];

export type FktButtonShape = typeof fktButtonShapes[number];
export type FktButtonTheme = typeof fktButtonThemes[number];
export type FktButtonIconPosition = typeof fktButtonIconPosition[number];
export type FktButtonAction<Context = any> = Prettify<Partial<FktComponentInputs<FktButtonComponent>> & {tooltip?: string; identifier: string; condition?: boolean; click?: (context: Context) => void}>;
