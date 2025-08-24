import { SignalValidatorFnOptions } from './signal-validator-fn-options';
import { ValidationErrors } from '@angular/forms';

export type SignalValidatorFn<T> = (
	control: SignalValidatorFnOptions<T>,
) => ValidationErrors | null;
