import { ControlType } from './control-type';

export interface ArgType {
	control: { type: ControlType },
	type: {
		name: string,
	},
	options: string[],
	table: {
		category: string,
		type: {
			summary: string
		},
		defaultValue: {
			summary: string
		}
	},
	description: string
}
