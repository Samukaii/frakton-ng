import { ControlType } from './control-type';

export interface ArgType {
	type: string;
	control: ControlType;
	required?: boolean;
	options?: readonly string[];
	defaultValue?: string;
	import?: string;
	category: string;
	description?: string;
}
