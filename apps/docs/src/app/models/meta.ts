import { Type } from "@angular/core";
import { ArgType } from "./arg-type";
import { DesignToken } from './design-token';
import {
	FktComponentInputsAndModelNames
} from 'frakton-ng/internal/types';

export interface Meta<Component = any> {
	title: string;
	loadType?: 'lazy' | 'eagerly';
	component?: Type<Component>;
	documentation: string;
	argTypes: Record<FktComponentInputsAndModelNames<Component>, ArgType>;
	designTokens?: DesignToken[]
}
