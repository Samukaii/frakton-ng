import { FktBadgeColor } from '../badge';

export interface FktBadge<Id extends string = string> {
	id: Id;
	name: string;
	color: FktBadgeColor;
}
