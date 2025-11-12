import { FktComponentInputNames } from './fkt-component-input-names';
import { FktComponentTwoWayBindingNames } from './fkt-component-two-way-binding-names';

export type FktComponentInputsAndModelNames<T> = FktComponentInputNames<T> | FktComponentTwoWayBindingNames<T>;
