import { ModelSignal, WritableSignal } from '@angular/core';
import { FktComponentTwoWayBindingNames } from './fkt-component-two-way-binding-names';
import { FktExtractNonUndefined } from './fkt-extract-non-undefined';
import { Prettify } from './prettify';
import { FktExtractUndefined } from './fkt-extract-undefined';


type ComponentTwoWayBinding<T> = {
	[Key in FktComponentTwoWayBindingNames<T>]: T[Key] extends ModelSignal<
		infer TwoWayBindingValue
	>
		? TwoWayBindingValue
		: never;
};

type RequiredComponentTwoWayBindings<T> = {
	[Key in FktExtractNonUndefined<ComponentTwoWayBinding<T>>]: WritableSignal<
		Prettify<ComponentTwoWayBinding<T>[Key]>
	>;
};

type OptionalComponentTwoWayBindings<T> = {
	[Key in FktExtractUndefined<ComponentTwoWayBinding<T>>]?: WritableSignal<
		Prettify<ComponentTwoWayBinding<T>[Key]>
	>;
};

export type FktComponentTwoWayBindings<T> = RequiredComponentTwoWayBindings<T> &
	OptionalComponentTwoWayBindings<T>;
