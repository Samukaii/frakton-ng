import { Prettify } from '../prettify';
import { SignalFormArray } from '../../../form/signal-form-array';
import { Generic } from '../generic';
import { SignalFormGroup } from '../../../form/signal-form-group';
import { SignalFormControl } from '../../../form/signal-form-control';

export type TypeToSignalFormGroupControls<T extends Generic> = {
	[key in keyof T]: TypeToSignalFormControls<T[key]>;
};

export type TypeToSignalFormControls<T> =
	T extends Array<any>
		? SignalFormArray<TypeToSignalFormControls<T[number]>[]>
		: T extends Generic
			? SignalFormGroup<Prettify<TypeToSignalFormGroupControls<T>>>
			: SignalFormControl<T>;
