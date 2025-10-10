import { WritableSignal } from '@angular/core';

export interface DesignTokenItem {
	name: string;
	reference: string;
	category: string;
	component?: string;
	description: string;
	type: 'size' | 'color';
	defaultValue: string;
	control: WritableSignal<string>;
}
