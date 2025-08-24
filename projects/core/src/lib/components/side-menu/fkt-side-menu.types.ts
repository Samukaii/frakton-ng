import { FktIconName } from '../../shared/types';

export interface FktMenuItem {
	name: string;
	icon: FktIconName;
	path: string;
}

export interface FktMenuGroup {
	name?: string;
	items: FktMenuItem[];
}
