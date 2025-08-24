import { SignalFormGroup } from '../../../form/signal-form-group';
import { SignalFormArrayBuilderConfig } from './signal-form-array-builder-config';
import { SignalFormArray } from '../../../form/signal-form-array';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalFormBuilderPermissiveWithValidators } from './signal-form-builder-permissive-with-validators';
import { SignalValidatorConfig } from './signal-validator-config';
import { SignalFormControlOptions } from '../../../form/signal-form-control-options';
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
