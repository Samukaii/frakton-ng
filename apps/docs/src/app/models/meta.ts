import { Type } from "@angular/core";
import { ArgType } from "./arg-type";
import { DesignToken } from './design-token';
import { FktComponentInputsAndModelNames } from 'frakton-ng/internal/types';
import { PlaygroundPanelStyle } from '@/models/playground-panel-style';

export interface Meta<Component = any> {
    title: string;
    loadType?: 'lazy' | 'eagerly';
    component?: Type<Component>;
    description: string;
    documentation: string;
    panelStyle?: PlaygroundPanelStyle;
    argTypes: Record<FktComponentInputsAndModelNames<Component>, ArgType>;
    designTokens?: DesignToken[]
}
