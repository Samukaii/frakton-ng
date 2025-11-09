import { InjectionToken } from '@angular/core';
import { StoryData } from '../models/story.data';

export const STORY_DATA_TOKEN = new InjectionToken<StoryData>('STORY_DATA_TOKEN');
