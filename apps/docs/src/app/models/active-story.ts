import { Story } from '@/models/story';

export interface ActiveStory<T> extends Story<T>{
    name: string;
	componentName: string | null,
}
