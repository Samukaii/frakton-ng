import { Component, computed, inject, resource } from '@angular/core';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { injectRouteParams } from '@/utils/inject-route-params';
import { STORIES_MAP } from '@/stories/stories-map';

@Component({
  selector: 'fkt-arg-types',
    imports: [],
  templateUrl: './arg-types.component.html',
  styleUrl: './arg-types.component.scss',
})
export class ArgTypesComponent {
    private loader = inject(StoryLoaderService);

    private readonly routeParams = injectRouteParams();

    private readonly currentStory = computed(() => {
        const id = this.routeParams()['docId'];

        console.log(id);

        const story = STORIES_MAP.find(story => story.id === id);

        return story ?? null;
    });

    protected readonly storyData = resource({
        defaultValue: null,
        params: this.currentStory,
        loader: async ({params: story}) => {
            if (!story) return null;

            return (await this.loader.loadData(story)) ?? null;
        }
    });

    protected argTypes = computed(() => {
        const data = this.storyData.value()?.meta?.argTypes ?? {};

        return Object.entries(data ?? []).map(([key, value]) => {
            return {
                name: key,
                argType: value
            }
        })
    })
}
