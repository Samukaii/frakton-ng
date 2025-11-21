import { Meta } from '@/models/meta';

export interface ActiveMeta<T> extends Meta<T>{
    type: 'story' | 'doc';
	componentName: string | null,
}
