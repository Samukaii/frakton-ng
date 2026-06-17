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
	type: 'size' | 'color';
	defaultValue: string;
}
