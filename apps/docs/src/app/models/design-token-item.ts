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
	type: 'size' | 'spacing' | 'color' | 'shadow' | 'weight' | 'opacity' | 'transition' | 'text-decoration' | 'border';
	defaultValue: string;
	control: WritableSignal<string>;
}
