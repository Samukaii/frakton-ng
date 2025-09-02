import { SignalFormControlOptions } from './signal-form-control-options';

export type SignalFormBuilderPermissiveConfig<T> = [
	T,
	SignalFormControlOptions<T>,
];
