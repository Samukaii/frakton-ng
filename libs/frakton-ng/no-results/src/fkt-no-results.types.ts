import { FktButtonAction } from 'frakton-ng/button';
import { FktIconName } from 'frakton-ng/icon';

export interface FktNoResults {
	label: string;
	icon?: { name: FktIconName; size?: string };
	description?: string;
	action?: FktButtonAction;
}
