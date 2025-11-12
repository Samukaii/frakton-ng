import {
    Component,
    computed, DestroyRef,
    effect,
    inject,
    input,
    linkedSignal,
    OnInit,
    resource,
    signal,
    untracked
} from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { FktTabComponent, FktTabsListComponent } from 'frakton-ng/tabs';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';
import { FeaturesComponent } from '@/pages/docs-page/features/features.component';
import { SkeletonComponent } from '@/components/skeleton/skeleton.component';
import { SkeletonContainerComponent } from '@/components/skeleton-container/skeleton-container.component';
import { injectCurrentRoute } from '@/utils/inject-current-route';
import { startWith, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
    selector: 'app-docs-page',
    imports: [
        MarkdownWrapperComponent,
        FktTabsListComponent,
        FktTabComponent,
        SkeletonComponent,
        SkeletonContainerComponent,
        FeaturesComponent
    ],
    templateUrl: './docs-page.component.html',
    styleUrl: './docs-page.component.scss',
})
export class DocsPageComponent implements OnInit {
    docId = input<string>();
    protected readonly stories = STORIES_MAP;

    activeRoute = injectCurrentRoute();

    private readonly storyLoader = inject(StoryLoaderService);
    private readonly tableOfContentsService = inject(TableOfContentsService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly isLoading = signal(false);
    protected readonly copied = signal<boolean>(false);
    protected activeTab = linkedSignal(() => {
        this.docId();

        return 'features'
    });

    lastSub: Subscription | null = null;

    ngOnInit() {

    }

    a = effect(() => {
        this.activeRoute();
        this.docId();
        this.activeTab();

        this.lastSub?.unsubscribe();

        this.lastSub = this.activeRoute().fragment.pipe(startWith(this.activeRoute().snapshot.fragment), takeUntilDestroyed(this.destroyRef)).subscribe((fragment) => {
            if (!fragment) return;

            setTimeout(() => {
                document.getElementById(fragment)?.scrollIntoView({
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

    private readonly currentIndexer = computed(() => {
        const docId = this.docId();

        const found = this.stories.find(story => {
            return story.id === docId
        });

        return found ?? null;
    })

    protected readonly currentStoryData = resource({
        defaultValue: null,
        params: () => ({indexer: this.currentIndexer()}),
        loader: async ({params}) => {
            const indexer = params.indexer;

            if (!indexer)
                return null;

            const data = this.storyLoader.loadData(indexer);

            this.isLoading.set(false);

            return data;
        }
    })

    protected readonly hasStories = computed(() => {
        const data = this.currentStoryData.value();

        if (!data) return false;

        return data.stories.length > 0;
    })

    title = computed(() => {
        const data = this.currentStoryData.value();

        const fullTitle = data?.meta?.title;

        return fullTitle?.split('/').at(-1) ?? ''
    })

    description = computed(() => {
        const data = this.currentStoryData.value();

        return data?.meta?.description ?? '';
    })

    importStatement = computed(() => {
        const indexer = this.currentIndexer();
        const data = this.currentStoryData.value();
        const componentName = data?.meta?.component?.name.replaceAll('_', '');

        return `import {${componentName}} from "frakton-ng/${indexer?.id}";`
    })

    protected readonly docs = computed(() => {
        const storyData = this.currentStoryData.value();

        return storyData?.meta?.documentation;
    });
}
