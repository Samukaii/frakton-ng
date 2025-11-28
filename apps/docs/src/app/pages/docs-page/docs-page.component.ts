import {
    Component,
    computed,
    DestroyRef,
    DOCUMENT,
    effect,
    inject,
    input,
    linkedSignal,
    resource,
    signal,
    untracked
} from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';
import { injectCurrentRoute } from '@/utils/inject-current-route';
import { startWith, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { DocsPageTabsComponent } from '@/pages/docs-page/tabs/docs-page-tabs.component';
import { Meta, Title } from '@angular/platform-browser';
import { ArgTypesComponent } from '@/custom-elements/arg-types/arg-types.component';


@Component({
    selector: 'app-docs-page',
    imports: [
        DocsPageTabsComponent,
    ],
    templateUrl: './docs-page.component.html',
    styleUrl: './docs-page.component.scss',
})
export class DocsPageComponent {
    docId = input<string>();
    tab = input<string>();
    protected readonly stories = STORIES_MAP;

    private readonly activeRoute = injectCurrentRoute();

    private readonly storyLoader = inject(StoryLoaderService);
    private readonly router = inject(Router);
    private readonly document = inject(DOCUMENT);
    private readonly tableOfContentsService = inject(TableOfContentsService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly titleService = inject(Title)
    private readonly metaService = inject(Meta)
    protected readonly copied = signal<boolean>(false);

    protected activeTab = linkedSignal(() => {
        const tab = this.tab();
        const docType = this.currentStoryData.value()?.meta.type;

        if (docType === 'doc') return 'api-reference'

        return tab === 'api-reference' ? 'api-reference' : 'features';
    });

    @MarkUsed()
    updateTitle = effect(() => {
        const storyData = this.currentStoryData.value();

        const title = storyData?.meta.title.split('/').at(-1);
        const tab = this.tab() === 'features' ? 'Features' : "API";

        if (!storyData || !title || title.toLowerCase() === 'installation') {
            this.setMetaTags({
                title: "Frakton NG • A next-generation Angular UI Library",
                description: "Modern tokens, signal-native architecture, enforced accessibility and infinite visual freedom."
            })

            return;
        }

        this.setMetaTags({
            title: `${title} - ${tab} | Frakton NG`,
            description: storyData.meta.description?.substring(0, 120) ?? "Modern tokens, signal-native architecture, enforced accessibility and infinite visual freedom."
        })
    })

    private lastSub: Subscription | null = null;

    @MarkUsed()
    protected scrollToAnchor = effect(() => {
        this.activeRoute();
        this.docId();
        this.activeTab();

        this.lastSub?.unsubscribe();

        this.lastSub = this.activeRoute().fragment.pipe(startWith(this.activeRoute().snapshot.fragment), takeUntilDestroyed(this.destroyRef)).subscribe((fragment) => {
            if (!fragment) return;

            setTimeout(() => {
                this.document.getElementById(fragment)?.scrollIntoView({
                    behavior: 'smooth',
                    block: "center"
                });
            }, 100)
        })
    })


    @MarkUsed()
    protected readonly injectOnLoad = effect(() => {
        this.activeTab();
        this.docs();

        untracked(() => {
            setTimeout(() => {
                this.tableOfContentsService.generate();
            })
        })
    })

    protected readonly currentIndexer = computed(() => {
        const docId = this.docId();

        const found = this.stories.find(story => {
            return story.id === docId
        });

        return found ?? null;
    })

    protected readonly currentStoryData = resource({
        defaultValue: null,
        params: () => ({indexer: this.currentIndexer(), tab: this.tab()}),
        loader: async ({params}) => {
            const indexer = params.indexer;

            if (!indexer)
                return null;

            return this.storyLoader.loadData(indexer);
        }
    })

    private setMetaTags(params: {title: string; description: string}) {
        this.titleService.setTitle(params.title);
        this.metaService.updateTag({
            property: "og:title",
            content: params.title,
        })

        this.metaService.updateTag({
            name: "twitter:title",
            content: params.title,
        })

        this.metaService.updateTag({
            name: "description",
            content: params.description,
        })

        this.metaService.updateTag({
            property: "og:description",
            content: params.description,
        })

        this.metaService.updateTag({
            name: "twitter:description",
            content: params.description,
        })
    }

    protected readonly docs = computed(() => {
        const storyData = this.currentStoryData.value();

        return storyData?.meta?.documentation;
    });

    protected async onActiveTabChange($event: string) {
        await this.router.navigate(['docs', this.docId(), $event]);
    }
}
