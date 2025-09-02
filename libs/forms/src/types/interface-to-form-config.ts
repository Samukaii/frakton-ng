import  { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';
import {
	TypeToSignalFormControls,
	TypeToSignalFormGroupControls,
} from './type-to-signal-form-group-controls';
import { SignalFormControl } from '../signal-form-control';
import { SignalFormArray } from '../signal-form-array';
import { SignalFormGroup } from '../signal-form-group';
import { Generic } from '../generic';

type TypeToConfig<T> =
	T extends Array<infer U>
		? SignalFormArray<TypeToSignalFormControls<U>[]>
		: T extends Generic
			? SignalFormGroup<TypeToSignalFormGroupControls<T>>
			: SignalFormControl<T> | SignalFormControlBuilderConfig<T>;

export type InterfaceToFormConfig<T extends Generic> = {
	[key in keyof T]: TypeToConfig<T[key]>;
};
