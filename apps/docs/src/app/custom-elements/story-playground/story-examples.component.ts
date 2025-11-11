import { Component, computed, inject, Injector, resource } from '@angular/core';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { STORIES_MAP } from '@/stories/stories-map';
import { StoryRendererComponent } from '@/components/story-renderer/story-renderer.component';
import { StoryInfoService } from '@/core/services/story-info.service';
import { NgTemplateOutlet } from '@angular/common';
import { STORY_ITEM_TOKEN } from '@/tokens/story-item.token';
import { STORY_DATA_TOKEN } from '@/tokens/story-data.token';
import { injectRouteParams } from '@/utils/inject-route-params';


@Component({
	selector: 'fkt-story-examples',
	imports: [
		StoryRendererComponent,
		NgTemplateOutlet,
	],
	templateUrl: './story-examples.component.html',
	styleUrl: './story-examples.component.scss'
})
export class StoryExamplesComponent {
	private loader = inject(StoryLoaderService);

	private readonly routeParams = injectRouteParams();

	private readonly currentStory = computed(() => {
		const id = this.routeParams()['docId'];

		const story = STORIES_MAP.find(story => story.id === id);

		return story ?? null;
	});

	private readonly storyData = resource({
		defaultValue: null,
		params: this.currentStory,
		loader: async ({params: story}) => {
			if (!story) return null;

			return (await this.loader.loadData(story)) ?? null;
		}
	});

	protected readonly stories = computed(() => {
		return this.storyData.value()?.stories ?? [];
	})

	protected readonly injector = computed(() => {
		const story = this.currentStory();
		const data = this.storyData.value();

		if(!data || !story) return null;

		return Injector.create({
			providers: [
                {
                    provide: StoryLoaderService,
                    useValue: this.loader,
                },
				{
					provide: STORY_ITEM_TOKEN,
					useValue: story,
				},
				{
					provide: STORY_DATA_TOKEN,
					useValue: data
				},
				StoryInfoService
			]
		})

	})
}
