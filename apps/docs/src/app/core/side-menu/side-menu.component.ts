import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES_MAP } from '@/stories/stories-map';
import { buildTree } from '@/utils/build-tree';
import { ThemeService } from '../services/theme.service';
import { SideMenuGroupComponent } from './group/side-menu-group.component';

@Component({
	selector: 'fkt-side-menu',
	imports: [
		RouterLink,
		SideMenuGroupComponent
	],
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
	private readonly themeService = inject(ThemeService);

	protected readonly menuTree = computed(() => {
		return buildTree(STORIES_MAP);
	})

	fraktonLogo = computed(() => {
		const theme = this.themeService.currentTheme();

		return theme === 'light' ? 'logos/full-logo.svg': 'logos/full-logo-dark.svg';
	})
}
