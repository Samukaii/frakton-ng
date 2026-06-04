import type { FktFieldControlState } from 'frakton-ng/internal/types';
import { injectReactiveFormsControlState } from './inject-reactive-forms-control-state';
import { injectNativeInputState } from './inject-native-input-state';
import { injectFormSignalsControlState } from './inject-form-signals-control-state';

export const injectCompatFormState = <T>(): FktFieldControlState<T> => {
    const formSignalsState = injectFormSignalsControlState<T>();
    const reactiveFormsState = injectReactiveFormsControlState<T>();
    const nativeInputState = injectNativeInputState<T>();

    if (formSignalsState) return formSignalsState;

    if (reactiveFormsState) {
        reactiveFormsState.listen();
        return reactiveFormsState.state;
    }

    nativeInputState.listen();

    return nativeInputState.state;
};
