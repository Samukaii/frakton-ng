import { FktIconName } from 'frakton-ng/icon';

export interface FktMenuItem {
	name: string;
	icon: FktIconName;
	path: string;
}

export interface FktMenuGroup {
	name?: string;
	items: FktMenuItem[];
}
