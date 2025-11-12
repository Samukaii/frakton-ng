import { Meta } from "./meta";
import { Story } from "./story";
import { ActiveStory } from '@/models/active-story';

export interface StoryResolved {
	meta: Meta,
	stories: ActiveStory<any>[]
}
