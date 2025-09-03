import { Prettify } from 'frakton-ng/internal/types';
import { SignalFormGroup } from '../signal-form-group';

export type SignalFormGroupValue<T extends SignalFormGroup<any>> = {
	[key in keyof T['controls']]: Prettify<
		ReturnType<T['controls'][key]['value']>
	>;
};
