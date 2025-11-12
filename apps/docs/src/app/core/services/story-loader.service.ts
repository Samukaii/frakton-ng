import { Injectable } from '@angular/core';
import { StoryIndexer } from '@/models/story-indexer';
import { StoryResolved } from '@/models/story.resolved';
import { ExternalExample } from '@/models/external-example';

@Injectable({
    providedIn: 'root'
})
export class StoryLoaderService {
    private dataCache = new Map<string, StoryResolved>()
    private externalExamplesCache = new Map<string, Record<string, ExternalExample> | null>()

    async loadData(currentStory: StoryIndexer): Promise<StoryResolved> {
        if (this.dataCache.has(currentStory.id))
            return this.dataCache.get(currentStory.id)!;

        const response = await currentStory.file();

        const storyData: StoryResolved = {
            meta: response['default'],
            stories: []
        };

        currentStory.stories?.forEach(story => {
            storyData.stories.push({
                ...response[story.name as keyof typeof response],
                name: story.name
            })
        })

        this.dataCache.set(currentStory.id, storyData);

        return storyData;
    }

    async loadExternalExamples(currentStory: StoryIndexer): Promise<Record<string, ExternalExample> | null> {
        if (this.externalExamplesCache.has(currentStory.id))
            return this.externalExamplesCache.get(currentStory.id)!;

        const response = await currentStory.externalExamples?.();

        this.externalExamplesCache.set(currentStory.id, response ?? null);

        return response ?? null;
    }
}
