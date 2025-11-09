import { Meta } from "./meta";
import { Story } from "./story";

export interface StoryData {
	meta: Meta,
	stories: { name: string; story: Story<any> }[]
}
