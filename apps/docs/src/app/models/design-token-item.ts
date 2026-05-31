import { WritableSignal } from '@angular/core';

export interface DesignTokenItem {
	name: string;
	reference: string;
	category: string;
	component?: string;
	scope?: {
		name: string;
		selector: string;
	};
	description: string;
	type: 'size' | 'color' | 'shadow' | 'weight' | 'opacity';
	defaultValue: string;
	control: WritableSignal<string>;
}
