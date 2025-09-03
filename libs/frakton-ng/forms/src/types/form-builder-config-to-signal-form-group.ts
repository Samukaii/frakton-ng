import { Prettify } from 'frakton-ng/internal/types';
import { SignalFormGroupBuilderConfig } from './signal-form-group-builder-config';
import { SignalFormArray } from '../signal-form-array';
import { SignalFormGroup } from '../signal-form-group';
import { SignalFormControl } from '../signal-form-control';
import { SignalFormBuilderPermissiveWithValidators } from './signal-form-builder-permissive-with-validators';
import { SignalValidatorConfig } from './signal-validator-config';
import { SignalFormControlOptions } from './signal-form-control-options';

export type FormBuilderConfigToSignalFormGroup<
	T extends SignalFormGroupBuilderConfig<any>,
> = Prettify<{
	[key in keyof T]: T[key] extends SignalFormArray<any>
		? T[key]
		: T[key] extends SignalFormGroup<infer V>
			? SignalFormGroup<V>
			: T[key] extends SignalFormControl<any>
				? T[key]
				: T[key] extends SignalFormBuilderPermissiveWithValidators<
							T[key]
					  >[number]
					? Array<any> extends T[key]
						? SignalFormControl<
								Exclude<
									T[key][number],
									SignalValidatorConfig<T[key]> | SignalFormControlOptions<any>
								>
							>
						: SignalFormControl<
								Exclude<T[key], SignalValidatorConfig<T[key] | SignalFormControlOptions<any>>>
							>
					: SignalFormControl<T[key]>;
}>;
