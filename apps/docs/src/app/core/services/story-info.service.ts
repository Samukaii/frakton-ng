import { inject, Injectable } from '@angular/core';
import { STORY_INDEXER_TOKEN } from '@/tokens/story-indexer.token';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { STORY_META_TOKEN } from '@/tokens/story-meta.token';
import { ACTIVE_STORY_TOKEN } from '@/tokens/active-story.token';

@Injectable()
export class StoryInfoService {
	public readonly indexer = inject(STORY_INDEXER_TOKEN);
	public readonly meta = inject(STORY_META_TOKEN);
	public readonly activeStory = inject(ACTIVE_STORY_TOKEN);
    private readonly storyLoader = inject(StoryLoaderService);

	getComponent() {
		return this.activeStory?.component ?? this.meta.component ?? null;
	}

    getComponentName() {
        return this.activeStory.componentName ?? this.meta.componentName
    }

    async fetchExternalExamples() {
        const storyComponent = this.activeStory?.componentName;

        if(!storyComponent) return null;

        const examples = await this.storyLoader.loadExternalExamples(this.indexer);

        if(!examples) return null;

        return examples[storyComponent ?? ''] ?? null;
    }
}
