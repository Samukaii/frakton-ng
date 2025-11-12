import { InjectionToken } from '@angular/core';
import { StoryResolved } from '@/models/story.resolved';

export const STORY_RESOLVED_TOKEN = new InjectionToken<StoryResolved>('STORY_RESOLVED_TOKEN');
