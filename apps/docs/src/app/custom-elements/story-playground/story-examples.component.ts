import { Component, computed, inject, resource } from '@angular/core';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { STORIES_MAP } from '@/stories/stories-map';
import { StoryRendererComponent } from '@/components/story-renderer/story-renderer.component';
import { injectRouteParams } from '@/utils/inject-route-params';


@Component({
	selector: 'fkt-story-examples',
    imports: [
        StoryRendererComponent,
    ],
	templateUrl: './story-examples.component.html',
	styleUrl: './story-examples.component.scss'
})
export class StoryExamplesComponent {
	private loader = inject(StoryLoaderService);

	private readonly routeParams = injectRouteParams();

	protected readonly storyIndexer = computed(() => {
		const id = this.routeParams()['docId'];

		const story = STORIES_MAP.find(story => story.id === id);

		return story ?? null;
	});

	protected readonly storyResolved = resource({
		defaultValue: null,
		params: this.storyIndexer,
		loader: async ({params: story}) => {
			if (!story) return null;

			return (await this.loader.loadData(story)) ?? null;
		}
	});

	protected readonly stories = computed(() => {
		return this.storyResolved.value()?.stories ?? [];
	})
}
