import { EnvironmentProviders, Provider, Type } from "@angular/core";
import { FktComponentInputs, FktComponentInputsAndModels } from "frakton-ng/internal/types";

export interface Story<T> {
	component?: Type<T>,
	description: string,
	args: Partial<FktComponentInputsAndModels<T>>;
    noPadding?: boolean;
    customDimensions?: { width?: string; height?: string };
    providers?: (Provider | EnvironmentProviders)[]
}
