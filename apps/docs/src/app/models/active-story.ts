import { Story } from '@/models/story';

export interface ActiveStory<T> extends Story<T> {
    name: string;
    type: 'story' | 'introduction' | 'section';
    componentName: string | null;
}
