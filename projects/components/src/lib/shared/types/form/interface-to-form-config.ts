import { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';
import {
	TypeToSignalFormControls,
	TypeToSignalFormGroupControls,
} from './type-to-signal-form-group-controls';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalFormArray } from '../../../form/signal-form-array';
import { Generic } from '../generic';
import { SignalFormGroup } from '../../../form/signal-form-group';

type TypeToConfig<T> =
	T extends Array<infer U>
		? SignalFormArray<TypeToSignalFormControls<U>[]>
		: T extends Generic
			? SignalFormGroup<TypeToSignalFormGroupControls<T>>
			: SignalFormControl<T> | SignalFormControlBuilderConfig<T>;

export type InterfaceToFormConfig<T extends Generic> = {
	[key in keyof T]: TypeToConfig<T[key]>;
};
