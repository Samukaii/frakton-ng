import { InjectionToken } from '@angular/core';
import { StoryIndexer } from '@/models/story-indexer';

export const STORY_INDEXER_TOKEN = new InjectionToken<StoryIndexer>('STORY_INDEXER_TOKEN');
