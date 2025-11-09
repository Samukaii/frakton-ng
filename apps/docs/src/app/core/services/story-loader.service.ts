import { Injectable } from '@angular/core';
import { StoryItem } from '@/models/story-item';
import { StoryData } from '@/models/story.data';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import { ExternalExample } from '@/models/external-example';

@Injectable({
	providedIn: 'root'
})
export class StoryLoaderService {
	private dataCache = new Map<string, StoryData>()
	private externalExamplesCache = new Map<string, Record<string, ExternalExample> | null>()

	async loadData(currentStory: StoryItem): Promise<StoryData> {
		if(this.dataCache.has(currentStory.id))
			return this.dataCache.get(currentStory.id)!;

		const response = await currentStory.file();

		const storyData: { meta: Meta, stories: { name: string; story: Story<any> }[] } = {
			meta: response['default'],
			stories: []
		};

		for (const storyKey in response) {
			if (storyKey === 'default')
				continue;

			storyData.stories.push({
				name: storyKey,
				story: response[storyKey as keyof typeof response],
			})
		}

		this.dataCache.set(currentStory.id, storyData);

		return storyData;
	}

	async loadExternalExamples(currentStory: StoryItem): Promise<Record<string, ExternalExample> | null> {
		if(this.externalExamplesCache.has(currentStory.id))
			return this.externalExamplesCache.get(currentStory.id)!;

		const response = await currentStory.externalExamples?.();

		this.externalExamplesCache.set(currentStory.id, response ?? null);

		return response ?? null;
	}
}
