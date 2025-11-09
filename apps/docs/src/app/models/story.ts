import { Type } from "@angular/core";
import { FktComponentInputs, FktComponentInputsAndModels } from "frakton-ng/internal/types";

export interface Story<T> {
	component?: Type<T>,
	description: string,
	args: Partial<FktComponentInputsAndModels<T>>
}
