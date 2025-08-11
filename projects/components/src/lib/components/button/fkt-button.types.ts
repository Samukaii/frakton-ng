import { FktComponentInputs, Prettify } from '../../shared/types';
import { FktButtonComponent } from './fkt-button.component';

export const fktButtonVariants = ['default', 'icon', 'rect'];
export const fktButtonThemes = ['raised', 'stroked', 'basic'];

export type FktButtonVariant = typeof fktButtonVariants[number]
export type FktButtonTheme = typeof fktButtonThemes[number]
export type FktButtonAction<Context = any> = Prettify<Partial<FktComponentInputs<FktButtonComponent>> & {tooltip?: string; identifier: string; click?: (context: Context) => void}>;
