import { SignalFormControlValueInterceptors } from './signal-form-control-value-interceptors';
import { SignalValidatorFn } from './signal-validator-fn';

export interface SignalFormControlOptions<T> {
	validators?: SignalValidatorFn<T>[];
	interceptors?: SignalFormControlValueInterceptors;
}
