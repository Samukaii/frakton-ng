import { SignalFormBuilderPermissiveWithValidators } from './signal-form-builder-permissive-with-validators';
import { SignalFormBuilderPermissiveConfig } from './signal-form-builder-permissive-config';

export type SignalFormControlBuilderConfig<T> =
	| T
	| SignalFormBuilderPermissiveWithValidators<T>
	| SignalFormBuilderPermissiveConfig<T>;
