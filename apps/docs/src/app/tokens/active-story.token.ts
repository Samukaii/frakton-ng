import { InjectionToken } from '@angular/core';
import { ActiveStory } from '@/models/active-story';

export const ACTIVE_STORY_TOKEN = new InjectionToken<ActiveStory<any>>('ACTIVE_STORY_TOKEN');
