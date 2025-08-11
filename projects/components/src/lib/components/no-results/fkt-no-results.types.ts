import { FktButtonAction } from '../button';
import { FktIconName } from '../../shared/types';

export interface FktNoResults {
	label: string;
	icon?: { name: FktIconName; size?: string };
	description?: string;
	action?: FktButtonAction;
}
