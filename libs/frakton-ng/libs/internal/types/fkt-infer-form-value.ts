import { FormGroup } from "@angular/forms";

export type FktInferFormValue<T extends FormGroup> = ReturnType<T['getRawValue']>;
