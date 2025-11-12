import { MenuItem } from "./menu.item";

export interface MenuGroup {
	title: string;
	children: (MenuGroup | MenuItem)[];
}
