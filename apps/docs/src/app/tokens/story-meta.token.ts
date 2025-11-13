import { InjectionToken } from '@angular/core';
import { StoryResolved } from '@/models/story.resolved';
import { Meta } from '@/models/meta';
import { ActiveMeta } from '@/models/active-meta';

export const STORY_META_TOKEN = new InjectionToken<ActiveMeta<any>>('STORY_META_TOKEN');
