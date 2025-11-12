import { InjectionToken } from '@angular/core';
import { StoryResolved } from '@/models/story.resolved';
import { Meta } from '@/models/meta';

export const STORY_META_TOKEN = new InjectionToken<Meta>('STORY_META_TOKEN');
