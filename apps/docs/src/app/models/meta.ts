import { Type } from "@angular/core";
import { ArgType } from "./arg-type";
import { DesignToken } from './design-token';
import { FktComponentInputsAndModelNames } from 'frakton-ng/internal/types';

export interface Meta<Component = any> {
    title: string;
    loadType?: 'lazy' | 'eagerly';
    component?: Type<Component>;
    description: string;
    documentation: string;
    noPadding?: boolean;
    customDimensions?: { width?: string; height?: string };
    argTypes: Record<FktComponentInputsAndModelNames<Component>, ArgType>;
    designTokens?: DesignToken[]
}
