import { FktBadgeColor } from 'frakton-ng/badge';

export interface FktBadge<Id extends string = string> {
	id: Id;
	name: string;
	color: FktBadgeColor;
}
