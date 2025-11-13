import { Meta } from '@/models/meta';

export interface ActiveMeta<T> extends Meta<T>{
	componentName: string | null,
}
