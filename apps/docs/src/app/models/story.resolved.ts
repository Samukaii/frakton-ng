import { ActiveStory } from '@/models/active-story';
import { ActiveMeta } from '@/models/active-meta';

export interface StoryResolved {
	meta: ActiveMeta<any>,
	stories: ActiveStory<any>[]
}
