import { Component, computed, input, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface TocItem {
	id: string;
	text: string;
	level: number;
	children: TocItem[];
}

@Component({
	selector: 'fkt-table-of-contents',
	imports: [NgTemplateOutlet],
	templateUrl: './table-of-contents.component.html',
	styleUrl: './table-of-contents.component.scss',
	host: {
		"role": "aside"
	}
})
export class TableOfContentsComponent {
	excludedContainerSelector = input<string>();

	protected readonly tocItems = signal<TocItem[]>([]);
	protected readonly activeIds = signal<string[]>([]);
	protected readonly isVisible = signal(false);

	protected readonly hasItems = computed(() => this.tocItems().length > 0);

	public generate() {
		this.generateTableOfContents();
		this.setupIntersectionObserver();
	}

	private generateTableOfContents() {
		const headings = this.getHeadings();

		const items: TocItem[] = [];
		const stack: TocItem[] = [];

		headings.forEach((heading, index) => {
			const level = parseInt(heading.tagName.charAt(1));
			const text = heading.textContent?.trim() || '';
			const id = heading.id || this.generateId(text, index);

			if (!heading.id) {
				heading.id = id;
			}

			const item: TocItem = {
				id,
				text,
				level,
				children: []
			};

			while (stack.length > 0 && stack[stack.length - 1].level >= level) {
				stack.pop();
			}

			if (stack.length === 0) {
				items.push(item);
			} else {
				stack[stack.length - 1].children.push(item);
			}

			stack.push(item);
		});

		this.tocItems.set(items);
	}

	private getHeadings() {
		const contentElement = document.querySelector('.docs');
		if (!contentElement) {
			return [];
		}

		const headings = Array.from(contentElement.querySelectorAll('h2, h3, h4, h5, h6'));

		return headings.filter(heading => {
			const excludedContainer = this.excludedContainerSelector();

			if (!excludedContainer) return true;

			return !heading.closest(excludedContainer)
		});
	}

	private generateId(text: string, index: number): string {
		const slug = text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.trim();
		return slug || `heading-${index}`;
	}

	private setupIntersectionObserver() {
		const contentElement = document.querySelector('app-docs-page');

		const headings = this.getHeadings();

		if (!contentElement) return;

		if (headings.length === 0) {
			this.isVisible.set(false);
			return;
		}

		this.isVisible.set(true);

		let visibleEntries = new Set<string>();

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleHeadings = entries
					.filter(entry => entry.isIntersecting)
					.map(entry => entry.target.id);

				const invisibleHeadings = entries
					.filter(entry => !entry.isIntersecting)
					.map(entry => entry.target.id);


				visibleHeadings.forEach(heading => visibleEntries.add(heading));
				invisibleHeadings.forEach(heading => visibleEntries.delete(heading));

				if (visibleEntries.size > 0) {
					this.activeIds.set([Array.from(visibleEntries)[0]]);
				}
			},
			{
				root: contentElement,
				rootMargin: '-40% 0px -40% 0px',
				threshold: 0
			}
		);

		headings.forEach(heading => observer.observe(heading));
	}

	protected scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (!element) return

		element.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	protected isActive(id: string): boolean {
		return this.activeIds().includes(id);
	}

	protected hasChildren(item: TocItem): boolean {
		return item.children.length > 0;
	}
}
