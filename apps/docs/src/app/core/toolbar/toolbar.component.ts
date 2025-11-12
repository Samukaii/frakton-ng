import { Component, computed, inject } from '@angular/core';
import { FktIconComponent } from "frakton-ng/icon";
import { ThemeService } from '../services/theme.service';

@Component({
	selector: 'fkt-toolbar',
	imports: [
		FktIconComponent
	],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
	protected readonly themeService = inject(ThemeService);

	protected buttonThemeLabel = computed(() => {
		return this.themeService.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
	});

	protected buttonThemeIcon = computed(() => {
		return this.themeService.currentTheme() === 'dark' ? 'sun' : 'moon';
	})

	protected toggleTheme() {
		this.themeService.toggleTheme();
	}
}
