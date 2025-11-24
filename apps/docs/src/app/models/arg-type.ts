import { ControlType } from './control-type';

export type ArgTypeSchema = Record<string, {
    type: ControlType;
    schema?: ArgTypeSchema;
    options?: string[];
}>

export interface ArgType {
	type: string;
	control: ControlType;
	schema?: ArgTypeSchema;
	required?: boolean;
	options?: readonly string[];
	defaultValue?: string;
	import?: string;
	category: string;
	description?: string;
}
