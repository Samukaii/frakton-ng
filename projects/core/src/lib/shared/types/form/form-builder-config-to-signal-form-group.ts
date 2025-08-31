import { SignalFormGroupBuilderConfig } from './signal-form-group-builder-config';
import { Prettify } from '../prettify';
import { SignalFormArray, SignalFormControl, SignalFormGroup } from '../../../form';
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
