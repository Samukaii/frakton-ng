import { FktTagColor } from 'frakton-ng/tag';

export interface FktTag<Id extends string = string> {
	id: Id;
	name: string;
	color: FktTagColor;
}
