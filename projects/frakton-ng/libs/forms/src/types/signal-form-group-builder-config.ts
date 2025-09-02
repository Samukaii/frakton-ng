import { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';
import { SignalFormControl } from '../../../form/signal-form-control';
import { Generic } from '../generic';
import { SignalFormArray } from '../../../form/signal-form-array';
import { SignalFormGroup } from '../../../form/signal-form-group';

export type SignalFormGroupBuilderConfig<T extends Generic> = {
	[key in keyof T]: T[key] extends Array<any>
		?
		| SignalFormArray<T[key]>
		| SignalFormControl<T[key]>
		| SignalFormControlBuilderConfig<T[key]>
		: T[key] extends Generic
			?
			| SignalFormGroup<T[key]>
			| SignalFormControl<T[key]>
			| SignalFormControlBuilderConfig<T[key]>
			:
			| SignalFormControl<T[key]>
			| SignalFormControlBuilderConfig<T[key]>;
};
