import { Component, computed, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'page-navigation-example',
	templateUrl: './page-navigation-example.component.html',
	imports: [FktNavigatorComponent]
})
export class PageNavigationExampleComponent {
	protected currentPage = signal(1);
	protected totalPages = signal(10);

	protected previousPage() {
		if (this.canGoToPrevious()) {
			this.currentPage.update(page => page - 1);
		}
	}

	protected nextPage() {
		if (this.canGoToNext()) {
			this.currentPage.update(page => page + 1);
		}
	}

	protected canGoToPrevious = computed(() => {
		return this.currentPage() > 1;
	});

	protected canGoToNext = computed(() => {
		return this.currentPage() < this.totalPages();
	});
}
