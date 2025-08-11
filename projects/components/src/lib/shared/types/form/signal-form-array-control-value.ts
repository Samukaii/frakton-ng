import { SignalFormArrayControls } from './signal-form-array-controls';

export type SignalFormArrayControlValue<
	T extends SignalFormArrayControls<any>,
> = ReturnType<T[number]['value']>[];
