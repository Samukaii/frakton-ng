import { Component, computed, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'page-navigation-example',
	template: `
		<div class="space-y-4">
			<fkt-navigator
				[canGoToPrevious]="canGoToPrevious()"
				[canGoToNext]="canGoToNext()"
				(previous)="previousPage()"
				(next)="nextPage()"
			>
				<div class="text-center text-gray-600">
					Page {{ currentPage() }} of {{ totalPages() }}
				</div>
			</fkt-navigator>
		</div>
    `,
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
