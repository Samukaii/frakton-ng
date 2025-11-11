import { InjectionToken } from '@angular/core';
import { StoryItem } from '@/models/story-item';

export const STORY_ITEM_TOKEN = new InjectionToken<StoryItem>('STORY_ITEM_TOKEN');
