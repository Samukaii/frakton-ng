import { Prettify } from './prettify';
import { FktOrSignal } from './fkt-or-signal';
import { FktComponentInputs } from './fkt-component-inputs';
import { FktComponentOutputs } from './fkt-component-outputs';
import { FktComponentTwoWayBindings } from './fkt-component-two-way-bindings';

export type FktReactiveComponentData<T> = Prettify<
	FktOrSignal<FktComponentInputs<T>> &
		Partial<FktComponentOutputs<T>> &
		FktComponentTwoWayBindings<T>
>;
