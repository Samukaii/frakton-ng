import { InputSignal } from '@angular/core';
import { FktComponentInputNames } from './fkt-component-input-names';
import { FktExtractNonUndefined } from './fkt-extract-non-undefined';
import { Prettify } from './prettify';
import { FktExtractUndefined } from './fkt-extract-undefined';


type ComponentInput<T> = {
	[Key in FktComponentInputNames<T>]: T[Key] extends InputSignal<
		infer InputValue
	>
		? InputValue
		: never;
};

type RequiredComponentInputs<T> = {
	[Key in FktExtractNonUndefined<ComponentInput<T>>]: Prettify<
		ComponentInput<T>[Key]
	>;
};

type OptionalComponentInputs<T> = {
	[Key in FktExtractUndefined<ComponentInput<T>>]?: Prettify<
		ComponentInput<T>[Key]
	>;
};

export type FktComponentInputs<T> = RequiredComponentInputs<T> &
	OptionalComponentInputs<T>;
