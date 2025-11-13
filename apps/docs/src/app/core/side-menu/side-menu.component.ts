import { Component, computed } from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { buildTree } from '@/utils/build-tree';
import { SideMenuGroupComponent } from './group/side-menu-group.component';
import { FktDrawerComponent } from 'frakton-ng/drawer';

@Component({
	selector: 'fkt-side-menu',
    imports: [
        SideMenuGroupComponent,
        FktDrawerComponent
    ],
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
	protected readonly menuTree = computed(() => {
		return buildTree(STORIES_MAP);
	})
}
