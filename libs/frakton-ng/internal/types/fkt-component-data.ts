import { FktComponentInputs } from './fkt-component-inputs';
import { Prettify } from './prettify';
import { FktComponentOutputs } from './fkt-component-outputs';
import { FktComponentTwoWayBindings } from './fkt-component-two-way-bindings';


export type FktComponentData<T> = Prettify<FktComponentInputs<T> & Partial<FktComponentOutputs<T>> & FktComponentTwoWayBindings<T>>;
