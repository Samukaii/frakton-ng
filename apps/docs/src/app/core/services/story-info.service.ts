import { inject, Injectable } from '@angular/core';
import { STORY_ITEM_TOKEN } from '@/tokens/story-item.token';
import { STORY_DATA_TOKEN } from '@/tokens/story-data.token';
import { StoryLoaderService } from '@/core/services/story-loader.service';

@Injectable()
export class StoryInfoService {
	public readonly storyItem = inject(STORY_ITEM_TOKEN);
	public readonly storyData = inject(STORY_DATA_TOKEN);
    private readonly storyLoader = inject(StoryLoaderService);

	getMeta() {
		return this.storyData.meta;
	}

	getStory(name: string) {
		return this.storyData.stories.find(story => story.name === name) ?? null;
	}

	getStoryComponent(name: string) {
		const meta = this.getMeta();
		const story = this.getStory(name);

		return story?.story?.component ?? meta.component ?? null;
	}

    getStoryComponentName(name: string) {
        const component = this.getStoryComponent(name);

        return component?.name?.replace('_', '') ?? null;
    }

    async getExternalExamples(storyName: string) {
        const storyComponent = this.getStory(storyName)?.story?.component?.name?.replace('_', '');

        if(!storyComponent) return null;

        const examples = await this.storyLoader.loadExternalExamples(this.storyItem);

        if(!examples) return null;

        return examples[storyComponent ?? ''] ?? null;
    }
}
