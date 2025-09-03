import { Generic } from 'frakton-ng/internal/types';
import { SignalFormControl } from '../signal-form-control';
import { SignalFormArray } from '../signal-form-array';
import { SignalFormGroup } from '../signal-form-group';


export type AbstractSignalControl<T> =
	T extends Array<any>
		? SignalFormArray<T> | SignalFormControl<T>
		: T extends Generic
			? SignalFormGroup<T> | SignalFormControl<T>
			: SignalFormControl<T>;
