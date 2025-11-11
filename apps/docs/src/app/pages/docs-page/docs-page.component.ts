import {
    Component,
    computed,
    effect,
    inject,
    input, inputBinding,
    resource,
    signal,
    untracked,
    viewChild,
    ViewContainerRef
} from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { FktTabComponent, FktTabLazyDirective, FktTabsListComponent } from 'frakton-ng/tabs';
import { StoryExamplesComponent } from '@/custom-elements/story-playground/story-examples.component';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';
import { FeaturesComponent } from '@/pages/docs-page/features/features.component';


@Component({
	selector: 'app-docs-page',
    imports: [
        FktSpinnerComponent,
        MarkdownWrapperComponent,
        FktTabsListComponent,
        FktTabComponent,
        FktTabLazyDirective,
        StoryExamplesComponent
    ],
	templateUrl: './docs-page.component.html',
	styleUrl: './docs-page.component.scss',
})
export class DocsPageComponent {
	docId = input<string>();
	protected readonly stories = STORIES_MAP;

	private readonly storyLoader = inject(StoryLoaderService);
	private readonly tableOfContentsService = inject(TableOfContentsService);

	protected readonly isLoading = signal(false);
	protected readonly copied = signal<boolean>(false);
    protected activeTab = signal('features');


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

	private readonly currentStory = computed(() => {
		const docId = this.docId();

		const found = this.stories.find(story => {
			return story.id === docId
		});

		return found ?? null;
	})

	protected readonly currentStoryData = resource({
		defaultValue: null,
		params: () => ({currentStory: this.currentStory()}),
		loader: async ({params}) => {
			const currentStory = params.currentStory;

			if(!currentStory)
				return null;

			const data = this.storyLoader.loadData(currentStory);

			this.isLoading.set(false);

			return data;
		}
	})

    protected readonly hasStories = computed(() => {
        const data = this.currentStoryData.value();

        if(!data) return false;

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

	protected readonly docs = computed(() => {
		const storyData = this.currentStoryData.value();

		return storyData?.meta?.documentation;
	});
}
