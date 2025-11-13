import { Component, computed, output } from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { buildTree } from '@/utils/build-tree';
import { SideMenuGroupComponent } from './group/side-menu-group.component';
import { MenuItem } from '@/models/menu.item';

@Component({
    selector: 'fkt-side-menu',
    imports: [
        SideMenuGroupComponent
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
    clicked = output<MenuItem>();

    protected readonly menuTree = computed(() => {
        return buildTree(STORIES_MAP);
    })
}
