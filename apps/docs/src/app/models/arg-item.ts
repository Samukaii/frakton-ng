import { WritableSignal } from '@angular/core';
import { ControlType } from './control-type';
import { ArgTypeSchema } from '@/models/arg-type';

export interface ArgItem<T> {
	name: string;
	type: ControlType;
    schema?: ArgTypeSchema;
	options: { value: string; label: string }[];
	description: string;
	control: WritableSignal<T>;
    ownerKey: string;
    ownerLabel: string;
}
