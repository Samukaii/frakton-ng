import { FormGroup } from "@angular/forms";
import { FktInferFormValue } from './fkt-infer-form-value';

export type FktInferFormValueFn<T extends (...args: any[]) => FormGroup> = FktInferFormValue<ReturnType<T>>;
