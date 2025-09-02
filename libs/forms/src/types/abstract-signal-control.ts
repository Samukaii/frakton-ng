import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalFormArray } from '../../../form/signal-form-array';
import { Generic } from '../generic';
import { SignalFormGroup } from '../../../form/signal-form-group';


export type AbstractSignalControl<T> =
	T extends Array<any>
		? SignalFormArray<T> | SignalFormControl<T>
		: T extends Generic
			? SignalFormGroup<T> | SignalFormControl<T>
			: SignalFormControl<T>;
