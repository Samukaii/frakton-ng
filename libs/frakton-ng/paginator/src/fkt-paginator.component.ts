import { Component, computed, input, model, output } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktSelectComponent } from 'frakton-ng/select';
import { DEFAULT_PAGINATOR_CONFIG, FktPaginatorConfig, FktPaginatorEvent, FktPaginatorState } from './fkt-paginator.types';

@Component({
	selector: 'fkt-paginator',
	imports: [
		FktButtonComponent,
		FktSelectComponent
	],
	templateUrl: './fkt-paginator.component.html',
	styleUrl: './fkt-paginator.component.scss'
})
export class FktPaginatorComponent {
	page = model(1);
	pageSize = model(10);
	total = input.required<number>();
	config = input<FktPaginatorConfig>({});
	disabled = input<boolean>(false);

	protected mergedConfig = computed(() => ({
		...DEFAULT_PAGINATOR_CONFIG,
		...this.config()
	}));

	protected totalPages = computed(() => {
		return Math.ceil(this.total() / this.pageSize());
	});

	protected currentPage = computed(() => this.page());

	protected startItem = computed(() => {
		return (this.page() - 1) * this.pageSize() + 1;
	});

	protected endItem = computed(() => {
		return Math.min(this.page() * this.pageSize(), this.total());
	});

	protected visiblePages = computed(() => {
		const totalPages = this.totalPages();
		const currentPage = this.currentPage();
		const maxVisible = this.mergedConfig().maxVisiblePages;

		if (totalPages <= maxVisible) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const half = Math.floor(maxVisible / 2);
		let start = Math.max(1, currentPage - half);
		let end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	});

	protected pageSizeOptions = computed(() => {
		const options = this.mergedConfig().pageSizeOptions;
		return options.map(size => ({
			label: `${size} items`,
			value: size
		}));
	});

	protected canGoPrevious = computed(() => this.currentPage() > 1);
	protected canGoNext = computed(() => this.currentPage() < this.totalPages());

	goToPage(page: number): void {
		if (page < 1 || page > this.totalPages() || page === this.currentPage() || this.disabled()) {
			return;
		}

		this.page.set(page)
	}

	goToFirst(): void {
		this.goToPage(1);
	}

	goToLast(): void {
		this.goToPage(this.totalPages());
	}

	goToPrevious(): void {
		this.goToPage(this.currentPage() - 1);
	}

	goToNext(): void {
		this.goToPage(this.currentPage() + 1);
	}

	changePageSize(newPageSize: string | number | null): void {
        if(typeof newPageSize !== 'number') return;

		if (newPageSize === this.pageSize() || this.disabled()) {
			return;
		}

		const currentItem = this.startItem();
		const newPage = Math.ceil(currentItem / newPageSize);

        this.page.set(newPage);
		this.pageSize.set(newPageSize);
	}
}
