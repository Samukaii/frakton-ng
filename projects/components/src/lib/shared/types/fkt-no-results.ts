import { FktIconName } from './fkt-icon-name';
import { FktButtonAction } from '../../components';

export interface FktNoResults {
	label: string;
	icon?: { name: FktIconName; size?: string };
	description?: string;
	action?: FktButtonAction;
}
