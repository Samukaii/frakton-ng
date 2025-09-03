import { Generic } from 'frakton-ng/internal/types';
import { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';
import { SignalFormArray } from '../signal-form-array';
import { SignalFormControl } from '../signal-form-control';
import { SignalFormGroup } from '../signal-form-group';


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
