import { EnvironmentProviders, Provider, Type } from "@angular/core";
import { FktComponentInputsAndModels } from "frakton-ng/internal/types";
import { PlaygroundPanelStyle } from '@/models/playground-panel-style';

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
    panelStyle?: PlaygroundPanelStyle;
    providers?: (Provider | EnvironmentProviders)[]
}
