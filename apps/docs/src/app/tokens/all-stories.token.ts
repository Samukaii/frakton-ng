import { InjectionToken } from '@angular/core';
import { ActiveStory } from '@/models/active-story';

export const ALL_STORIES_TOKEN = new InjectionToken<ActiveStory<any>[]>('ALL_STORIES_TOKEN');
