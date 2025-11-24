import { EnvironmentProviders, Provider, Type } from "@angular/core";
import { FktComponentInputsAndModels } from "frakton-ng/internal/types";

export interface Story<T> {
    component?: Type<T>,
    description: string,
    args: Partial<FktComponentInputsAndModels<T>>;
    variants?: {
        orientation?: 'vertical' | 'horizontal';
        gap?: string;
        items: {
            title: string;
            args: Partial<FktComponentInputsAndModels<T>>;
        }[]
    };
    noPadding?: boolean;
    customDimensions?: { width?: string; height?: string; fillContainer?: boolean };
    providers?: (Provider | EnvironmentProviders)[]
}
