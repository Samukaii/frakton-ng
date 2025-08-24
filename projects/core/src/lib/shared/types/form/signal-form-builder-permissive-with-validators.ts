import { SignalValidatorConfig } from './signal-validator-config';

export type SignalFormBuilderPermissiveWithValidators<T> = [
	T,
	SignalValidatorConfig<T>,
];
