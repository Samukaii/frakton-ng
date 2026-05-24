import {
    Component,
    computed,
    DOCUMENT,
    effect,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { IncludesPipe } from '@/pipes/includes.pipe';

export interface TocItem {
    id: string;
    text: string;
    level: number;
    children: TocItem[];
}

@Component({
    selector: 'fkt-table-of-contents',
    imports: [CallPipe, IncludesPipe],
    templateUrl: './table-of-contents.component.html',
    styleUrl: './table-of-contents.component.scss',
})
export class TableOfContentsComponent {
    private readonly document = inject(DOCUMENT);
    private readonly platform = inject(PLATFORM_ID);
    protected readonly service = inject(TableOfContentsService);

    protected readonly tocItems = computed<TocItem[]>(() => {
        return this.buildFromSections(this.service.sections());
    });
    protected readonly activeIds = signal<string[]>([]);
    protected readonly hasItems = computed(() => this.tocItems().length > 0);

    @MarkUsed()
    protected readonly watchIntersection = effect((onCleanup) => {
        const sections = this.service.sections();

        this.currentObserver?.disconnect();
        this.currentObserver = null;

        setTimeout(() => {
            this.setupIntersectionObserver(sections);
        }, 500);

        onCleanup(() => {
            this.currentObserver?.disconnect();
            this.currentObserver = null;
        });
    });

    private currentObserver: IntersectionObserver | null = null;

    private buildFromSections(
        sections: { id: string; text: string; level: number }[]
    ) {
        const items: TocItem[] = [];
        const stack: TocItem[] = [];

        sections.forEach((section) => {
            const item: TocItem = { ...section, children: [] };

            while (
                stack.length > 0 &&
                stack[stack.length - 1].level >= section.level
            ) {
                stack.pop();
            }

            if (stack.length === 0) {
                items.push(item);
            } else {
                stack[stack.length - 1].children.push(item);
            }

            stack.push(item);
        });

        return items;
    }

    private setupIntersectionObserver(sections: { id: string }[]) {
        if (!isPlatformBrowser(this.platform)) return;

        const contentElement = this.document.querySelector('app-home-layout');
        if (!contentElement) return;

        const headings = sections
            .map((section) => this.document.getElementById(section.id))
            .filter((element): element is HTMLElement => element !== null);

        const visibleEntries = new Set<string>();

        this.currentObserver = new IntersectionObserver(
            (entries) => {
                entries
                    .filter((entry) => entry.isIntersecting)
                    .forEach((entry) => visibleEntries.add(entry.target.id));
                entries
                    .filter((entry) => !entry.isIntersecting)
                    .forEach((entry) => visibleEntries.delete(entry.target.id));

                if (visibleEntries.size > 0)
                    this.activeIds.set([Array.from(visibleEntries)[0]]);
            },
            {
                root: contentElement,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0,
            }
        );

        headings.forEach((heading) => this.currentObserver?.observe(heading));
    }

    protected scrollToHeading(id: string) {
        const element = this.document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    protected hasChildren(item: TocItem): boolean {
        return item.children.length > 0;
    }
}
