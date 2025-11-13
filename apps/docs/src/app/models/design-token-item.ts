import { WritableSignal } from '@angular/core';

export interface DesignTokenItem {
	name: string;
	reference: string;
	category: string;
	component?: string;
	description: string;
	type: 'size' | 'color' | 'shadow' | 'weight' | 'opacity';
	defaultValue: string;
	control: WritableSignal<string>;
}
