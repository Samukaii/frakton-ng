import { EnvironmentProviders, Provider, Type } from "@angular/core";
import { FktComponentInputs, FktComponentInputsAndModels } from "frakton-ng/internal/types";
import { Story } from '@/models/story';

export interface ActiveStory<T> extends Story<T>{
    name: string;
	component?: Type<T>,
	description: string,
	args: Partial<FktComponentInputsAndModels<T>>;
    providers?: (Provider | EnvironmentProviders)[]
}
