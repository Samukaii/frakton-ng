import { InjectionToken } from '@angular/core';
import { StoryData } from '../models/story.data';
import { StoryItem } from '../models/story-item';

export const STORY_ITEM_TOKEN = new InjectionToken<StoryItem>('STORY_ITEM_TOKEN');
