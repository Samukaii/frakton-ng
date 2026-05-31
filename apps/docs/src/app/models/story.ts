import { EnvironmentProviders, Provider, Type } from "@angular/core";
import { FktComponentInputsAndModelNames, FktComponentInputsAndModels } from "frakton-ng/internal/types";
import { PlaygroundPanelStyle } from '@/models/playground-panel-style';
import { ArgType } from '@/models/arg-type';

export interface Story<Component> {
    component?: Type<Component>,
    level?: number,
    description?: string,
    args: Partial<FktComponentInputsAndModels<Component>>;
    argTypes?: Partial<Record<FktComponentInputsAndModelNames<Component>, Partial<ArgType>>>
    variants?: {
        orientation?: 'vertical' | 'horizontal';
        gap?: string;
        items: {
            title: string;
            args: Partial<FktComponentInputsAndModels<Component>>;
        }[]
    };
    panelStyle?: PlaygroundPanelStyle;
    providers?: (Provider | EnvironmentProviders)[]
}

export interface StoryIntroduction {
    level?: number;
}
