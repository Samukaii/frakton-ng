import { Component, computed, effect, inject, input, resource, signal, untracked, viewChild } from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { TableOfContentsComponent } from '@/components/table-of-contents/table-of-contents.component';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';


@Component({
	selector: 'app-docs-page',
	imports: [
		FktSpinnerComponent,
		FktButtonComponent,
		TableOfContentsComponent,
		MarkdownWrapperComponent
	],
	templateUrl: './docs-page.component.html',
	styleUrl: './docs-page.component.scss',
})
export class DocsPageComponent {
	docId = input<string>();
	protected readonly stories = STORIES_MAP;

	private readonly storyLoader = inject(StoryLoaderService);

	protected readonly isLoading = signal(false);
	protected readonly copied = signal<boolean>(false);

	protected readonly tableOfContents = viewChild.required(TableOfContentsComponent);

	@MarkUsed()
	protected readonly injectOnLoad = effect(() => {
		this.docs();

		untracked(() => {
			setTimeout(() => {
				this.tableOfContents().generate();
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

	protected readonly docs = computed(() => {
		const storyData = this.currentStoryData.value();

		return storyData?.meta?.documentation;
	});

	protected copy() {
		this.copied.set(true);

		setTimeout(() => {
			this.copied.set(false);
		}, 1000)
	}
}
