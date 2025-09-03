import { SignalValidatorFn } from './signal-validator-fn';

export type SignalValidatorConfig<T> =
	| SignalValidatorFn<T>
	| SignalValidatorFn<T>[];
