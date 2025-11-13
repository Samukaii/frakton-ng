import { Component, computed, input, model, output } from '@angular/core';
import { FktIconComponent, FktIconName } from "frakton-ng/icon";
import { NgTemplateOutlet } from "@angular/common";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuGroup } from '@/models/menu.group';
import { MenuItem } from '@/models/menu.item';

const countChildren = (group: MenuGroup | MenuItem, amount = 0): number => {
	if(!('children' in group)) return 1;

	return amount + 1 + group.children.reduce(((count, child) => count + countChildren(child, amount)),0)
}

const titleIconsMap: Record<string, FktIconName> = {
	"components": "map",
	"getting started": "home",
	"migration guides": "command-line",
	"theming & styling": "paint-brush",
}


@Component({
  selector: 'fkt-side-menu-group',
	imports: [
		FktIconComponent,
		NgTemplateOutlet,
		RouterLink,
		RouterLinkActive
	],
  templateUrl: './side-menu-group.component.html',
  styleUrl: './side-menu-group.component.scss'
})
export class SideMenuGroupComponent {
	item = input.required<MenuGroup | MenuItem>();
	expanded = model(false);
    clicked = output<MenuItem>()

	icon = computed(() => {
		return titleIconsMap[this.item().title.toLowerCase()] ?? 'cube';
	});

	expandedMaxHeight = computed(() => {
		const item = this.item();

		return countChildren(item) * 32;
	})
}
