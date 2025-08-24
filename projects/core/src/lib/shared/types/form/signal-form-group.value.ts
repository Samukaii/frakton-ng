import { Prettify } from '../prettify';
import { SignalFormGroup } from '../../../form/signal-form-group';

export type SignalFormGroupValue<T extends SignalFormGroup<any>> = {
	[key in keyof T['controls']]: Prettify<
		ReturnType<T['controls'][key]['value']>
	>;
};
