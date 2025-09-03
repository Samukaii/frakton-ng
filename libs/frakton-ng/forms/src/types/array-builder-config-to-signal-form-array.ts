import { SignalFormArrayBuilderConfig } from './signal-form-array-builder-config';
import { SignalFormArray } from '../signal-form-array';
import { SignalFormGroup } from '../signal-form-group';
import { SignalFormControl } from '../signal-form-control';
import { SignalFormBuilderPermissiveWithValidators } from './signal-form-builder-permissive-with-validators';
import { SignalValidatorConfig } from './signal-validator-config';
import { SignalFormControlOptions } from './signal-form-control-options';
import { SignalFormBuilderPermissiveConfig } from './signal-form-builder-permissive-config';


export type ArrayBuilderConfigToSignalFormArray<
	T extends SignalFormArrayBuilderConfig<any>,
> =
	T[number] extends SignalFormArray<any>
		? T[number]
		: T[number] extends SignalFormGroup<any>
			? T[number]
			: T[number] extends SignalFormControl<any>
				? T[number]
				: T[number] extends SignalFormBuilderPermissiveWithValidators<
						T[number]
					>[number]
					? Array<any> extends T[number]
						? SignalFormControl<
							Exclude<
								T[number][number],
								SignalValidatorConfig<T[number] | SignalFormControlOptions<any>
								>
							>
						>
						: SignalFormControl<
							Exclude<
								T[number],
								SignalValidatorConfig<T[number] | SignalFormControlOptions<any>>
							>
						>
					: T[number] extends SignalFormBuilderPermissiveConfig<
							T[number]
						>[number]
						? Array<any> extends T[number]
							? SignalFormControl<
								Exclude<
									T[number][number],
									SignalFormControlOptions<any>
								>
							>
							: SignalFormControl<
								Exclude<
									T[number],
									SignalFormControlOptions<any>
								>
							>
						: SignalFormControl<T[number]>;
