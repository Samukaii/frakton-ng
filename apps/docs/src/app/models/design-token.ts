export interface DesignToken {
	name: string;
	reference: string;
	category: string;
	description: string;
	component?: string;
	scope?: {
		name: string;
		selector: string;
	};
	type: 'size' | 'spacing' | 'color' | 'shadow' | 'weight' | 'opacity';
	defaultValue: string;
}
