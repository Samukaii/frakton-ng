import { inject, Injectable } from '@angular/core';
import { STORY_ITEM_TOKEN } from '@/tokens/story-item.token';
import { STORY_DATA_TOKEN } from '@/tokens/story-data.token';

@Injectable()
export class StoryInfoService {
	public readonly storyItem = inject(STORY_ITEM_TOKEN);
	public readonly storyData = inject(STORY_DATA_TOKEN);

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
}
